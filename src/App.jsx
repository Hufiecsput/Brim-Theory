import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import Footer from "./components/Footer";


function App() {


  return (
    <>
     <div>
      <Navbar/>
    </div>

    <div className = "mt-6">
      <ProductList/>
    </div>
   <Footer/>

      
    </>
  )
}

export default App
