/*import styles*/
import "./NavbarIntranet.css"

/*import dependencies */
import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from "react-router-dom"

/*import icons*/
import { TfiClipboard, TfiAlarmClock } from "react-icons/tfi";
import { VscCalendar } from "react-icons/vsc";
import { GrCalculator } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { BiAnchor } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { RiShipLine } from "react-icons/ri";
import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";

function NavBarIntranet() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (

    <header className='navIntranetContainer'>
      <div className="navIntranetButtonContainer">
        <button className='navIntranetButton' onClick={toggleMenu}><PiListFill className='navIntranetButtonIcon' /></button>
      </div>
      
      <nav className={menuOpen ? 'nav-Intranet visible' : 'nav-Intranet' }>
        <button className="cerrarMenu" onClick={toggleMenu}><AiFillCloseSquare /></button>
        <ul className='nav-list-Intranet'>
          <li className='liNavList'> <NavLink to={"/intranet"} className="itemlistNav">  <FaHome className='nav-item-icon' /> HOME </NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/transitoMaritimo"} className="itemlistNav"> <RiShipLine className='nav-item-icon' />TRANSITO</NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/stockPuerto"} className="itemlistNav"> <BiAnchor className='nav-item-icon' />PUERTO</NavLink></li>
          <li className='liNavList'> <NavLink to={"/intranet/stock"} className="itemlistNav"> <TfiClipboard className='nav-item-icon' />DEPOSITO</NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/programacion"} className="itemlistNav"> <VscCalendar className='nav-item-icon' />PROGRAMACION</NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/status"} className="itemlistNav"> <TfiAlarmClock className='nav-item-icon' />STATUS</NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/vacios"} className="itemlistNav"> <GiReturnArrow className='nav-item-icon' /> DEV. VACIOS</NavLink> </li>
          <li className='liNavList'> <NavLink to={"/intranet/facturacion"} className="itemlistNav"> <GrCalculator className='nav-item-icon' />FACTURACION</NavLink> </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBarIntranet