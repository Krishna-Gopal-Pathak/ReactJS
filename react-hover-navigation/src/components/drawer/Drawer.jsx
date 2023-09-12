// left side drawer active

import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom"
import { routes } from "../Navbar/Navitem"
import './Drawer.css'
import ExpandMenu from "./ExpandMenu";

const Drawer = ({isOpen, toggledrawer,closeDrawer}) => {
  
    

  return (
    
    <div className='menu-drawer' style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}  >
      
      <button onClick={toggledrawer} className="menu-close"><CgClose/></button> 
       <div className="nav-sidebar">
        
            <ul className="nav-sidebar-ul">
            

{routes.map((route)=>{
                    if(route.subRoutes){
                        return <ExpandMenu route={route} key={route.id}/>
                    }
                    return(
                        <li key={route.id}><NavLink to={route.link} onClick={closeDrawer}>{route.name}</NavLink></li>
                    );
                })}
                
            </ul> 
       </div>
    </div>
    

    
  );
};

export default Drawer


/* this for right side drawer uncomment this and uncomment css

import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom"
import { routes } from "../Navbar/Navitem"
import './Drawer.css'
import ExpandMenu from "./ExpandMenu";

const Drawer = ({isOpen, toggledrawer,closeDrawer}) => {
  
    

  return (
    
    <div className='menu-drawer' style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}  >
      
      <button onClick={toggledrawer} className="menu-close"><CgClose/></button> 
       <div className="nav-sidebar">
        
            <ul className="nav-sidebar-ul">
            

{routes.map((route)=>{
                    if(route.subRoutes){
                        return <ExpandMenu route={route} key={route.id}/>
                    }
                    return(
                        <li key={route.id}><NavLink to={route.link} onClick={closeDrawer}>{route.name}</NavLink></li>
                    );
                })}
                
            </ul> 
       </div>
    </div>
    

    
  );
};

export default Drawer





*/