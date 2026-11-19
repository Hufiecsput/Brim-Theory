import ProductCard from './components/ProductCard';
import {products} from  './data/products';
function App() {


  return (
    <>

    <div className = "">
      <ProductCard product = {products[0]}/>
    </div>

      
    </>
  )
}

export default App
