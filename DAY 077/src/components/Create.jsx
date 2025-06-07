import { nanoid } from "nanoid";
import { useState } from "react";
// import style from "./Create.module.css";

const Create = (props) => {

    const Todos = props.Todos;
    const setTodos = props.setTodos;
    const [Title, setTitle] = useState("");

    const submitHandler = (e) => {  
        e.preventDefault();
        const newtodo = 
        {
        id: nanoid(),
        Title,
        isCompleted: true,
        };
    
        let copytodos = [...Todos];
        copytodos.push(newtodo);
        setTodos(copytodos);
 
        setTitle("");

        // setTodos([...Todos], newtodo);    
  }


  console.log(Todos);
  return (
    <div className="w-[70%] p-10">
        <h1 className="text-5xl font-thin mb-10">Set <span className="text-red-400">Reminders</span> For Tasks</h1>
        <form onSubmit={submitHandler}>
            <input className="border-b w-full text-5xl font-thin p-2 outline-0" onChange={(e) => setTitle(e.target.value)} value={Title} type="text" placeholder="Title"/>
            <br />
            <br />
            <button className="mt-5 text-xl px-10 py-2 border rounded cursor-pointer">Create Todo</button> 
      </form>
    </div>
  )
}

export default Create;