import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart(){

const {cart,removeFromCart,total} =
useContext(CartContext)

return(

<div>

<h1>Carrito</h1>

{cart.map(item=>(
<div key={item.id}>

<h3>{item.name}</h3>
<p>{item.quantity}</p>
<p>${item.price}</p>

<button onClick={()=>removeFromCart(item.id)}>
Eliminar
</button>

</div>
))}

<h2>Total: ${total}</h2>

</div>

)

}