import { useState } from "react"
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  const [users, setusers] = useState([
      {name: 'Meet', age: 19},
      {name: 'parth', age: 24},
      {name: 'Alips', age: 20},
  ]);


  return ( 
    <div>
      <Create />
      <hr />
      <Read users={users} setusers={setusers}/>

     
      
    </div>
  )
}

export default App