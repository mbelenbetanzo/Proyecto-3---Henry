import React from 'react'
import style from '../styles/Navbar.module.css'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isOnRegisterPage = location.pathname === '/';
  return (
    <header className={style.header}>
        <div className={style.header__containlogo}>
        <img className={style.header__logo} src='/images/logo grande.jpg' alt="logo pequeño"/>
        </div>
        <nav className={style.header__nav}>
        <Link to="/Home" className={style.header__navbtn}>
        <button disabled={isOnRegisterPage} className={style.header__navHome} > ✨MY HOME </button></Link>     
        <Link to="/tratamientos" className={style.header__navbtn}>TRATAMIENTOS</Link>
        <Link to="/contactanos" className={style.header__navbtn}>CONTACTANOS✨</Link>  
        </nav>
        <div className={style.header__containlogin}>
        <Link to="/">
            <button disabled={isOnRegisterPage} className={style.header_login}>LOGOUT</button>
            </Link>
        </div>
        <div className={style.header_containloginmobile}>
            <a className={style.header_loginmobile}  href="#"></a>
        </div>
    </header>
  )
  
}

export default Navbar

