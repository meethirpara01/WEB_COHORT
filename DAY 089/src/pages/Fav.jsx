import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";

    const Fav = () => {
    const favtoite = JSON.parse(localStorage.getItem("fav")) || [];
  
    const renderrecipes = favtoite.map((recipe) =>
    (
      <RecipeCard key={recipe.id} recipe={recipe} />
  
    ))
    return (
      <div className="flex flex-wrap ">
        {favtoite.length > 0 ? renderrecipes : "No Favtoite Found"}
      </div>
    )
}

export default Fav