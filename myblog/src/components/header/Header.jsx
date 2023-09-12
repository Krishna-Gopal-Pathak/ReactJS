import React from 'react'
/* import { NavLink } from 'react-router-dom' */
import "./Header.css"
import Navbar from '../navbar/Navbar'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import AboutMe from '../assests/aboutme.jpg'
const Header = () => {
  return (
    <header className='header-container'>
      <div className='header-left'>
      <FaLinkedin className='header-left-icon'/>
      <FaGithubSquare className='header-left-icon'/>
      <FaInstagramSquare className='header-left-icon'/>
      </div>

      <div className='header-middle'>
        <Navbar/>
      </div> 

      <div className='header-right'>
        <img src={AboutMe} alt="" className='right-img' />
        <FaSearch className='header-right-searchIcon'/>
      </div>    
    </header>
  )
}

export default Header