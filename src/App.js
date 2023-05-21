import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Product';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Products/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
