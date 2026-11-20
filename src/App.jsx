import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import Footer from "./components/Footer";
import Home from './pages/Home';




function App() {


  return (
    <>
     <div>
      <Navbar/>
    </div>
    <Home/>

    <div className = "mt-6">
      <ProductList/>
    </div>
   <Footer/>

      
    </>
  )
}

export default App
