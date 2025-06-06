import { nanoid } from "nanoid";
import { useState } from "react";
import style from "./Create.module.css";

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

  const buttoncss= 
    {
    color: "black",
    padding: "5px 10px",
    backgroundColor: "transparent",
    border: "1px solid black",
    borderRadius: "10px",

    }
  console.log(Todos);
  return (
    <>
        <h1 className="style.create_element_heading">Create Tasks</h1>
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setTitle(e.target.value)} value={Title} type="text" placeholder="Title"/>
            <br />
            <br />
            <button style={buttoncss}>Create Todo</button> 
      </form>
    </>
  )
}

export default Create;