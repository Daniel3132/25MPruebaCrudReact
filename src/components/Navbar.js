import React from 'react'
import { Link } from 'react-router-dom'
import "../estilos/navbar.css"


const Navbar = () => {
    return (
        <nav>
            <Link className="link"  to="/">GARAJE</Link>
            <Link className="link" to="/registro">REGISTRO</Link>
        </nav>
    )
}

export default Navbar