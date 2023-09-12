import { useState } from "react";
import Navbar from "../Navbar/Navbar"
import Drawer from "../drawer/Drawer"
const Header = () => {
  const [isOpen, setIsOpen]=useState(false);

  const toggledrawer=()=>{
    setIsOpen(!isOpen);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };
  return (
    <>
    <Drawer isOpen={isOpen} toggledrawer={toggledrawer} closeDrawer={closeDrawer}/>
    <Navbar toggledrawer={toggledrawer}/>


    </>
  )
}

export default Header