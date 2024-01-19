import { createContext } from "react"

export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {

    const value = {
        test: 'hej',
    }

    return (
        <ProductsContext.Provider value={value}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider