import { useEffect, useState } from "react"
import { validateLogin } from "../helpers/validateLogin";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import style from "../styles/Login.module.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from "../redux/reducer";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

const inicialState = {
  username: '',
  password: ''
}

const [form, setForm] = useState(inicialState);

const [errors, setErrors] = useState({
  username: '',
  password: '',
  
});

useEffect(() => {
  const errors = validateLogin(form)
  setErrors(errors)
}, [form])

const handleChange = (event) => {
 const {name, value} = event.target;
 setForm({...form, [name]: value})
}

const loginUser = async () => {
  try {
    const response = await axios.post("http://localhost:3004/users/login", form);
    if(response.status === 200) {
      dispatch(addUser(response.data.user))
      MySwal.fire({
        title: '✨¡Bienvenido!✨',
        text: 'Estamos encantados de verte. ¡Es hora de mimarte y reservar tu próximo turno✅',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      });
      navigate("/home")
      //REDUX
      


    } else {
      MySwal.fire({
        title: 'Error😟',
        text: 'No pudimos loguearte. Chequea tus datos e intenta de nuevo🙌',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      });
    }
    setForm(inicialState)
  } catch (error) {
    console.log("Error del servidor", error)
  }
}


const handleSubmit = (event) => {
  event.preventDefault()
  loginUser()

}

  return (
    <div className={style.contenedorForm}>
      
      <form onSubmit={handleSubmit} className={style.form}>
      <h2 className={style.tituloForm} >Ingresá a tu cuenta</h2>

      <div className={style.divForm}>
      <label className={style.labelForm} htmlFor="username">Nombre de usuario:</label>
      <input className={style.inputForm} type="text"   value={form.username} name="username" placeholder="Ingresa un nombre con el que ingresarás ✅" onChange={handleChange} />
      {errors.username && <p style={{ color: 'red' }}  >{errors.username}</p>}
      </div>

      <div className={style.divForm}>
      <label className={style.labelForm} htmlFor="password">Contraseña:</label>
      <input className={style.inputForm} type="password" value={form.password} name="password" placeholder="Ingresa una contraseña😎" onChange={handleChange} />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <div className={style.divBoton}>
      <button type="submit" className={style.botonForm} disabled={errors.password && errors.username || !form.password  }>Enviar</button>
      </div>
      </form>
      


      
    </div>
  )
}

export default Login





