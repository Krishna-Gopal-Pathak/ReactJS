import { NavLink } from "react-router-dom"
import { routes } from "./Navitem"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <div className="nav-bar">
            <NavLink to='/' className='logo'>Krishna</NavLink>
            <ul className="nav-ul">
                {routes.map((curElement)=>{
                    const {id, name, link}=curElement;
                    return(
                        <li key={id}><NavLink to={link}>{name}</NavLink></li>
                    );
                })}
            </ul>
            
        </div>
    </nav>
  )
}

export default Navbar