import { useAuth } from '../context/AuthContext'

function Checkout() {
  const { user } = useAuth()
  return (
    <section className="px-6">
      <h1 className="font-extrabold text-2xl">Checkout</h1>
      <p>Logged in as {user.displayName || user.email}</p>
    </section>
  )
}

export default Checkout