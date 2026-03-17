import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

const [cart,setCart] = useState(
JSON.parse(localStorage.getItem("cart")) || []
)

useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(cart))
},[cart])

const addToCart = (product)=>{

const exist = cart.find(p=>p.id === product.id)

if(exist){
setCart(cart.map(p =>
p.id === product.id
? {...p, quantity:p.quantity+1}
: p
))
}else{
setCart([...cart,{...product,quantity:1}])
}

}

const removeFromCart = (id)=>{
setCart(cart.filter(p=>p.id !== id))
}

const total = cart.reduce(
(acc,p)=>acc + p.price * p.quantity,0
)

return(
<CartContext.Provider
value={{cart,addToCart,removeFromCart,total}}
>
{children}
</CartContext.Provider>
)

}