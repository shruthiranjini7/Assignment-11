import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
const activeClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')


return (
<header className="nav-header">
<div className="nav-inner container">
<h1 className="brand">Nykaa App</h1>
<nav>
<NavLink to="/" className={activeClass} end>
Home
</NavLink>
<NavLink to="/about" className={activeClass}>
About
</NavLink>
<NavLink to="/users" className={activeClass}>
Users
</NavLink>
</nav>
</div>
</header>
)
}


export default NavBar