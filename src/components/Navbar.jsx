function Navbar () {
    return (
         <nav className="flex items-center justify-between px-6 py-4 border-b bg-red-200" >

      <div className="flex items-center gap-3">
        <img src="/logo/logo.jpg" alt="BRIM THEORY" className="h-10" />
        <span className="font-bold tracking-widest">BRIM</span>
      </div>

      <ul className = "flex gap-6">
        <li><a href ="">Home</a> </li>
        <li><a href = "">Shop</a></li>
        <li><a href = "">Cart</a></li>

      </ul>
      </nav>

    )
}
export default Navbar