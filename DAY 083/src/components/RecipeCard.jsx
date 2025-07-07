import React from 'react'
import { Link } from 'react-router-dom';

export const RecipeCard = (props) => {

    const {id, image, title, chef, description, ingredients, instructions, category} = props.recipe;
    
  return (
    <Link to={`/recipes/detail/${id}`} className=' duration-150 hover:scale-102 mr-3 mb-3 block w-[23vw] rounded overflow-hidden shadow'>
        <img className=' object-cover w-full h-[20vh]' src={image} alt='' />
        <h1 className=' px-2 mt-2 font-black'>{title}</h1>
        <small className=' px-2 text-red-400 '>{chef}</small>
        <p className=' px-2 pb-3 '>
            {description.slice(0, 100)}...{" "}
            <small className=' text-blue-400'>More</small>
        </p>
    </Link>
  )
}

export default RecipeCard;