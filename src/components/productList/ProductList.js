import React, { useContext } from 'react'
import Product from '../product/Product';
import { products } from '../../Data';
import { AppContext } from '../context/AppContext';
import Interest from '../ınterest/Interest';


export default function ProductList() {
    const {productList,setProductList,setSelectedProduct} = useContext(AppContext);
    const handleClearAll = () => {
        setProductList([]);
    };
    function handleGetAll() {
        setProductList(products);
    }

    function handleRemove(id) {
        setProductList(productList.filter(prd => prd.productId!==id));
    }
    return (
        <div>
            <h2>ProductList {productList.length}</h2>
            {productList.map((prd,index)=> (
                <Product key={index} prd = {prd} handleRemove = {handleRemove} setSelectedProduct = {setSelectedProduct} />
            ))}
            <button onClick={handleClearAll} >ClearAll</button>
            <button onClick={handleGetAll} >GetAll</button>
        </div>
    )
}
