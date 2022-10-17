import React, { useState } from "react";
import Header from "./components/header/Header";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductList from "./components/ProductList.jsx/ProductList";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);

  function addProduct(newObj) {
    let newProducts = [...products];
    newProducts.push(newObj);
    console.log(newProducts);
    setProducts(newProducts);
  }

  return (
    <>
      <Header handleShow={handleShow} />
      <AddProduct
        show={show}
        handleClose={handleClose}
        addProduct={addProduct}
      />
      <ProductList products={products} />
    </>
  );
};

export default App;
