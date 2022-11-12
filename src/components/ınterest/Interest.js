import { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
let total=0;

export default function Interest() {
  const {productList,setProductList} = useContext(AppContext);
  const [totalValue,setTotalValue] = useState(total);

  
  function handleInterest(e) {
    e.preventDefault();
    productList.map((prd) => {prd.price =parseInt(prd.price)*1.20});
    setProductList([...productList]);
  } 

  function handleSum(e) {
    e.preventDefault();
    for(let i in productList) {
      productList.map((prd) => {prd.quantity = parseInt(prd.quantity)})
      productList.map((prd) => {prd.price = parseInt(prd.price)})
      total+=productList[i].quantity*productList[i].price;
      setTotalValue(total);
    }
    
    
  }
  function handleClearTotal() {
    total=0;
    setTotalValue(total);
  }

  const Interest = (e,id) => {
    e.preventDefault();
    productList.map((prd) => {prd.price = parseInt(prd.price) });
    for(let i in productList) {
      if(productList[i].productId === id) {
        productList[i].price*=1.20;
      }
    }
    setProductList([...productList]);
  }
  
  return (
    <div>
      <h3>Interest</h3>
      {productList.map((prd,index)=>(
        <p key={index} >{prd.productId} {prd.productName} {prd.quantity} {prd.price} 
         <button onClick={(e) => Interest(e,prd.productId)} >Interest</button> 
        </p> ))}
      
      <p>Total:{total}</p> 
      <button onClick={(e) => handleInterest(e)}>Interest</button>
      <button onClick={(e)=>{handleSum(e,total);}} >Sum Of Shopping Cart</button>
      <button onClick={handleClearTotal} >TotalClear</button>
    </div>
  );
}
