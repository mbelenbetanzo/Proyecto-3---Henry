import style from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={style.contenedor} >

        <div className={style.divStart}>
           <h6 className={style.tituloredes} > Seguinos en nuestras redes</h6>
           <img className={style.logo} src="/images/logoredes1.svg" alt="instagram" />
           <img className={style.logo} src="/images/logoredes2.svg" alt="facebook" />
           <img className={style.logo} src="/images/logoredes3.svg" alt="twitter" />
        </div>

        <div className={style.divCenter}>
          <img className={style.imgcentral}  src="/images/logo grande.jpg" alt="logo" />
        </div>

        <div className={style.divEnd}>
          <h6 className={style.textoderecho}>🪄Brilla con tu pelo</h6>
          <h6 className={style.textoderecho}>📍Zona constitución, Mar del Plata</h6>
          <h6 className={style.textoderecho}>✨2024 - Todos los derechos reservados</h6>
        </div>
    </div>
  )
}

export default Footer