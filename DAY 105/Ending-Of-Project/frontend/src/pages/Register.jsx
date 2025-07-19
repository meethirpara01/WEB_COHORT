import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { asyncregisteruser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';

export const Register = () => {

    const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const RegisterHandler = (user) =>
    {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = [];
        console.log(user);
        dispatch(asyncregisteruser(user));
        navigate("/login")
    }
  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className=' flex flex-col w-1/2 justify-start items-start'>
        <input {...register("username")} className=' outline-0 border-b p-2 text-3xl' type="text" placeholder='John-Doe' />
        <input {...register("email")} className=' outline-0 border-b p-2 text-3xl' type="email" placeholder='Johndoe123@gmail.com' />
        <input {...register("password")} className=' outline-0 border-b p-2 text-3xl' type="password" placeholder='*******' />
        <button className='mt-5 px-4 py-2 bg-blue-400 rounded cursor-progress '>Register User</button>
        <p className=' mt-5'>Already Have An Account ? <Link className=' text-blue-400 cursor-pointer ' to="/login">Login</Link></p>
    </form>
  )
}

export default Register