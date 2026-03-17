import Hero from "../components/Hero"
import Services from "../components/Services"
import products from "../data/products"
import ProductCard from "../components/ProductCard"

const offers = products.filter(p=>p.offer)

export default function Home(){

return(
<>
<Hero/>
<section>
<h2>Ofertas</h2>

<div className="grid">
{offers.map(p=>(
<ProductCard key={p.id} product={p}/>
))}
</div>

</section>

<Services/>
</>
)

}