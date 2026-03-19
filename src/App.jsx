import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsappButton from "./components/WhatsappButton"

import ProductDetail from "./pages/ProductDetail"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Login from "./pages/Login";

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
<Route path="/producto/:id" element={<ProductDetail/>}/>
<Route path="/login" element={<Login />} />

</Routes>

<WhatsappButton/>
<Footer/>

</BrowserRouter>

</CartProvider>

)

}

export default App