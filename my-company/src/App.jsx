import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services.jsx' element={<Services />} />
          <Route path='/Contact.jsx' element={<Contact />} />
          <Route path='/About.jsx' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Navbar /> */}
      {/* <Services />
      <Contact />
      <About />
      <Footer /> */}
    </div>
  );
}

export default App;
