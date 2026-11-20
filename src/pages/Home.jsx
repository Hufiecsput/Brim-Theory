import {useState} from 'react'
import ProductCard from '../components/ProductCard'
import {products} from '../data/products'

function Home() {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedStyle, setSelectedStyle] = useState("fitted")

    const styles = ["fitted", "bucket", "five-panel"]
    const visible = products.filter((product) => product.style === selectedStyle)

  
    return (
        <section className ="px-6">
            <button onClick = {() => setIsOpen(!isOpen)}
            className = "font-extrabold text-2xl">

                 Featured hats {isOpen ? "▲" : "▼"}

            </button>

            {isOpen && (
                <div>
                    <div className="flex gap-3 mt-4">
                        {styles.map((style) => (
                            <button key={style}
                            onClick={()=> setSelectedStyle(style)} className = "border px-3 py-1 rounded capitalize">
                                {style}
                            </button>
                        ))}
                    </div>

                    <div className ="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                        {visible.map((product) => (
                            <ProductCard key  ={product.id} product={product}/>
                        ))}
                    </div>
                </div>
            )}

        </section>

    )
       
}

export default Home
