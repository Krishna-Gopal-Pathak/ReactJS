import { NavLink } from 'react-router-dom'
import './Menu.css'
import { useState } from 'react';
const Menu = ({route}) => {
  const [isOpen, setIsOpen]=useState(false);
  const toggledrawer=()=>{
    setIsOpen(!isOpen);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };

    
    
  return (
    <div className='sub-menu' isOpen={isOpen} toggledrawer={toggledrawer} closeDrawer={closeDrawer}>
        <div className="menu-button">{route.name}</div>
        <div className="sub-menu-items" > 
            {
                route.subRoutes.map((subRoute)=>(
                    
                    <li key={subRoute.id}><NavLink to={subRoute.link} onClick={closeDrawer}>{subRoute.name}</NavLink></li>
                    
                ))
            }
            
            
        </div>

    </div>
  )
}

export default Menu