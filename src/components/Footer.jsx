import { FaInstagram, FaWhatsapp } from "react-icons/fa"

function Footer (){
    return (
        <footer className = " bg-red-200 "> 
        <p className = "font-bold" >BRIM THEORY</p>
        <p className = "italic">The Art of HeadWear</p>

        <div className = "flex">
            <a href = "https://instagram.com/_.hufiec._"
            target = "_blank"
            rel = "noopener noreferrer"
            > 
            <FaInstagram size = {28}/>
            </a> 

            <a  className = "flex"
            href = "https://wa.me/254720596826"
            target = "_blank"
            rel = "noopener noreferrer"
            >
                <FaWhatsapp size = {28}/>
            </a>

        </div>

        <p className ="flex-auto">© 2026 BRIM THEORY</p>
        </footer>
    )
}
export default Footer