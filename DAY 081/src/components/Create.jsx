import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import style from "./Create.module.css";

const Create = (props) => {

    const Todos = props.Todos;
    const setTodos = props.setTodos;

    const {register, handleSubmit, reset, formState: { errors }, } = useForm();
    

    const SubmitHandler = (data) => {  
        data.isCompleted = false;
        data.id = nanoid();
        console.log(data);

        const copytodos = [...Todos];
        copytodos.push(data);
        setTodos(copytodos);

        toast.success("Todo Created!");

        reset();     
  } 
  console.log(errors);


  console.log(Todos);
  return (
    <div className="w-[70%] p-10">
        <h1 className="text-5xl font-thin mb-10">Set <span className="text-red-400">Reminders</span> For Tasks</h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <input {...register("Title" ,{required:"Title Can Not Be Empty"},)} className="border-b w-full text-5xl font-thin p-2 outline-0" type="text" placeholder="title"/>
            {/* {errors && errors.Title && errors.Title.message && <small>{errors.Title.message}</small>} */}
            <small className="font-thin text-red-300">{errors?.Title?.message}</small>

            <br />
            <br />
            <button className="mt-5 text-xl px-10 py-2 border rounded cursor-pointer">Create Todo</button> 
      </form>
    </div>
  )
}

export default Create;