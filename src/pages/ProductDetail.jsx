import { useParams } from "react-router-dom"
import products from "../data/products"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ProductCard from "../components/ProductCard"
import "../index.css"
import "../styles/ProductDetail.css"

export default function ProductDetail(){

const {id} = useParams()
const {addToCart} = useContext(CartContext)

const product = products.find(p => p.id === Number(id))

const related = products
.filter(p => p.id !== product.id)
.slice(0,3)

return(

<div className="detail">

<div className="detail-container">

<img src={product.image} />

<div className="info">

<h1>{product.name}</h1>

<p className="price">${product.price}</p>

<p>{product.description}</p>

<button onClick={()=>addToCart(product)}>
Agregar al carrito
</button>

</div>

</div>

<h2>También te puede interesar</h2>

<div className="related">

{related.map(p=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

</div>

)
}