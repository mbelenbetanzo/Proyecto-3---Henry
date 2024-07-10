import { useEffect, useState } from "react"
import { validate } from "../helpers/validate";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import style from "../styles/Register.module.css"
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

const inicialState = {
  name: '',
  username: '',
  password: '',
  birthdate: '',
  email: '',
  nDni: '',
}

const [form, setForm] = useState(inicialState);

const [errors, setErrors] = useState({
  name: '',
  username: '',
  password: '',
  birthdate: '',
  email: '',
  nDni: '',
});

useEffect(() => {
  const errors = validate(form)
  setErrors(errors)
}, [form])

const handleChange = (event) => {
 const {name, value} = event.target;
 setForm({...form, [name]: value})

}

const registroUser = async () => {
  try {
    const response = await axios.post("http://localhost:3004/users/register", form);
    if(response.status === 201) {
      MySwal.fire({
        title: '✨Te registraste con éxito✨',
        text: '¡Bienvenido! Ahora puedes reservar tu turno y disfrutar de nuestros servicios✅',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      });
      navigate("/login")
    } else {
      MySwal.fire({
        title: 'Error😟',
        text: 'No pudimos loguearte. Chequea tus datos e intenta de nuevo🙌',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      });
    }
    setForm(inicialState) //para limpiar los campos
  } catch (error) {
    console.log("Error del servidor", error)
    
  }
}

const handleSubmit = (event) => {
  event.preventDefault()
  registroUser()

}

  return (
    <div className={style.contenedorForm} >
      
      <form onSubmit={handleSubmit} className={style.form} >
      <h2 className={style.tituloForm} >Registrate para agendar tus turnos✂️</h2>
      <div className={style.divForm} >
      <label className={style.labelForm} htmlFor="name" >Nombre:</label>
      <input className={style.inputForm}  type="text" value={form.name} name="name" placeholder="Ingresa tu nombre completo acá 🙌" onChange={handleChange} />
      <h6 className={style.textoForm} >Sólo letras</h6>
      {errors.name && <p style={{ color: 'red' }}    >{errors.name}</p>}
      </div>

      <div className={style.divForm}>
      <label  className={style.labelForm} htmlFor="username">Nombre de usuario:</label>
      <input className={style.inputForm} type="text" value={form.username} name="username" placeholder="Ingresa un nombre con el que ingresarás ✅" onChange={handleChange} />
      <h6 className={style.textoForm}>Debe contener entre 3 y 20 caracteres, permitiendo letras, números y guiones bajos</h6>
      {errors.username && <p style={{ color: 'red' }}  >{errors.username}</p>}
      </div>

      <div className={style.divForm}>
      <label  className={style.labelForm} htmlFor="email" >Email:</label>
      <input className={style.inputForm} type="email" value={form.email} name="email" placeholder="Ingresa tu email✨" onChange={handleChange} />
      <h6 className={style.textoForm}>Example: messi22@mail.com</h6>
      {errors.email && <p style={{ color: 'red' }}  >{errors.email}</p>}
      </div>

      <div className={style.divForm}>
      <label className={style.labelForm} htmlFor="password">Contraseña:</label>
      <input className={style.inputForm} type="password" value={form.password} name="password" placeholder="Ingresa una contraseña😎" onChange={handleChange} />
      <h6 className={style.textoForm}>Debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial</h6>
      {errors.password && <p style={{ color: 'red' }}   >{errors.password}</p>}
      </div>

      <div className={style.divForm}>
      <label className={style.labelForm} htmlFor="birthdate">Fecha de nacimiento:</label>
      <input className={style.inputForm} type="text" value={form.birthdate} name="birthdate" placeholder="Ingresa tu fecha de nacimiento😁" onChange={handleChange} />
      <h6 className={style.textoForm}>Formato DD-MM-AAAA</h6>
      {errors.birthdate && <p style={{ color: 'red' }}   >{errors.birthdate}</p>}
      </div>

      <div className={style.divForm}>
      <label className={style.labelForm} htmlFor="nDni">DNI:</label>
      <input className={style.inputForm} type="text" value={form.nDni} name="nDni" placeholder="Ingresa tu dni🚀" onChange={handleChange} />
      <h6 className={style.textoForm}>Sólo se permiten números</h6>
      {errors.nDni && <p  style={{ color: 'red' }}  >{errors.nDni}</p>}
      </div>
      <div className={style.divBoton}  >

      <button className={style.botonForm} disabled={errors.password || errors.username || errors.name || errors.birthdate || errors.email || errors.nDni || !form.password || !form.username || !form.birthdate || !form.email || !form.nDni || !form.name  } type="submit"> Registrarse</button>
      </div>
      </form>

      <div className={style.videoContainer}>
        <video className={style.video} autoPlay >
          <source src="/images/videoinicio.mp4" type="video/mp4" />
        </video>
      </div>



    </div>
  )
}
/*name, username, email, password, birthdate, numero dni */
export default Register
