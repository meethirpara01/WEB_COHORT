import React, { useCallback, useMemo, useState } from 'react'
import Memo from './memo.jsx'
import Recipe from './recipe.jsx'

const App = () => {
  const [add, setadd] = useState(0);
  const [sub, setsub] = useState(99);

  const ingredients = useCallback(() => 
  {
    console.log("Recipe Ingredients Here");
  }, [sub]);


  
  return (
    <div className=' py-10 px-[10%] w-screen h-screen bg-gray-800 font-thin text-white'>
      {/* <Memo /> */}
      <div>
          <button onClick={() => setadd(add + 1)} className=' mr-10 mt-[10%] font-black p-2 text-5xl rounded bg-blue-400'>{add}</button>
          <button onClick={() => setsub(sub - 1)} className=' mt-[10%] font-black p-2 text-5xl rounded bg-blue-400'>{sub}</button>
      </div>
      <br />
      <br />
      <Recipe ing={ingredients}/>
    </div>
  )
}

export default App;