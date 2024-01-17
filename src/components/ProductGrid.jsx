import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const ProductGrid = () => {

  const API_KEY = 'https://js2-ecommerce-api.vercel.app/api/products'
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(API_KEY)
      .then(response => {
        if(!response.ok) {
          console.log('Something went wrong.' + response.status)
        }
        return response.json();
      })
      .then(data => {
        setProducts(data)
      })

  }, [API_KEY])

  return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 m-14">
    {products && products.map((product) => {
        return <ProductCard product={product} key={product._id}/>
    })}
      </div>
  )
}
export default ProductGrid