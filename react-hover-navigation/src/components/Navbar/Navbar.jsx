import { NavLink } from "react-router-dom"
import { routes } from "./Navitem"
import './Navbar.css'
import { CgMenu } from "react-icons/cg";
import Menu from "../Menu";

const Navbar = ({toggledrawer}) => {
  return (
    <nav className='nav-container'>
        <div className="nav-bar">
            <NavLink to='/' className='logo'>Krishna</NavLink>
            <div className="nav-right">
            <ul className="nav-ul">
                {routes.map((route)=>{
                    if(route.subRoutes){
                        return <Menu route={route} key={route.id}/>
                    }
                    return(
                        <li key={route.id}><NavLink to={route.link}>{route.name}</NavLink></li>
                    );
                })}
            </ul> 
            <button className="menu-icon" onClick={toggledrawer}><CgMenu/></button> 
            </div>
            

        </div>
        
    </nav>
  )
}

export default Navbar