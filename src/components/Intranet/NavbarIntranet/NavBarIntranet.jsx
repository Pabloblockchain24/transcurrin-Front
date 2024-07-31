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
        <button className='navIntranetButton' onClick={toggleMenu}><PiListFill /></button>
      </div>
      
      <nav className={menuOpen ? 'navIntranet visible' : 'navIntranet' }>
        <button className="cerrarNavIntranet" onClick={toggleMenu}><AiFillCloseSquare /></button>
        <ul className='navIntranetList'>
          <li className='navIntranetListItem'> <NavLink to={"/intranet"} className="navIntranetListLink">  <FaHome className='navIntranetListIcon' /> HOME </NavLink> </li>
          <li className='navIntranetListItem'> <NavLink to={"/intranet/transitoMaritimo"} className="navIntranetListLink"> <RiShipLine className='navIntranetListIcon' />TRANSITO</NavLink> </li>
          <li className='navIntranetListItem'> <NavLink to={"/intranet/stockPuerto"} className="navIntranetListLink"> <BiAnchor className='navIntranetListIcon' />PUERTO</NavLink></li>
          <li className='navIntranetListItem'> <NavLink to={"/intranet/stock"} className="navIntranetListLink"> <TfiClipboard className='navIntranetListIcon' />DEPOSITO</NavLink> </li>
          <li className='navIntranetListItem'> <NavLink to={"/intranet/programacion"} className="navIntranetListLink"> <VscCalendar className='navIntranetListIcon' />PROGRAMACION</NavLink> </li>
          <li className='navIntranetListItem'> <NavLink to={"/intranet/status"} className="navIntranetListLink"> <TfiAlarmClock className='navIntranetListIcon' />STATUS</NavLink> </li>
          <li className='navIntranetListItem'> <NavLink to={"/intranet/vacios"} className="navIntranetListLink"> <GiReturnArrow className='navIntranetListIcon' /> DEV. VACIOS</NavLink> </li>
          <li className='navIntranetListItem'> <NavLink to={"/intranet/facturacion"} className="navIntranetListLink"> <GrCalculator className='navIntranetListIcon' />FACTURACION</NavLink> </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBarIntranet