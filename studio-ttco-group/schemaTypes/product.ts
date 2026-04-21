// schemas/product.ts
export default {
  name: 'product',
  title: 'Sản phẩm Thép',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tên sản phẩm',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Danh mục',
      type: 'string',
      options: {
        list: [
          { title: 'Thép không gỉ', value: 'stainless' },
          { title: 'Thép Carbon', value: 'carbon' },
          { title: 'Sản phẩm mạ kẽm', value: 'galvanized' },
        ],
      },
    },
    {
      name: 'productImage',
      title: 'Hình ảnh sản phẩm (Cloudinary)',
      type: 'string',
    },
    {
      name: 'specifications',
      title: 'Mác thép/Quy cách',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'thickness',
      title: 'Độ dày',
      type: 'string',
    },
    {
      name: 'width',
      title: 'Chiều rộng',
      type: 'string',
    },
    {
      name: 'standard',
      title: 'Tiêu chuẩn',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Mô tả sản phẩm',
      type: 'text',
    },
  ],
}