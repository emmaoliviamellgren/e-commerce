const ProductCard = ({product}) => {

  return (
    <div className="rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400">
      <div className="border-b border-slate-300">
        <h3 className="px-6 pt-6 text-sm text-gray-700">{product.name}</h3>
        <p className="px-6 pt-2 pb-6 text-lg font-semibold text-gray-900">{product.price}</p>
      </div>
      <div className="mb-12">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain"/>
      </div>
    </div>
  )
}
export default ProductCard