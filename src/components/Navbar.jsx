
import {Link} from 'react-router-dom'

import { useCart } from '../context/CartContext'

import { useAuth } from '../context/AuthContext'

function Navbar () {

  const {count} = useCart()

  const { user, logout } = useAuth()

    return (
         <nav className="flex items-center justify-between px-6 py-4 border-b bg-red-200" >

      <div className="flex items-center gap-3">
        <img src="/logo/logo.jpg" alt="BRIM THEORY" className="h-10" />
        <span className="font-bold tracking-widest">BRIM</span>
      </div>

      <ul className = "flex gap-6">
        <li><Link to ="/">Home</Link> </li>
        <li><Link to = "/shop">Shop</Link></li>
        <li><Link to ="/cart">Cart ({count})</Link></li>

           {user && (
          <li><button onClick={logout}>Logout</button></li>
        )}



      </ul>
      </nav>

    )
}
export default Navbar