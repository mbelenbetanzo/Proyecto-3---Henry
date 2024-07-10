import React from 'react'
import style from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';


const Navbar = () => {



  return (
    <header className={style.header}>
        <div className={style.header__containlogo}>
        <img className={style.header__logo} src='/images/logo grande.jpg' alt="logo pequeño"/>
        </div>
        <nav className={style.header__nav}>
        <Link to="/home" className={style.header__navbtn}>✨INICIO</Link>
        <Link to="/tratamientos" className={style.header__navbtn}>TRATAMIENTOS</Link>
        <Link to="/contactanos" className={style.header__navbtn}>CONTACTANOS✨</Link>  
        </nav>
        
        <div className={style.header__containlogin}>
            <a className={style.header_login} href=""></a>
        </div>
        <div className={style.header_containloginmobile}>
            <a className={style.header_loginmobile}  href="#"></a>
        </div>
    </header>
  )
}

export default Navbar

