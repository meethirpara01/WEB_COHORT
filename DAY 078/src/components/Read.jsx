import { Fragment } from "react";
import { toast } from "react-toastify";  

const Read = (props) => {

    const Todos = props.Todos;
    const setTodos = props.setTodos;

    const DeleteHandler = (id) =>
    {
      console.log(id);
      const filtertodos = Todos.filter((todo) => todo.id != id);
      setTodos(filtertodos);
      toast.error("Todo Deleted!");
    }
    const DeleteAllHandler = () => 
    {
      setTodos([]);
    }
    
    const renderTodo = Todos.map((todo) => {
        return <li className="p-4 mb-4 flex justify-between items-center bg-gray-900 rounded-2xl" key={todo.id}><span className="text-xl font-thin">{todo.Title}</span> <button className="text-red-400 font-thin cursor-pointer" onClick={() => DeleteHandler(todo.id)}>Delete</button></li>
  });
  return (
    <div className="w-[30%] p-10">
        <h1 className="text-5xl font-thin mb-10"><span className="text-red-400">Pending</span> Todos</h1>
        <ol>{renderTodo}</ol>
        <button className="mt-5 text-xl px-10 py-2 border rounded cursor-pointer" onClick={DeleteAllHandler}>Dlelete All</button>
    </div>
  )
}

export default Read;