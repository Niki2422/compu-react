import "../styles/Navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/CartContext"

export default function Navbar(){

const {cart} = useContext(CartContext)
const [menuOpen, setMenuOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)
const [isLogged, setIsLogged] = useState(false)

const navigate = useNavigate()

// efecto scroll
useEffect(()=>{
  const handleScroll = ()=>{
    setScrolled(window.scrollY > 50)
  }

  window.addEventListener("scroll", handleScroll)
  return ()=> window.removeEventListener("scroll", handleScroll)
},[])

// 🔐 detectar login
useEffect(()=>{
  const token = localStorage.getItem("token")
  setIsLogged(!!token)
},[])

// 🔓 logout
const handleLogout = () => {
  localStorage.removeItem("token")
  setIsLogged(false)
  navigate("/") // redirige al inicio
}

return(

<nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

<h2 className="logo">💻 CompuReact</h2>

<ul className={menuOpen ? "active" : ""}>

<li><Link to="/" onClick={()=>setMenuOpen(false)}>Inicio</Link></li>
<li><Link to="/productos" onClick={()=>setMenuOpen(false)}>Productos</Link></li>

<li>
  <Link to="/carrito" onClick={()=>setMenuOpen(false)}>
    🛒 ({cart.length})
  </Link>
</li>

{/* 🔐 LOGIN / LOGOUT */}
{!isLogged ? (
  <li>
    <Link to="/login" onClick={()=>setMenuOpen(false)}>
      👤 Login
    </Link>
  </li>
) : (
  <li>
    <button className="logout-btn" onClick={handleLogout}>
      🚪 Logout
    </button>
  </li>
)}

</ul>

<div 
className={`hamburger ${menuOpen ? "open" : ""}`} 
onClick={()=>setMenuOpen(!menuOpen)}
>
<span></span>
<span></span>
<span></span>
</div>

</nav>

)
}