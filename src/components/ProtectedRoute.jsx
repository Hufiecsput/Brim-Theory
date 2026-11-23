
import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const { openLogin } = useCart()
  const location = useLocation()

  useEffect(() => {
    if (!user) {
      openLogin()
    }
  }, [user, openLogin])

  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute
