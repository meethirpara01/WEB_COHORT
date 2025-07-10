import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate();
  const {data, setdata} = useContext(recipecontext);
    const {register, handleSubmit, reset } = useForm();


    const SubmitHandler = (recipe) =>
    {
        recipe.id = nanoid();
        console.log(recipe);

        const copydata = [...data];
        copydata.push(recipe);
        setdata(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata));

        // setdata([...data, recipe]);

        toast.success("New Recipe Created!")
        navigate("/recipes");

        reset();

    }



  return ( <form onSubmit={handleSubmit(SubmitHandler)}>
    <input className=" block border-b outline-0 p-2" {...register("title")} type="text" placeholder="Recipes Title"/>
    <small className=" text-red-400">This Is How Error Is Shown</small>
    <input className=" block border-b outline-0 p-2" {...register("image")} type="url" placeholder="Enter Image URL"/>
    <small className=" text-red-400">This Is How Error Is Shown</small>
    <input className=" block border-b outline-0 p-2" {...register("chef")} type="text" placeholder="Chef Name"/>
    <small className=" text-red-400">This Is How Error Is Shown</small>
    <textarea className=" block border-b outline-0 p-2" {...register("description")} placeholder="Recipe Description"></textarea>
    <small className=" text-red-400">This Is How Error Is Shown</small>
    <textarea className=" block border-b outline-0 p-2" {...register("ingredients")} placeholder="Write ingredients Seperated By Comma"></textarea>
    <small className=" text-red-400">This Is How Error Is Shown</small>
    <textarea className=" block border-b outline-0 p-2" {...register("instructions")} placeholder="Write instructions Seperated By Comma"></textarea>
    <small className=" text-red-400">This Is How Error Is Shown</small>
    <select className=" block border-b outline-0 p-2" {...register("category")}>
        <option value="BreakFast">Break Fast</option>
        <option value="Lunch">Lunch</option>
        <option value="Supper">Supper</option>
        <option value="Dinner">Dinner</option>
    </select>
    
    <button className=" mt-5 block bg-gray-900 px-4 py-2 rounded">Save Recipes</button>
    
  </form>);
}

export default Create;