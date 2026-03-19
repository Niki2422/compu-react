import "../styles/Hero.css"
import { Link } from "react-router-dom"

export default function Hero(){

return(

<section className="hero">


<Link to="/productos">
<button>Ver productos</button>
</Link>

</section>

)

}