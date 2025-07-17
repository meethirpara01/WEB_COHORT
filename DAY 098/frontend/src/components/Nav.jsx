import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom'

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  // console.log(user);
  
  return (
    <nav className=' mb-10 flex justify-center items-center gap-x-5 p-10'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Product</NavLink>
        {user ? (<NavLink to={"/admin/create-product"}>Create Product</NavLink>) : (<NavLink to={"/login"}>Login</NavLink>)}
    </nav>
  )
}

export default Nav