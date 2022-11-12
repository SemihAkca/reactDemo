import { useContext} from "react";
import ProductList from "./components/productList/ProductList";
import ProductAdd from "./components/productAdd/ProductAdd"
import ProductUpdate from "./components/productUpdate/ProductUpdate";
import { AppContext } from "./components/context/AppContext";
import Interest from "./components/ınterest/Interest"
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const {appName} = useContext(AppContext); 
  return (
    <div>
      <h1>{appName}</h1>
      <ul>
        <li><Link to={"/"} >Home</Link></li>
        <li><Link to={"/products"} >Product List</Link></li>
        <li><Link to={"/product/add"} >Add Product</Link></li>
        <li><Link to={"product/update"} >Product Update</Link></li>
        <li><Link to={"/ınterest"} >Interest</Link></li>
      </ul>

      <Routes>
        <Route path="/products" element = {<ProductList />} />
        <Route path="/product/add" element = {<ProductAdd />} />
        <Route path="/product/update" element = {<ProductUpdate />} />
        <Route path="/ınterest" element = {<Interest />} />
      </Routes>
      
    </div>
  );
}
export default App;
