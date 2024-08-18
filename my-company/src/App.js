import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Home />
      {/* <Navbar /> */}
      <Services />
      <Contact />
      <About />
      <Footer />
     
    </div>
  );
}

export default App;
