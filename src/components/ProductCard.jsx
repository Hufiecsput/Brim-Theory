function ProductCard({product}) {

    return(
        <>
        <div className = "border-none">
            <img src ={product.image} alt = {product.name}
            className = "w-full h-64 object-cover round"/>

            <h2 className ="" >{product.name}</h2>
            <p className = "">{product.style}</p>
            <p className ="" >{product.price.toLocaleString()}</p>

            {!product.instock && (  // shows out of stock if there is no hat.
                <p className ="">Out of stock</p>
            )}

        </div>
    </>

    )
}

export default ProductCard;