
import style from "../styles/Home.module.css"

const Home = () => {
    return (
    <div className={style.contenedor} >
        <h1 className={style.bienvenido}>Bienvenido/a:{}</h1>
        
        <div className={style.contienebotones}>
            <a className={style.boton} href="#">Sacar turno✂️</a>
            <a className={style.boton} href="#">Ver mis turnos🪄</a>
        </div>
        <main className={style.main}>
            <div className={style.main_izq}>
                <h2 className={style.main_titulo}>Saca a relucir tu pelo</h2>
                <p className={style.main_parrafo}>Mi peluqueria Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut, culpa necessitatibus cupiditate alias dolorum veniam minus numquam id corporis saepe inventore, vel a nihil. Blanditiis omnis dolorem molestias soluta?</p>
            </div>
            <div className={style.main_der}>
                <img className={style.main_img} src="/images/logo grande.jpg" alt="" />
            </div>
        </main>


    <section className={style.section}>

        <h3 className={style.section_tratamiento}>Tratamientos</h3>

        < article className={style.section_card}>
        <h3 className={style.section_titulo}>Balayage</h3>
        <img className={style.section_img} src="/images/image31.jpeg" alt="" />
        <p className={style.section_parrafo}>es una tratamiento sin formol</p>
        </article>

        < article className={style.section_card}>
        <h3 className={style.section_titulo}>Botox</h3>
        <img className={style.section_img} src="/images/image30.jpeg" alt="" />
        <p className={style.section_parrafo}>es una tratamiento sin formol</p>
        </article>

        <article className={style.section_card}>
        <h3 className={style.section_titulo}>Lifting</h3>
        <img className={style.section_img} src="/images/image33.jpeg" alt="" />
        <p className={style.section_parrafo}>es una tratamiento sin formol</p>
        </article>

        <article className={style.section_card}>
        <h3 className={style.section_titulo}>Alisado</h3>
        <img className={style.section_img} src="/images/image34.jpeg" alt="" />
        <p className={style.section_parrafo}>es una tratamiento sin formol</p>
        </article>
    </section>



        <h4 className={style.contactanos_titulo}>Contactanos</h4>
        <section className={style.contactanos_izq}>

            <div className={style.contactanos_cmapa}>
                <iframe className={style.contactanos_mapa} src="" frameborder="0"></iframe>
            </div>

            <div className={style.contactanos_der}>
                <h5 className={style.contactanos_titulo}>Nos podes ocntactar aca</h5>
                <p className={style.contactanos_texto}>Estamos ubicados en zona cmstitucion en la bella ciudad de mar del plata etcetc</p>
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

