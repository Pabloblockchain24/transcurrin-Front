/*import styles*/
import "./Navbar.css"

/*import dependencies */
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from "react-router-dom"

/*import context*/
import { useAuth } from "../../context/AuthContext"

/*import icons and images*/
import logoTrancurrin from "../../assets/images/logos/logoTranscurrin.png"
import { BsPersonGear } from "react-icons/bs";
import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbarContainer">
      <NavLink to={isAuthenticated ? '/intranet' : '/'}> <img src={logoTrancurrin} alt="Logo" className="navbarLogo" /> </NavLink>

      {/* If is not authenticated show first one navbar else show second one */}
      {!isAuthenticated ?

        /* this is the navbar when user is not authenticated */
        (
          <>
            <button className="menuMobile" onClick={toggleMenu}> <PiListFill className='buttonAbrir' /> </button>
            <nav className={menuOpen ? 'navbarLinks visible' : 'navbarLinks'}>
              <ul className="navbarList">
                <button className="cerrarMenuMobile" onClick={toggleMenu}><AiFillCloseSquare /></button>
                {/* <li><NavLink to="/Nosotros" className="navbarListItem"> NOSOTROS </NavLink> </li> */}
                <li><NavLink to="/Deposito" className="navbarListItem"> EQUIPOS</NavLink></li>
                <li><NavLink to="/Servicios" className="navbarListItem">SERVICIOS</NavLink></li>
                <li><NavLink to="/Clientes" className="navbarListItem">CLIENTES</NavLink></li>
                <li><NavLink to="/Contacto" className="navbarListItem">CONTACTO</NavLink></li>
                <NavLink to="/Login" className="navbarListIntranet"><BsPersonGear /> INTRANET</NavLink>
              </ul>
            </nav>
          </>
        )
        :
        /* this is the navbar when user is authenticated */
        (
          <nav className={menuOpen ? 'navbarCustom visible' : 'navbarCustom'}>
            <ul className='navbarAuthenticated'>
              <li> <div className="navbarUserAuthenticated">Bienvenido {user.name}</div> </li>
              <li> <Link className="navbarUserLogout" to="/" onClick={() => logout()}> LOGOUT </Link> </li>
            </ul>
          </nav>
        )
      }
    </header>
  );
}
export default Navbar
