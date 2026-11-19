import ProductCard from './components/ProductCard';
import {products} from  './data/products';
import ProductList from './components/ProductList';
function App() {


  return (
    <>
    <div className = "  "> 
      <ProductCard product = {products[0]}/>
    </div>

    <div className = "">
      <ProductList/>
    </div>

      
    </>
  )
}

export default App
