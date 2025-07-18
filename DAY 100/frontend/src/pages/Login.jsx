import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { asyncloginuser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';

export const Login = () => {

    const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const LoginHandler = (user) =>
    {
        console.log(user);
        dispatch(asyncloginuser(user));
        navigate("/");
        
    }
  return (
    <form onSubmit={handleSubmit(LoginHandler)} className=' flex flex-col w-1/2 justify-start items-start'>
        
        <input {...register("email")} className=' outline-0 border-b p-2 text-3xl' type="email" placeholder='Johndoe123@gmail.com' />
        <input {...register("password")} className=' outline-0 border-b p-2 text-3xl' type="password" placeholder='*******' />
        <button className=' mt-5 px-4 py-2 bg-blue-400 rounded cursor-pointer '>Loing User</button>
        <p className=' mt-5'>Don't Have An Account ? <Link className=' text-blue-400 cursor-pointer ' to="/register">Register</Link></p>
        
    </form>
  )
}

export default Login