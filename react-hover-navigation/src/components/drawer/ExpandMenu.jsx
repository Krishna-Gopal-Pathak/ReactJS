import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './ExpandMenu.css'
import {FaAngleDown, FaAngleRight} from 'react-icons/fa'
const ExpandMenu = ({route}) => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const closeDrawer = () => {
        setIsOpen(false);
  };
  return (
    <div className='side-sub-menu'>
        <div className="side-menu-button" onClick={toggleMenu}>{route.name} {isMenuOpen ? <FaAngleDown/>:<FaAngleRight/>} </div>
        <div className="side-sub-menu-items" isMenuOpen={isMenuOpen} style={{ display: isMenuOpen ? 'flex' : 'none' }}>
            {
                route.subRoutes.map((subRoute)=>(
                    
                    <NavLink to={subRoute.link} key={subRoute.id} onClick={closeDrawer}>{subRoute.name}</NavLink>
                    
                ))
            }
            
            
        </div>

    </div>
  )
}

export default ExpandMenu