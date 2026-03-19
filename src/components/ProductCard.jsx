import "../styles/ProductCard.css"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function ProductCard({product}){

const {addToCart} = useContext(CartContext)

return(

<div className="card">

<Link to={`/producto/${product.id}`}>
<img
  src={`http://localhost:3000/images/${product.image}`}
  alt={product.name}
/>
</Link>

<h3>{product.name}</h3>

<p>${product.price}</p>

<button
onClick={()=>addToCart(product)}
>
Agregar al carrito
</button>

</div>

)

}