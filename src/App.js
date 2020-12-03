import { useState } from "react";
import ProductList from "./components/list/ProductList";
import AddProduct from "./components/AddProduct";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const handleSubmit = (product) => {
    setProducts([...products, product]);
  };
  return (
    <div className="App">
      <AddProduct handleSubmit={handleSubmit} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
