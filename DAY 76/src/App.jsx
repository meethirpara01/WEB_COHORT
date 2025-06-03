import { useState } from "react";
import { nanoid } from 'nanoid';
import Create from "./components/Create";
import Read from "./components/Read";


const App = () => {

  const [Todos, setTodos] = useState([
    {id: 1, Title: "Kam Karle Bhai", isCompleted: false},

  ]);

  return (
    <div>
      <Create Todos={Todos} setTodos={setTodos}/>
      <hr />
      <Read Todos={Todos} setTodos={setTodos}/>
    </div>
  );
}

export default App; 