import { useState } from "react";

const AddRecipeForm = () => {
    const [recipe, setRecipe] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [preparations, setPreparation] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
      let errors = {};
      if (!recipe) errors.recipe = "recipe is required";
      if (!ingredients) errors.ingredients = "ingredients is required";
      if (!preparations) errors.preparations = "preparations is required";
      return errors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        console.log({ recipe, ingredients, preparations });
      }
    };





  return (
    <div className="w-96 m-auto">
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <label htmlFor='recipe-title'>recipe title</label>
        <input type='text' name='recipe-title' id='recipe-title' onChange={(e) => setRecipe(e.target.value)} />
        {errors.recipe && <p>{errors.recipe}</p>}
        <label htmlFor='ingredients'>ingredients</label>
        <textarea type="text" name='ingredients' id='ingredients' onChange={(e) => setIngredients(e.target.value)}></textarea>
        {errors.ingredients && <p>{errors.ingredients}</p>}
        <label htmlFor='preparation'>preparation steps</label>
        <textarea type="text" name='preparation' id='preparation' onChange={(e) => setPreparation(e.target.value)}></textarea>
        {errors.preparations && <p>{errors.preparations}</p>}
        <button type="submit" className='text-white bg-indigo-700 mt-4 inline-block p-2 rounded-lg hover:bg-indigo-950'>Submit</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
