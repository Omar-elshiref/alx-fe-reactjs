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
    <div className='h-lvh flex justify-center items-center'>
      <form
        className='flex flex-col justify-center rounded-lg shadow-md border-2 border-orange-100 p-3 gap-3 w-96'
        onSubmit={handleSubmit}>
        <label className='font-bold' htmlFor='recipe-title'>
          recipe title
        </label>
        <input
          className='border-2 border-orange-100'
          type='text'
          name='recipe-title'
          id='recipe-title'
          onChange={(e) => setRecipe(e.target.value)}
        />
        {errors.recipe && <p>{errors.recipe}</p>}
        <label className='font-bold' htmlFor='ingredients'>
          ingredients
        </label>
        <textarea
          className='border-2 border-orange-100'
          type='text'
          name='ingredients'
          id='ingredients'
          onChange={(e) => setIngredients(e.target.value)}></textarea>
        {errors.ingredients && <p>{errors.ingredients}</p>}
        <label className='font-bold' htmlFor='preparation'>
          preparation steps
        </label>
        <textarea
          className='border-2 border-orange-100'
          type='text'
          name='preparation'
          id='preparation'
          onChange={(e) => setPreparation(e.target.value)}></textarea>
        {errors.preparations && <p>{errors.preparations}</p>}
        <button
          type='submit'
          className='text-white bg-indigo-700 mt-4 inline-block p-2 rounded-lg hover:bg-indigo-950'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
