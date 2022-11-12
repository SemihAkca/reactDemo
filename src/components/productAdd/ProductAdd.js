import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

export default function EmployeeAdd() {
    const {productList,setProductList} = useContext(AppContext);
    const [values,setValues] = useState({productName:"",quantity:"" , price:"" })
    function handleChange(e) {
        setValues({...values,
            [e.target.name]: e.target.value })
    }

    const handleClear = () => {
        setValues({productName:"",quantity:"",price:""})
    }
    const handleSubmitAdd = (e) => {
        e.preventDefault();
        setProductList([...productList,
            {productId:productList.length+1,
            ...values
        }
        ])
        setValues({productName:"",quantity:"" , price:"" });
    };
    return (
        <div>
            <h3>Product Add</h3>
            <form onSubmit={handleSubmitAdd}>
                <p>
                    <input 
                    id='productName' 
                    name='productName'
                    type="text"
                    onChange={handleChange}
                    value = {values?.productName}
                    placeholder='Product Name' />
                </p>
                <p>
                    <input 
                    id='quantity' 
                    name='quantity'
                    type= "text"
                    onChange={handleChange}
                    value = {values?.quantity}
                    placeholder = " Quantity" />
                </p>
                <p>
                    <input 
                    id='price'
                    name='price'
                    type ="text"
                    onChange = {handleChange}
                    value ={values?.price}
                    placeholder = "Price" />
                </p>
                <button type='submit'>Add</button>
                <button type = "button" onClick={handleClear} >Clear</button>
            </form>
        </div>
    )
}
