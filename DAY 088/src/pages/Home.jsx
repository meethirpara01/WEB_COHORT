import { useEffect } from "react";
import axios from "../utils/axios";
const Home = () => {

  const getproduct = async () =>
  {
    try{
      // const strdata = await fetch("https://fakestoreapi.com/products");
      // const jsondata = await strdata.json();
      // console.log(jsondata);

      const response = await axios.get("/products");
      console.log(response.data);

    } catch(error)
    {
      console.log(error);
    }
  };

  useEffect(() =>
  {
    console.log("HOME.JSX Mounted");
    getproduct();

    return () =>
    {
      console.log("HOME.JSX UNMOUNT");
      
    }
  });

  // useEffect(() =>  // FOR MORE SHOTER THE CODE 
     // {
  //   getproduct();
  // }, []);

  return (
    <>
    <div>Home</div>
    <button onClick={getproduct}>Click Product</button>
    </>
  )
}

export default Home