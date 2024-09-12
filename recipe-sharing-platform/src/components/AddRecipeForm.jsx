import { useState } from "react";

const AddRecipeForm = () => {
    const [recipe, setRecipe] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [preparations, setPreparation] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        if (recipe === "" || ingredients === "" || preparations === "") {
            console.log("kjghjhgjjgjkgjgjgjk")

        } else {
            console.log({
                title: recipe,
                ingredients: ingredients,
                preparation: preparations
            })

        } 

     


    }





  return (
    <div className="w-96 m-auto">
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <label htmlFor='recipe-title'>recipe title</label>
        <input type='text' name='recipe-title' id='recipe-title' onChange={(e) => setRecipe(e.target.value)} />
        <label htmlFor='ingredients'>ingredients</label>
        <textarea type="text" name='ingredients' id='ingredients' onChange={(e) => setIngredients(e.target.value)}></textarea>
        <label htmlFor='preparation'>preparation steps</label>
        <textarea type="text" name='preparation' id='preparation' onChange={(e) => setPreparation(e.target.value)}></textarea>
        <button type="submit" className='text-white bg-indigo-700 mt-4 inline-block p-2 rounded-lg hover:bg-indigo-950'>Submit</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
