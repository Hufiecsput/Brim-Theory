import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import Footer from "./components/Footer";
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'




function App() {


  return (
    <>
     <div>

      <main className = "mt - 6">

      <routes>
        <Routes path = "/" element = {<Home/>}/>
        
        <Routes path ="/shop" element = {<Shop/>}/>

      </routes>
      </main>

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
