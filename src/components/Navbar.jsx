import "../styles/Navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Navbar(){

const {cart} = useContext(CartContext)

return(

<nav className="navbar">

<h2 className="logo">CompuReact</h2>

<ul>

<li><Link to="/">Inicio</Link></li>
<li><Link to="/productos">Productos</Link></li>
<li><Link to="/carrito">🛒 ({cart.length})</Link></li>

</ul>

</nav>

)

}