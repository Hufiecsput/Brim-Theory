import ProductCard from './ProductCard'

function ProductList ({products}) {

    if (products.length ===0 ){
        return <p>Hat not Available</p>
    }
    return(
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
           {products.map((product)=> ( 
            <ProductCard key =
           {product.id} product={product}/>


           ) )}

        </div>


    )
}

export default ProductList