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
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {products && products.map((product) => {
        return <ProductCard product={product} key={product._id}/>
    })}
    </div>
  )
}
export default ProductGrid