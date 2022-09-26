import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddProduct } from './components/AddProduct';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { SingleProduct } from './components/SingleProduct';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>

    </div>
  );
}

export default App;
