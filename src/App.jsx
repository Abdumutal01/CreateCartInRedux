import React from 'react';
import "./App.css"
import Layout from "./components/Layout/Layout"
import Cart from "./components/Cart/Cart"
import Product from "./components/Shop/Product"
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Layout>

      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Layout>
  )
}
export default App;
