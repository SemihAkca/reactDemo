import { createContext, useState } from "react"
import { products } from "../../Data";


export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [productList,setProductList] = useState(products);
    const [selectedProduct,setSelectedProduct] = useState({productId:"",productName:"",quantity:"",price:""});


    const values = { appName: "Products",productList,setProductList,selectedProduct,setSelectedProduct,products}
    return (
        <AppContext.Provider value={values} >{children}</AppContext.Provider>
    )

}