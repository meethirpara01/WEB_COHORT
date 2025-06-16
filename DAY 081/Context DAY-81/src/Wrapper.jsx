import { createContext, useState } from 'react';

export const todocontext = createContext(null);

const Wrapper = (props) => {

  const [Todos, setTodos] = useState([
    {id: 1, Title: "Kam Karle Bhai", isCompleted: false},

  ]);

  console.log(props);
    
  return (
    <todocontext.Provider value = {[Todos, setTodos]}>
      {props.children}
    </todocontext.Provider>
  );
}

export default Wrapper