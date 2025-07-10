import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {

    const [data, setdata] = useState([]);

    useEffect(() =>
    {
      setdata(JSON.parse(localStorage.getItem("recipes")) || []);
    }, []);
    console.log(data);
    
  return (
        <recipecontext.Provider value={{data, setdata}}>
            {props.children}
        </recipecontext.Provider>
  );
};

export default RecipeContext;


// {
//         id: "1",
//         title: "Spicy Paneer Tikka",
//         image: "https://plus.unsplash.com/premium_photo-1670895802114-dc3bc13b5963?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         chef: "Chef Arjun Mehta",
//         description: "A delicious Indian appetizer made with marinated paneer cubes grilled to perfection.",
//         ingredients: "Paneer, Yogurt, Red Chili Powder, Garam Masala, Ginger-Garlic Paste, Lemon Juice, Salt",
//         instructions: "Cut paneer into cubes, Mix ingredients to make marinade, Coat paneer with marinade, Let it rest for 30 minutes, Grill or bake until golden",
//         category: "Dinner"
//       }