import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


export default function ProductUpdate() {
    const navigate = useNavigate();
    const { selectedProduct, setSelectedProduct, productList, setProductList } = useContext(AppContext);
    const handleChange = (e) => {
        setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value })
    }

    function handleSubmitUpdate(e) {
        e.preventDefault();
        setProductList([...productList.filter(prd => prd.productId !== selectedProduct.productId),
            selectedProduct
        ])
        navigate(`/products`);
    }
    return (
        <div>
            <h3>Product Update</h3>
            <p>{JSON.stringify(selectedProduct)}</p>
            <form onSubmit={handleSubmitUpdate}>
                <p>
                    <input id='productName'
                        name='productName'
                        type="text"
                        onChange = {handleChange}
                        value={selectedProduct.productName}
                        placeholder="Product Name" />
                </p>
                <p>
                    <input id='quantity'
                        name='quantity'
                        type="text"
                        onChange={handleChange}
                        value={selectedProduct.quantity}
                        placeholder="Quantity" />
                </p>
                <p>
                    <input id='price'
                        name='price'
                        type="text"
                        onChange={handleChange}
                        value={selectedProduct.price}
                        placeholder="Price" />
                </p>
                <button type="submit" >Update</button>
            </form>
        </div>
    )
}
