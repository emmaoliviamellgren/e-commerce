const ProductCard = ({product}) => {

  return (
    <div className="flex max-w-xl flex-col items-start justify-between bg-slate-300">
      <p>{product.name}</p>
      <p>{product.price}</p>
      <img src={product.images[0]} alt={product.name} />
    </div>
  )
}
export default ProductCard