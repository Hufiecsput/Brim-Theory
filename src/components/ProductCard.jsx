function ProductCard({product}) {

    return(
        <>
        <div className = "w-64 mx-auto flex flex-col text-left">
            <img src ={product.image} alt = {product.name}
            className = "w-full h-64 object-contain rounded"/>

            <h2 className ="italic" >{product.name}</h2>
            <p className = "italic">{product.style}</p>
            <p className =" italic" >Ksh: {product.price.toLocaleString()}</p>

            {product.inStock === false && (  // shows out of stock if there is no hat.
                <p className ="bg-red-100 
font-bold">Out of stock</p>
            )}
            <button className = "bg-black text-white border border-white px-2 py-1 text-sm rounded" >Buy</button>
        </div>
    </>

    )
}

export default ProductCard;