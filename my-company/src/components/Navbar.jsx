import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header style={{backgroundColor: "red", padding: "10px"}}>
        <nav style={{color: "white", display: "flex", justifyContent: "center", gap: "60px"}}>
            <Link style={{color: "white", textDecoration: "none", padding: "10px", backgroundColor: "blue", borderRadius: "10PX"}} to="/">Home</Link>
            <Link style={{color: "white", textDecoration: "none", padding: "10px", backgroundColor: "blue", borderRadius: "10PX"}} to="./Services.jsx">Services</Link>
            <Link style={{color: "white", textDecoration: "none", padding: "10px", backgroundColor: "blue", borderRadius: "10PX"}} to="./Contact.jsx">Contact</Link>
            <Link style={{color: "white", textDecoration: "none", padding: "10px", backgroundColor: "blue", borderRadius: "10PX"}} to="./About.jsx">About</Link>
        </nav>
    </header>
  )
}

export default Navbar