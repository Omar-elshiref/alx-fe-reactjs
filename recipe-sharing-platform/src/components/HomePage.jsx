import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-6 text-center text-white bg-indigo-700 p-3 '>
        Recipe Sharing Platform
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 border-2 border-orange-100	'>
            <img
              src={recipe.image}
              alt={recipe.title}
              className='w-full h-40 object-cover'
            />
            <div className='p-4 flex flex-col gap-3'>
              <h2 className='text-2xl font-semibold'>{recipe.title}</h2>
              <p className='text-gray-600 h-24'>{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className='text-white bg-indigo-700 inline-block p-2 rounded-lg hover:bg-indigo-950 text-center'>
                Recipe Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
