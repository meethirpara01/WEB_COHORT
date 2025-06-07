import { useState } from "react";
import { nanoid } from 'nanoid';
import Create from "./components/Create";
import Read from "./components/Read";


const App = () => {

  const [Todos, setTodos] = useState([
    {id: 1, Title: "Kam Karle Bhai", isCompleted: false},

  ]);

  return (
    <div className="text-white flex gap-2 w-screen h-screen bg-gray-800 p-20">
      <Create Todos={Todos} setTodos={setTodos}/>
      <hr />
      <Read Todos={Todos} setTodos={setTodos}/>
    </div>
  );
}

export default App; 