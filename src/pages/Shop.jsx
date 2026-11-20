import ProductList from '../components/ProductList'
import {useState} from 'react'
import Search from '../components/SearchBar'
import { products } from '../data/products'


function Shop() {

    const [searchTerm, setSearchTerm] = useState('')

    const filtered = products.filter((product) => product.name.toLowerCase().includes(searchTerm.trim().toLowerCase()))



    return(
        <section className = "px-6">
            <h1 className = "font-extrabold text-2xl mb-4 underline">Shop</h1>

            <Search searchTerm = {searchTerm} setSearchTerm={setSearchTerm}/>

            <ProductList products = {filtered}/>
        </section>
    )
}

export default Shop