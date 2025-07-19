import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import { useSelector } from 'react-redux';
import UnauthWrapper from './UnauthWrapper';
const Home = lazy(() => import('../pages/Home'));
const Product = lazy(() => import('../pages/Product'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'));
const ProductDetails = lazy(() => import('../pages/admin/ProductDetails'));
const UserProfile = lazy(() => import('../pages/user/UserProfile'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const Cart = lazy(() => import('../pages/Cart'));
const AuthWrapper = lazy(() => import('./AuthWrapper'));


const Mainroutes = () => {

  const { users } = useSelector((state) => state.userReducer);
  console.log(users);
  
  return (
    <Routes>
        <Route path='/' element={<Product />} /> 
        {/* <Route path='/' element={ users ? <Product /> : <Home />} />  */}
        {/* <Route path='/products' element={<Product />} />  */}

        <Route path='/login' element={<UnauthWrapper> <Login /> </UnauthWrapper>} /> 
        <Route path='/register' element={<UnauthWrapper> <Register /> </UnauthWrapper>} /> 


        <Route path='/admin/create-product' element={<AuthWrapper> <CreateProduct /> </AuthWrapper>} /> 
        <Route path='/admin/user-profile' element={<AuthWrapper> <UserProfile /> </AuthWrapper>} /> 
        <Route path='/product/:id' element={<AuthWrapper> <ProductDetails /> </AuthWrapper>} /> 
        {/* <Route path='/admin/product/:id' element={<Register />} />  */}
        <Route path='/cart' element={<AuthWrapper> <Cart /> </AuthWrapper>} /> 

        <Route path='*' element={<PageNotFound />} /> 
    </Routes>
  )
}

export default Mainroutes;