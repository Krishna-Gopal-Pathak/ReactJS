import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-items'>
        <NavLink to='./'>Home</NavLink>
        <NavLink to='./'>About</NavLink>
        <NavLink to='./'>Contact</NavLink>
        <NavLink to='./write'>Write</NavLink>
        <NavLink to='./'>Logout</NavLink>
    </nav>
  )
}

export default Navbar