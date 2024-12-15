import React from 'react'; 
import "./App.css"
import Layout from "./components/Layout/Layout"
import Cart from "./components/Cart/Cart"
import Product from "./components/Shop/Product"
function App() {
    return(
      <Layout>
          <Cart />
          <Product />
      </Layout>
    )
}
export default App;
