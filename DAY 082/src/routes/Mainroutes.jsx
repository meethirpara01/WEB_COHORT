import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Product from '../components/Product';
import Service from '../components/Service';
import About from '../components/About';
import React from 'react'

const Mainroutes = () => {
  return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/about" element={<About />} />
        </Routes>
  );
}

export default Mainroutes