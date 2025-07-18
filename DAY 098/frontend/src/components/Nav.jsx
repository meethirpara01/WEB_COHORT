import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { asynclogoutuser } from '../store/actions/userActions';

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  // console.log(user);

  const logoutHandler = () =>
  {
    dispatch(asynclogoutuser());
    navigate("/");
    
  }
  
  return (
    <nav className=' mb-10 flex justify-center items-center gap-x-5 p-10'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Product</NavLink>
        {user ? (
          <>
            <NavLink to={"/admin/create-product"}>Create Product</NavLink>
            <button onClick={logoutHandler} >Logout</button>
          </>
          ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
          </>
        )}
    </nav>
  )
}

export default Nav