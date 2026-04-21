// File: src/routes/products.tsx
import { createFileRoute } from '@tanstack/react-router'
import ProductPage from '../components/ProductPage' 

// Lưu ý: Nếu file tên là products.tsx thì bên dưới phải là '/products'
export const Route = createFileRoute('/products')({ 
  component: ProductsComponent,
})

function ProductsComponent() {
  return (
    <div className="pt-2"> 
      <ProductPage />
    </div>
  )
}