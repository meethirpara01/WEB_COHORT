import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='flex justify-center gap-10 p-10'>
        <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to={"/Home"}>Home</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to={"/Product"}>Product</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to={"/Service"}>Services</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to={"/About"}>About</NavLink>
    </div>
  )
}

export default Nav