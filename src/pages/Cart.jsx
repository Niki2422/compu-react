import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { api } from "../api/api";

import "../index.css"

export default function Cart() {

const { cart, removeFromCart, total } = useContext(CartContext);

const handleCheckout = async () => {
  try {
    const items = cart.map((p) => ({
      product_id: p.id,
      quantity: p.quantity, // 👈 FIX
    }));

    await api.post("/orders", { items });

    alert("Compra realizada 🚀");
  } catch (error) {
  console.error("ERROR COMPLETO:", error);
  console.log("DATA:", error.response?.data);
  alert(error.response?.data?.message || "Error al comprar");
    }
  
};

return (

<div>

<h1>Carrito</h1>

{cart.length === 0 ? (
  <p>El carrito está vacío</p>
) : (
  cart.map(item => (
    <div key={item.id}>

      <h3>{item.name}</h3>
      <p>Cantidad: {item.quantity}</p>
      <p>${item.price}</p>

      <button onClick={() => removeFromCart(item.id)}>
        Eliminar
      </button>

    </div>
  ))
)}

<h2>Total: ${total}</h2>

<button onClick={handleCheckout}>
  Finalizar compra
</button>

</div>

)

}