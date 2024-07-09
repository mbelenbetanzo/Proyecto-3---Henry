import React from 'react'
import style from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <header className={style.header}>
        <div className={style.header__containlogo}>
        <img className={style.header__logo} src='/images/logo grande.jpg' alt="logo pequeño"/>
        </div>
        <nav className={style.header__nav}>
             <a className={style.header__navbtn}   href="#">✨Inicio</a>
             <a className={style.header__navbtn}   href="#">Mis turnos</a>
             <a className={style.header__navbtn}   href="#">Tratamientos</a>
             <a className={style.header__navbtn}   href="#">Contactanos✨</a>
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

