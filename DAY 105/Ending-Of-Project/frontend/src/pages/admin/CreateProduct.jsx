import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asynccreateproduct } from '../../store/actions/productActions';

const CreateProduct = () => {
  const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CreateProductHandler = (product) =>
    {
        product.id = nanoid();
        console.log(product);
        dispatch(asynccreateproduct(product));
        navigate("/");
    }
  return (
    <form onSubmit={handleSubmit(CreateProductHandler)} className=' flex flex-col w-1/2 justify-start items-start'>
        <input {...register("image")} className=' outline-0 border-b p-2 text-3xl' type="url" placeholder='Image URL' />
        <input {...register("title")} className=' outline-0 border-b p-2 text-3xl' type="text" placeholder='Title' />
        <input {...register("price")} className=' outline-0 border-b p-2 text-3xl' type="number" placeholder='Price' />
        <textarea {...register("description")} className=' outline-0 border-b p-2 text-3xl' placeholder='Enter Description Here'></textarea>
        <input {...register("categorty")} className=' outline-0 border-b p-2 text-3xl' type="text" placeholder='Categorty' />
        <button className='mt-5 px-4 py-2 bg-blue-400 rounded cursor-progress'>Create Product</button>
    </form>
  )
}

export default CreateProduct