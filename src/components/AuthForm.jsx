import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AuthForm() {
  const { login, register, loginWithGoogle } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from?.pathname || '/shop'

  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isRegister = mode === 'register'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')


    if (isRegister && password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }


    setSubmitting(true)

    try {
      if (isRegister) {
        await register(name, email, password)
      } else {
        await login(email, password)
      }
      navigate(redirectTo, { replace: true })


    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('That email is already registered.')
      } else if (isRegister) {

        setError('Could not create your account. Please try again.')
      } else {
        setError('Invalid email or password.')
      }


    } finally {
      setSubmitting(false)
    }
  }

  const handleGoogle = async () => {
    setError('')

    try {
      await loginWithGoogle()
      navigate(redirectTo, { replace: true })
    } catch {
      setError('Google sign-in failed. Please try again.')
    }


  }

  return (
    <div className="max-w-sm mx-auto border rounded p-4">

      <h2 className="font-extrabold text-xl">
        {isRegister ? 'Create account' : 'Log in'}
      </h2>


      {error && <p role="alert" className="mt-2 text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-3 space-y-3">
        {isRegister && (

          <div>

            <label htmlFor="name" className="block">Name</label>
            <input id="name" required value={name}
              onChange={(e) => setName(e.target.value)}
              className="border w-full px-2 py-1 rounded" />
          </div>
        )}


        <div>
          <label htmlFor="email" className="block">Email</label>
          <input id="email" type="email" required value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full px-2 py-1 rounded" />
        </div>



        <div>
          <label htmlFor="password" className="block">Password</label>
          <input id="password" type="password" required value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full px-2 py-1 rounded" />
        </div>


        <button type="submit" disabled={submitting}
          className="bg-black text-white px-4 py-2 rounded w-full disabled:opacity-50">
          {submitting ? 'Please wait...' : isRegister ? 'Register' : 'Log in'}
        </button>

      </form>

      <button 
      type = "button"
      onClick={handleGoogle} 
      disabled ={submitting}
      className="mt-3 border px-4 py-2 rounded w-full">
        Continue with Google
      </button>

      <p className="mt-3 text-sm">
        {isRegister ? 'Already registered? ' : 'No account? '}
        <button
          type="button"
          onClick={() => { setMode(isRegister ? 'login' : 'register'); setError('') }}
          className="underline"
        >
          {isRegister ? 'Log in' : 'Register'}
        </button>
      </p>
    </div>
  )
}

export default AuthForm