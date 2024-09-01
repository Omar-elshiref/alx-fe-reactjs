import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Profile'>Profile</Link>
        </nav>
        <Routes>
          {/* Default route to Home component */}
          <Route path='/' element={<h2>Home</h2>} />
          {/* Route to Dashboard component */}
          <Route path='/Profile/*' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
