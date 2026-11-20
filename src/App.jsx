import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import Checkout from './pages/Checkout'
import AuthForm from './components/AuthForm'






function App() {


  return (
    <div className = "min-h-screen flex flex-col">

     <Navbar/>
   

      <main className = "flex-1 mt-6 mb-16">

      <Routes>
        <Route path = "/" element = {<AuthForm/>}/>
        
        <Route path ="/shop" element = {<Shop/>}/>

        <Route path = "/products/:id" element={<ProductDetails/>}/>

        <Route path = "/cart" element = {<Cart/>}/> 

        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
           element={
           <ProtectedRoute>
            <Checkout />
            </ProtectedRoute>
           }
/>

      </Routes>
      </main>

     
   
    

   <Footer/>

      
    </div>
  )
}

export default App
