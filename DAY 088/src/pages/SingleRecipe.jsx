import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
    const navigate = useNavigate();
    const {data, setdata} = useContext(recipecontext);
    const params = useParams();
    const recipe = data.find(recipe => params.id == recipe.id);
    console.log(recipe);
    // console.log(recipe.id);

    
    const {register, handleSubmit, reset } = useForm({
        defaultValues:{
            title: recipe.title,
            image: recipe.image,
            chef: recipe.chef,
            description: recipe.description,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            category: recipe.category
        }
    });

    const SubmitHandler = (updaterecipe) =>
    {
        const recipeIndex = data.findIndex(recipe => params.id == recipe.id);
        console.log(recipeIndex);
        const copydata = [...data];
        copydata[recipeIndex] = {...copydata[recipeIndex], ...updaterecipe };
        console.log(copydata[recipeIndex]);
        setdata(copydata);
        toast.success("Recipe Updated Successfuflly!");
        navigate("/recipes");
    }

    const deletehandler = () =>
    {
        const filterdata = data.filter(r => r.id != params.id);
        setdata(filterdata);
        toast.error("Recipe Deleted Successfuflly!");
        navigate("/recipes");
    }
    
  return (
    recipe ?
        <div className=' w-full flex'>
            <div className='left w-1/2 p-2 content-center'>
                <div className=' mr-3 mb-3 block w-full rounded overflow-hidden shadow'>
                    <img className=' object-cover object-center w-full h-[50vh]' src={recipe.image} alt='' />
                    <h1 className=' px-2 mt-2 font-black text-5xl'>{recipe.title}</h1>
                    <small className=' px-2 text-red-400 '>{recipe.chef}</small>
                    <p className=' px-2 pb-3 '>
                        {recipe.description.slice(0, 100)}...{" "}
                        <small className=' text-blue-400'>More</small>
                    </p>
                </div>
            </div>
        <div className='right w-1/2 p-2 flex justify-center'>
            <form onSubmit={handleSubmit(SubmitHandler)}>
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
    
                <button className=" mt-5 block bg-blue-900 px-4 py-2 rounded">Update Recipes</button>
                <button onClick={deletehandler} className=" mt-5 block bg-red-900 px-4 py-2 rounded">Delete Recipes</button>
    
            </form>
        </div>

        
    </div> : "Loading!!!"
  )
}

export default SingleRecipe