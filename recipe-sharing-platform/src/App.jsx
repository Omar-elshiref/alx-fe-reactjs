import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <ul className='flex justify-center gap-2'>
        <Link
          to={"/"}
          className='text-white bg-indigo-700 mt-4 inline-block p-2 rounded-lg hover:bg-indigo-950'>
          Home
        </Link>
        <Link
          to={"/RecipeForm"}
          className='text-white bg-indigo-700 mt-4 inline-block p-2 rounded-lg hover:bg-indigo-950'>
          Add recipe
        </Link>
      </ul>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipe/:id' element={<RecipeDetail />} />
        <Route path='/RecipeForm' element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
