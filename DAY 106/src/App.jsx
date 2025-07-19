import React, { useCallback, useMemo, useRef, useState } from 'react'
import Recipe from './recipe.jsx'
import styled from 'styled-components';

const App = () => {
  const [add, setadd] = useState(0);
  const [sub, setsub] = useState(99);
  const inputRef = useRef();

  // WITH BACK TIK
  // const MyH1 = styled.h1`
  //     color: white;
  //     font-size: 100px;
  //     background-color: ${(props) => props.bg};
  //     border: 1px solid gray;
  //     border-radius: 10px;
  //     `;

  // WITH OBJECT
  const bg = "gray";
  const MyH1 = styled.h1(
  {
    color: "white",
    fontSize: "100px",
    backgroundColor: bg,
    border: "1px solid gray",
    borderRadius: "10px"
  });
  
  

  const ingredients = useCallback(() => 
  {
    console.log("Recipe Ingredients Here");
  }, [sub]);

  const WatchHendler = () =>
  {
    console.log(inputRef.current.value);
    if (inputRef.current.value.length < 4) 
    {
      inputRef.current.style.borderBottom = '2px solid tomato';
    }
    else
    {
      inputRef.current.style.borderBottom = '2px solid green';
    }
    console.log(inputRef.current.value);


  }


  
  return (
    <div className=' py-10 px-[10%] w-screen h-screen bg-gray-800 font-thin text-white'>
      <MyH1 bg="gray">Let's Learn useRef</MyH1>
      <h1 className=' text-3xl '>{import.meta.env.VITE_APP_TIMEPASS}</h1>

      <input ref={inputRef} type='text' placeholder='Write Something...' className=' my-10 block border-b p-2 outline-0' />
      <button onClick={WatchHendler} className=' text-3xl px-3 bg-blue-400 rounded py-1 cursor-alias'>See Vlaue</button>
      
    </div>
  )
}

export default App;