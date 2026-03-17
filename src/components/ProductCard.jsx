import "../styles/ProductCard.css"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ProductCard({product}){

const {addToCart} = useContext(CartContext)

return(

<div className="card">

<img src={product.image} />

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