import {useState} from 'react';
import './App.css';
import CreateProduct from './CreateProductComponent/CreateProduct';
import ProductList from './ProductList/ProductList';

function App() {

  // just experiencing how to pass data from buttom up
  function getForm(product){
    console.log(product)
  } 

  let [newProduct, setNewProduct] = useState(null);
  return (
    <div>
      <CreateProduct createProduct={getForm}></CreateProduct>
      <ProductList newProduct={newProduct}></ProductList>
    </div>
  );
}

export default App;
