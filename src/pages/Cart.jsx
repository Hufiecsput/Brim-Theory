import {Link} from 'react-router-dom'
import {useCart} from '../context/CartContext'

function Cart() {
    const {items, deleteFromCart, updateQuantity, total} = useCart()


    if (items.length === 0) {

        return(
            <section className = "px-6" >

                <h1 className = "font-extrabold text-2xl">Your Cart</h1>
                <p className = "mt-2">cart is empty</p>
                <Link to ="/shop" className = "underline">Continue shopping</Link>

            </section>
        )
    }

    return(

        <section className = "px-6 max-w-3xl mx-auto">

            <h1 className = "font-extrabold text-2xl">Your Cart</h1>
            <ul className = "mt-4 space-y-4">
                {items.map((item) =>  <li key ={item.id} className = "flex items-center gap-4 border-b pb-4">
                    <img src = {item.image} alt={item.name} className = "h-20 w-20 object-contain"/>

                    <div className = "flex-1">
                        <p className = "font-semibold">item.name</p>

                        <p>Ksh: {item.price.toLocaleString()}</p>

                    </div>

                    <div className = "flex items-center gap-2">

                        <button onClick={() => updateQuantity(item.id, item.quantity +1)} className = "border px-2">+</button>

                        <span>{item.quantity}</span>

                        <button onClick={() => updateQuantity(item.id, item.quantity -1)} className = "border px-2">-</button>
                        
                    </div>

                    <button onClick={() => deleteFromCart(item.id)} className ="text-red-600">Delete</button>

                </li>
                
            )}
            </ul>

            <p className = "mt-4 text-xl font-bold">Total: Ksh {total.toLocaleString()}</p>



        </section>
    )
}

export default Cart