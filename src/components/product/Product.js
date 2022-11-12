import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Product({prd,handleRemove,setSelectedProduct}) {
  const navigate = useNavigate();
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    navigate(`/product/update`)
}
  return (
    <div key={prd.productId}>
        {prd.productId} {prd.productName} {prd.quantity}  {prd.price}
        <button onClick={() => handleRemove(prd.productId)}>Remove</button>
        <button onClick={() => handleSelectProduct(prd)} >Select</button>
    </div>
  )
}
