import { Link } from 'react-router-dom';

import style from "../styles/Home.module.css"

const Home = () => {
    return (
    <div className={style.contenedor} >
        <h1 className={style.bienvenido}>Bienvenido/a de nuevo:{}</h1>

        <div className={style.contienebotones}>
        <Link to="/formAppointment" className={style.boton}  >Sacar turno✂️</Link>
        <Link to="/misTurnos" className={style.boton}>Ver mis turnos🪄</Link>
        </div>

        <main className={style.main}>
            <div className={style.main_izq}>
    
                <p className={style.main_parrafo}>Desde su creación en 2022, Mirakler Hair nació con muchas ilusiones y el firme propósito de brindar un espacio donde la belleza y el bienestar se encuentren en perfecta armonía. 

Mi nombre es Milagros, apasionada por el arte de la peluquería y el cuidado personal. Cada corte, peinado y tratamiento que ofrezco está realizado con amor y dedicación, porque creo que cada persona merece sentirse y verse increíble.

Mi objetivo no es solo transformar tu cabello, sino también tu día. Quiero que cada visita sea una experiencia única y relajante, donde puedas desconectar y disfrutar de un momento para ti.

Gracias por acompañarme en este viaje. Estoy emocionada de seguir creciendo y mejorando para ti, siempre con la pasión y la ilusión que me caracteriza. ¡Te espero para hacerte brillar!

Con cariño,  
Mili💖</p>
            </div>
            <div className={style.main_der}>
                <img className={style.main_img} src="/images/mili.jpeg" alt="" />
            </div>
        </main>

        <h3 className={style.section_tratamiento}>Algunos de nuestros tratamientos</h3>
    <section className={style.section}>

        < article className={style.section_card}>
        <h3 className={style.section_titulo}>Balayage</h3>
        <img className={style.section_img} src="/images/image31.jpeg" alt="balayage" />
        </article>

        < article className={style.section_card}>
        <h3 className={style.section_titulo}>Botox</h3>
        <img className={style.section_img} src="/images/image30.jpeg" alt="botox" />
        </article>

        <article className={style.section_card}>
        <h3 className={style.section_titulo}>Lifting</h3>
        <img className={style.section_img} src="/images/image33.jpeg" alt="lifting" />
        </article>

        <article className={style.section_card}>
        <h3 className={style.section_titulo}>Alisado</h3>
        <img className={style.section_img} src="/images/image34.jpeg" alt="alisado" />
        </article>

        <article className={style.section_card}>
        <h3 className={style.section_titulo}>Corte</h3>
        <img className={style.section_img} src="/images/corte.jpeg" alt="corte" />
        </article>

        <article className={style.section_card}>
        <h3 className={style.section_titulo}>Color</h3>
        <img className={style.section_img} src="/images/color.jpeg" alt="color" />
        </article>

        <article className={style.section_card}>
        <h3 className={style.section_titulo}>Peinados</h3>
        <img className={style.section_img} src="/images/peinado.jpeg" alt="peinados" />
        </article>

        <article className={style.section_card}>
        <h3 className={style.section_titulo}>Mechitas</h3>
        <img className={style.section_img} src="/images/mechitas.jpeg" alt="mechitas" />
        </article>




    </section>




        <section className={style.contactanos}>

            <div className={style.contactanos_cmapa}>
                <img src="/images/mapa.png.png" alt="mapa" />
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

export default Home

