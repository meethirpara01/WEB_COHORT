import { Fragment } from "react";

const Read = (props) => {

    const Todos = props.Todos;
    const setTodos = props.setTodos;

    const DeleteHandler = (id) =>
    {
      console.log(id);
      const filtertodos = Todos.filter((todo) => todo.id != id);
      setTodos(filtertodos);
    }
    const DeleteAllHandler = () => 
    {
      setTodos([]);
    }
    
    const renderTodo = Todos.map((todo) => {
        return <li key={todo.id}>{todo.Title} | <span onClick={() => DeleteHandler(todo.id)}>Delete</span></li>
  });
  return (
    <Fragment>
        <h1 className="Read_Element_Heading" style={{color: "tomato"}} >Tasks</h1>
        <ol>{renderTodo}</ol>
        <button onClick={DeleteAllHandler}>Dlelete All</button>
    </Fragment>
  )
}

export default Read;