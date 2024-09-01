import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Blog from "./components/blog"
import BlogPost from "./components/BlogPost.JSX";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Profile'>Profile</Link>
        </nav>
        <Routes>
          <Route path='/' element={<h2>Home</h2>} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path='/Profile/*' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
