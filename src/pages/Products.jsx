import products from "../data/products"
import ProductCard from "../components/ProductCard"
import "../index.css"
import { useState } from "react"

export default function Products(){

const [search,setSearch] = useState("")

// filtramos productos
const filteredProducts = products.filter(p =>
p.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="products">

<h1>Computadoras</h1>

<input
type="text"
placeholder="Buscar producto..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="search"
/>

<div className="grid">

{filteredProducts.map(p=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

</div>

)

}