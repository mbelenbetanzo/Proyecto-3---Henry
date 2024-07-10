import style from "../styles/Contactanos.module.css"

const Contactanos = () => {
  return (
    <div>
 <section className={style.contactanos}>

<div className={style.contactanos_cmapa}>
    <img className={style.contactanos_img} src="/images/mapa.png.png" alt="mapa" />
</div>

<div className={style.contactanos_der}>
    <h5 className={style.contactanos_titulo}>Contactanos</h5>
    <p className={style.contactanos_texto}>¡Visítanos en Zona Constitución, Mar del Plata! Nuestro salón te espera con los brazos abiertos de lunes a viernes, de 8:00 a 17:00 hs. Puedes seguirnos y contactarnos a través de nuestras redes sociales para estar al tanto de nuestras promociones y servicios. ¡Te esperamos para cuidar de tu estilo y bienestar!</p>
<div className={style.contactanos_logos}>
<img className={style.logo} src="/images/logoredes1.svg" alt="instagram" />
<img className={style.logo} src="/images/logoredes2.svg" alt="facebook" />
<img className={style.logo} src="/images/logoredes3.svg" alt="twitter" />
</div>
</div>
</section>

    </div>
  )
}

export default Contactanos