import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'





function App() {


  return (
    <>

     <Navbar/>
   

      <main className = "mt-6">

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        
        <Route path ="/shop" element = {<Shop/>}/>

        <Route path = "/products/:id" element={<ProductDetails/>}/>

        <Route path = "/cart" element = {<Cart/>}/> 

      </Routes>
      </main>

     
   
    

   <Footer/>

      
    </>
  )
}

export default App
