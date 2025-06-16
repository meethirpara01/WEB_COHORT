import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-10 p-10'>
        <Link to={"/Home"}>Home</Link>
        <Link to={"/Product"}>Product</Link>
        <Link to={"/Service"}>Services</Link>
        <Link to={"/About"}>About</Link>
    </div>
  )
}

export default Nav