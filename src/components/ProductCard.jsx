function ProductCard({product}) {

    return(
        <>
        <div className = "w-64 mx-auto flex flex-col text-left">
            <img src ={product.image} alt = {product.name}
            className = "w-full h-64 object-contain rounded"/>

            <h2 className ="font-style: italic" >{product.name}</h2>
            <p className = "font-style: italic">{product.style}</p>
            <p className =" font-style: italic" >Ksh:{product.price.toLocaleString()}</p>

            {product.inStock === false && (  // shows out of stock if there is no hat.
                <p className ="bg-red-100 
font-weight: 800;">Out of stock</p>
            )}

        </div>
    </>

    )
}

export default ProductCard;