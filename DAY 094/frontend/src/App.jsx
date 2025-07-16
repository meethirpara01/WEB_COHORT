import { useEffect, useState } from "react";
import axios from "./api/axiosconfig";
import { asyncgetproducts } from "./store/userAction";
import { useDispatch, useSelector } from "react-redux";

const App = () => {

  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);
  
    

    useEffect(() => {
      dispatch(asyncgetproducts());
    }, []);
  return (
    <div>App</div>
  )
}

export default App