import { Fragment } from "react";

const Read = (props) => {

    const Todos = props.Todos;
    const setTodos = props.setTodos;
    const renderTodo = Todos.map((todo) => {
        return <li key={todo.id}>{todo.Title} | <span>Delete</span></li>
  });
  return (
    <Fragment>
        <h1 style={{color: "tomato"}} >Tasks</h1>
        <ol>{renderTodo}</ol>
    </Fragment>
  )
}

export default Read;