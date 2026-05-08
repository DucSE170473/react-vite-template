import { useEffect, useState } from "react"
import axios from "axios"
import { createClient } from "@sanity/client"
import { 
  Package, Plus, Settings2, Ruler, 
  ShieldCheck, Trash2, X, AlertCircle, LogOut 
} from "lucide-react"
import { signInWithPopup, signOut, onAuthStateChanged, type User } from "firebase/auth"
import { auth, googleProvider } from "../lib/firebase"

// 1. Cấu hình Sanity Client
const sanity = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: false, // Bắt buộc false để thực hiện Mutation (Thêm/Xóa)
  ignoreBrowserTokenWarning: true
})

type Product = {
  _id?: string
  name?: string
  title?: string
  category?: string
  productImage?: string
  image_url?: string
  imageUrl?: string
  specifications?: string[]
  power?: string
  price?: number
  thickness?: string
  width?: string
  standard?: string
  description?: string
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false) 
  const [file, setFile] = useState<File | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [form, setForm] = useState<Product>({
    name: "",
    category: "Sản phẩm thép không gỉ",
    specifications: [],
    thickness: "",
    width: "",
    standard: "",
    description: ""
  })

  // Lấy danh sách sản phẩm
  const fetchProducts = async () => {
    try {
      const data = await sanity.fetch(`*[_type == "product"] | order(_createdAt desc) {
        _id,
        "name": coalesce(name, title),
        title,
        "category": coalesce(category, power),
        "productImage": coalesce(productImage, image_url, imageUrl),
        imageUrl,
        image_url,
        "specifications": coalesce(specifications, select(defined(power) => [power], [])),
        power,
        price,
        thickness,
        width,
        standard,
        description
      }`)
      setProducts(data)
    } catch (err) {
      console.error("Lỗi khi tải dữ liệu:", err)
    }
  }

  useEffect(() => { fetchProducts() }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser?.email !== 'thanhcongttco@gmail.com') {
        setShowAdmin(false)
      }
    })
    return () => unsubscribe()
  }, [])

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user.email !== 'thanhcongttco@gmail.com') {
        alert('Bạn không có quyền quản trị viên!');
        await signOut(auth);
      } else {
        setShowAdmin(true);
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      const code = typeof error === "object" && error && "code" in error ? String(error.code) : ""

      if (code === "auth/unauthorized-domain") {
        alert("Domain hiện tại chưa được thêm vào Firebase Authorized domains. Vui lòng thêm ttb-corp.vercel.app trong Firebase Authentication.")
        return
      }

      if (code === "auth/popup-blocked") {
        alert("Trình duyệt đang chặn cửa sổ đăng nhập Google. Vui lòng cho phép popup cho website này rồi thử lại.")
        return
      }

      if (code !== "auth/popup-closed-by-user") {
        alert("Không thể mở đăng nhập Google. Vui lòng kiểm tra Firebase Authorized domains và thử lại.")
      }
    }
  }

  const handleLogout = async () => {
    await signOut(auth);
    setShowAdmin(false);
  }

  // Upload ảnh lên Cloudinary
  const uploadImage = async () => {
    if (!file) return ""
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
    const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
    )
    return res.data.secure_url
  }

  // Hàm thêm sản phẩm
  const handleSubmit = async () => {
    if (!form.name || !file) return alert("Vui lòng nhập tên và chọn ảnh")
    setLoading(true)
    try {
      const imageUrl = await uploadImage()
      await sanity.create({ _type: "product", ...form, imageUrl })
      alert("Đã thêm sản phẩm thành công!")
      setForm({ ...form, name: "", specifications: [], description: "" })
      setFile(null)
      setShowAdmin(false)
      fetchProducts()
    } catch (err) {
      alert("Lỗi khi upload dữ liệu. Kiểm tra lại quyền Editor của Token Sanity.")
    } finally { setLoading(false) }
  }

  // --- HÀM XÓA SẢN PHẨM MỚI THÊM ---
  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không? Thao tác này không thể hoàn tác.")) return
    
    setLoading(true)
    try {
      await sanity.delete(id)
      alert("Đã xóa sản phẩm thành công!")
      fetchProducts() // Tải lại danh sách
    } catch (err) {
      console.error("Lỗi khi xóa:", err)
      alert("Không thể xóa sản phẩm. Vui lòng kiểm tra lại cấu hình CORS và Token.")
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Banner Tiêu đề */}
      <div className="bg-[var(--brand-primary)] py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Danh mục Sản phẩm</h1>
          <p className="text-blue-200/70 font-medium tracking-widest uppercase text-xs md:text-sm italic">Giải pháp vật liệu thép chất lượng cao TTB CORP</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10">
        {/* Nút bật Admin */}
        <div className="flex justify-end mb-8 gap-4">
          {!user ? (
            <button 
              onClick={handleLogin}
              className="px-6 py-2 rounded-full shadow-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all bg-white text-slate-900 hover:bg-slate-900 hover:text-white border border-slate-200"
            >
              <Settings2 size={14}/> Đăng nhập quản lý
            </button>
          ) : (
            <>
              {user.email === 'thanhcongttco@gmail.com' && (
                <button 
                  onClick={() => setShowAdmin(!showAdmin)}
                  className={`px-6 py-2 rounded-full shadow-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all ${
                    showAdmin ? 'bg-red-500 text-white' : 'bg-white text-slate-900 hover:bg-slate-900 hover:text-white border border-slate-200'
                  }`}
                >
                  {showAdmin ? <><X size={14}/> Đóng bảng quản lý</> : <><Settings2 size={14}/> Quản lý sản phẩm</>}
                </button>
              )}
              <button 
                onClick={handleLogout}
                className="px-6 py-2 rounded-full shadow-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all bg-slate-200 text-slate-700 hover:bg-slate-300"
              >
                <LogOut size={14}/> Đăng xuất
              </button>
            </>
          )}
        </div>

        {/* FORM ADMIN */}
        {showAdmin && (
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-blue-100 mb-12 animate-in fade-in slide-in-from-top-4">
            <h2 className="text-xl font-black text-[var(--brand-primary)] uppercase mb-6 flex items-center gap-2">
                <Package className="text-[var(--brand-accent)]" /> Đăng ký thông số thép mới
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Tên sản phẩm</label>
                <input className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none text-sm font-bold focus:ring-2 ring-blue-500" 
                       placeholder="VD: Thép tấm mạ kẽm" onChange={e => setForm({...form, name: e.target.value})}/>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Phân loại</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none text-sm font-bold focus:ring-2 ring-blue-500"
                        onChange={e => setForm({...form, category: e.target.value})}>
                  <option>Sản phẩm thép không gỉ</option>
                  <option>Sản phẩm thép carbon</option>
                  <option>Sản phẩm mạ kẽm</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Mác thép (cách nhau dấu phẩy)</label>
                <input className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none text-sm font-bold focus:ring-2 ring-blue-500" 
                       placeholder="304, 316, 201..." onChange={e => setForm({...form, specifications: e.target.value.split(",")})}/>
              </div>
              <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Độ dày</label>
                <input className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none text-sm font-bold" placeholder="0.5mm - 20mm" onChange={e => setForm({...form, thickness: e.target.value})}/>
              </div>
              <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Khổ rộng</label>
                <input className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none text-sm font-bold" placeholder="1000mm, 1500mm" onChange={e => setForm({...form, width: e.target.value})}/>
              </div>
              <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Hình ảnh</label>
                <input type="file" className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-blue-50 file:text-blue-700" onChange={e => setFile(e.target.files?.[0] || null)}/>
              </div>
            </div>
            <button disabled={loading} onClick={handleSubmit} className="mt-8 w-full md:w-auto bg-[var(--brand-primary)] text-[var(--brand-accent)] px-12 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg disabled:opacity-50">
               {loading ? "Đang xử lý dữ liệu..." : "Xác nhận đăng tải"}
            </button>
          </div>
        )}

        {/* DANH SÁCH SẢN PHẨM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p._id} className="group bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-500 flex flex-col relative">
              
              {/* NÚT XÓA - Chỉ hiện khi đang ở chế độ quản lý */}
              {showAdmin && (
                <button 
                  onClick={() => p._id && handleDelete(p._id)}
                  className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur text-red-500 p-2 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-lg border border-red-100"
                  title="Xóa sản phẩm"
                >
                  <Trash2 size={18} />
                </button>
              )}

              <div className="h-64 overflow-hidden relative">
                {p.productImage ? (
                  <img src={p.productImage} alt={p.name || p.title || "Product image"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <Package size={44} />
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter text-blue-600 shadow-sm italic">
                  {p.category || p.power || "Product"}
                </div>
              </div>

              <div className="p-8 space-y-5 flex-grow">
                <h3 className="text-2xl font-black text-[var(--brand-primary)] uppercase leading-tight group-hover:text-blue-600 transition-colors">{p.name || p.title}</h3>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-slate-500">
                        <Ruler size={16} className="text-blue-400" />
                        <span className="text-xs font-bold">Dày: {p.thickness || "Liên hệ"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                        <ShieldCheck size={16} className="text-blue-400" />
                        <span className="text-xs font-bold">Chuẩn: {p.standard || "ASTM"}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {p.specifications?.map(spec => (
                    <span key={spec} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">{spec}</span>
                  ))}
                </div>

                <div className="pt-4 mt-auto">
                    <a href="tel:0792515151" className="flex items-center justify-center w-full py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[var(--brand-primary)] font-black text-[10px] uppercase tracking-widest hover:bg-[var(--brand-accent)] hover:text-white transition-all">
                        Liên hệ báo giá ngay
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thông báo nếu chưa có sản phẩm */}
        {products.length === 0 && !loading && (
          <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-300">
            <AlertCircle className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-400 font-bold uppercase tracking-widest">Chưa có sản phẩm nào được đăng tải</p>
          </div>
        )}
      </div>
    </div>
  )
}
