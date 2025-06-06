import { useState } from "react";

const App = () => {
  let n = 12;
  let s = 'Meet Hirpara';
  let b = false;
  let nu = null;
  let un = undefined;
  let arr = [<h1>Hey</h1>, 12, 'Meet', undefined, false, null, 84];
  let obj = {name: 'Meet', age: 19};

  const profiles = 
  [ 
      {name: "Meet", age: 19},
      {name: "Parth", age: 24},
      {name: "Alips", age: 20},
  ];

  const updatedProfiles = profiles.map((profiles, index) => 
  {
    console.log(profiles.name, profiles.age);
    
    return (
        <li key={index}>
            <span>name: {profiles.name}</span>|
            <small>Age: {profiles.age}</small>
        </li>);
  });

  const [username, SetUsername] = useState('@meetHirpara');

  const ChangeHandler = () =>
  {
    SetUsername('@parthHirpara');
  }
  console.log(username); 
  

  return (
    <div>
      {/* <h1>DataTypes</h1>
      <h2>Number: {n}</h2>
      <h2>String: {s}</h2> 
      <h2>Boolean: {b}</h2>
      <h2>Null: {nu}</h2>
      <h2>Undefined: {un}</h2>
      <h2>Array: {arr}</h2>
      {/* < h2>Object: {obj}</h2> */}
      {/*<h2>Object: {obj.name} | {obj.age}</h2> */}


      <h1>Rendering Json</h1>
      <ol>{updatedProfiles}</ol>

      <h2>Username</h2>
      <h2>{username}</h2>
      <button onClick={ChangeHandler}>Change Username</button>
    </div>
  )
}

export default App;