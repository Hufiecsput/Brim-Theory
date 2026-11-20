import {products} from '../data/products'
import{useCart} from '../context/CartContext'
import {useParams, Link} from 'react-router-dom'



function ProductDetails() {
    const {id} = useParams()
    const {addToCart} = useCart()
    const product = products.find((p) => p.id === Number(id))

    if (!product) return <p className= "px-6"> Hat not found.</p>


    return (
        <section className = "px-6 max-w-3xl mx-auto">

            <Link to ="/shop">Back to shop</Link>
            <img src ={product.image} alt={product.name} className = " "/>

            <h1 className = " font-extrabold text-2xl mt-4">{product.name}</h1>

            <p className = " italic">{product.style}</p>
            <p className =" font-semibold">Ksh: {product.price.toLocaleString()}</p>
            <p className =" mt-2">{product.description}</p>

            {product.inStock ? (

                <button onClick = {() => addToCart(product)}
                className = "mt-4 bg-black text-white px-4 py-2 rounded">

                    Add to cart

                </button> 

            ):(
                <p className = "mt-4 font-extrabold bg-red-100 inline-block px-2">Out of stock</p>
            )}




        </section>
    )
}

export default ProductDetails