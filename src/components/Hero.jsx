import "./Hero.css"
import { Link } from "react-router-dom"

export default function Hero(){

return(

<section className="hero">

<h1>Las mejores computadoras</h1>
<p>Gaming, oficina y notebooks al mejor precio</p>

<Link to="/productos">
<button>Ver productos</button>
</Link>

</section>

)

}