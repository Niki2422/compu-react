import products from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Products(){

return(

<div className="products">

<h1>Computadoras</h1>

<div className="grid">

{products.map(p=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

</div>

)

}