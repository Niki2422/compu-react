import "../styles/Navbar.css"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

export default function Navbar(){

const {cart} = useContext(CartContext)
const [menuOpen, setMenuOpen] = useState(false)

return(

<nav className="navbar">

<h2 className="logo">CompuReact</h2>

<ul className={menuOpen ? "active" : ""}>

<li><Link to="/" onClick={()=>setMenuOpen(false)}>Inicio</Link></li>
<li><Link to="/productos" onClick={()=>setMenuOpen(false)}>Productos</Link></li>
<li><Link to="/carrito" onClick={()=>setMenuOpen(false)}>🛒 ({cart.length})</Link></li>

</ul>

<div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
  ☰
</div>

</nav>

)
}