import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import Checkout from './pages/Checkout'
import AuthForm from './components/AuthForm'
import Login from './components/Login'






function App() {


  return (
    <div className = "min-h-screen flex flex-col">

     <Navbar/>
     <Login/>
   

      <main className = "flex-1 mt-6 mb-16">

      <Routes>
        <Route path = "/" element = {<AuthForm/>}/>
        
        <Route path ="/shop" element = {
          <ProtectedRoute><Shop/>
          </ProtectedRoute>}
          />

        <Route path = "/products/:id" element={<ProtectedRoute><ProductDetails/>
        </ProtectedRoute>}
        />

        <Route path = "/cart" element = {<ProtectedRoute><Cart/>
        </ProtectedRoute>}
        /> 

  


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
