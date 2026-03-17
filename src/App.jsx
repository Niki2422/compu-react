import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsappButton from "./components/WhatsappButton"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

import {CartProvider} from "./context/CartContext"

function App(){

return(

<CartProvider>

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/productos" element={<Products/>}/>
<Route path="/carrito" element={<Cart/>}/>

</Routes>

<WhatsappButton/>
<Footer/>

</BrowserRouter>

</CartProvider>

)

}

export default App