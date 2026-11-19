function Navbar () {
    retuen (
         <nav className="flex items-center justify-between px-6 py-4 border-b">

      <div className="flex items-center gap-3">
        <img src="/images/logo.png" alt="BRIM THEORY logo" className="h-10" />
        <span className="font-bold tracking-widest">BRIM THEORY</span>
      </div>

      <ul className = "flex gap-6">
        <li>Home</li>
        <li>Shop</li>
        <li>Cart</li>

      </ul>
      </nav>

    )
}
export default Navbar