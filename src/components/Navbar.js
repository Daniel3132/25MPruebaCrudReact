import React from 'react'
import { NavLink } from 'react-bootstrap'

const Navbar = () => {
    return (
        <>
        <NavLink to="/">Garaje</NavLink>
        <NavLink to="/registro">Registro</NavLink>
            <h1>Navbar</h1>
        </>
    )
}

export default Navbar