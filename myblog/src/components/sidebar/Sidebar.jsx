import React from 'react'
import './Sidebar.css'
import MainImage from '../assests/mainImage.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="sidebar-item">
        <span className="sidebar-title">About Me</span>
        <img src={MainImage} alt="" className='sidebar-image' />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, accusamus.</p>
      </div>
      <div className="sidebar-categories">
        <span className="sidebar-categories-title">Categories</span>
        <ul className="sidebar-list">
            <li className='sidebar-list-item'>Cyber </li>
            <li className='sidebar-list-item'>Web </li>
            <li className='sidebar-list-item'>Cloud</li>
            <li className='sidebar-list-item'>Devops</li>
            <li className='sidebar-list-item'>Bhagwad</li>
            <li className='sidebar-list-item'>Balance</li>
        </ul>
        
      </div>
      <div className="sidebar-social">
        <span className="sidebar-social-title">Follow Us</span>
        <div className="sidebar-social-icon">
        <FaLinkedin/>
        <FaGithubSquare/>
        <FaInstagramSquare/>
        </div>
        
      </div> 
    </div>
  )
}

export default Sidebar