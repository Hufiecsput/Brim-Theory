
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Login() {
  const { showLogin, closeLogin } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!showLogin) return

    const onKey = (e) => {
      if (e.key === 'Escape') closeLogin()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showLogin, closeLogin])

  if (!showLogin) return null

  const goToLogin = () => {
    closeLogin()

    // Preserve the original destination
    if (location.pathname !== '/') {
      navigate('/', { state: location.state })
    }

    window.scrollTo(0, 0)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-prompt-title"
    >
      <div className="bg-white rounded p-6 max-w-sm w-full mx-4 text-center">
        <h2 id="login-prompt-title" className="font-extrabold text-xl">
          Please log in first
        </h2>

        <p className="mt-2">
          You need to be logged in to access this page or add caps to your cart.
        </p>

        <div className="mt-4 flex gap-3 justify-center">
          <button
            onClick={goToLogin}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Go to login
          </button>

          <button
            onClick={closeLogin}
            className="border px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
