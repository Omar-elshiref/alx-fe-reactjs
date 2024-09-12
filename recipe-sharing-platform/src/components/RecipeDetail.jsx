import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-6'>{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className='w-full h-64 object-cover mb-4'
      />
      <div className='bg-white rounded-lg shadow-md p-3'>
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Ingredients</h2>
          <ul className='list-disc list-inside'>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>preparation</h2>
          <p className='whitespace-pre-line'>{recipe.preparation}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
