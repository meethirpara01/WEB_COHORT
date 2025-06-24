import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Product from '../components/Product';
import Service from '../components/Service';
import About from '../components/About';
import React from 'react'
import ProductDetails from "../components/ProductDetails";
import ServiceDetails from "../components/ServiceDatail";
import ServiceUpdate from "../components/ServiceUpdate";

const Mainroutes = () => {
  return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/product/detail/:name" element={<ProductDetails />} />

            <Route path="/Service" element={<Service />} >
                  <Route path="/Service/detail" element={<ServiceDetails />} />
                  <Route path="/Service/update" element={<ServiceUpdate />} />
            </Route>

            <Route path="/about" element={<About />} />
        </Routes>
  );
}

export default Mainroutes