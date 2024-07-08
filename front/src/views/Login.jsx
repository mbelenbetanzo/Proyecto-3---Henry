import { useEffect, useState } from "react"
import { validateLogin } from "../helpers/validateLogin";
import axios from "axios";

const Login = () => {

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
      alert("✨Bienvenido/a de nuevo✨")
    } else {
      alert("No pudimos acceder a tu cuenta😟")
    }
    setForm(inicialState) //para limpiar los campos
  } catch (error) {
    console.log("Error del servidor", error)
    
  }
}


const handleSubmit = (event) => {
  event.preventDefault()
  loginUser()

}

  return (
    <div>
      <h2>Ingresá a tu cuenta</h2>
      <form onSubmit={handleSubmit}>

      <div>
      <label htmlFor="username">Nombre de usuario:</label>
      <input type="text" value={form.username} name="username" placeholder="Ingresa un nombre con el que ingresarás ✅" onChange={handleChange} />
      <h6>Debe contener entre 3 y 20 caracteres, permitiendo letras, números y guiones bajos</h6>
      {errors.username && <p style={{ color: 'red' }}  >{errors.username}</p>}
      </div>

      <div>
      <label htmlFor="password">Contraseña:</label>
      <input type="password" value={form.password} name="password" placeholder="Ingresa una contraseña😎" onChange={handleChange} />
      <h6>Debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial</h6>
      {errors.password && <p style={{ color: 'red' }}   >{errors.password}</p>}
      </div>

      <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
/*name, username, email, password, birthdate, numero dni */
export default Login





/*Implementar en el componente Login un formulario controlado que se encargará del login del usuario. 

Controlar el formulario de manera tal que se pueda validar que todos los datos necesarios para el login están
 completos, al mismo tiempo que los datos de los inputs son reflejados en el estado local correspondiente y viceversa. 

Una vez completos y validados los datos, se debe poder presionar un botón que dispare un evento, el cual ejecutará
 una función que se encargue de realizar la petición de tipo POST correspondiente al servidor para el login del
  usuario enviando como body el estado que se confeccionó a través del formulario.

En caso de que el login sea exitoso, informar al usuario. Del mismo modo, informar al usuario si ha ocurrido un
 error. 
 
 
 TIPS

Trabaja primero con el componente Register y LUEGO con el componente Login. De esta forma podemos luego intentar
 logearnos con el usuario nuevo que hemos registrado. 

Recuerda SIEMPRE notificar al usuario sobre el resultado de la operación que ha realizado. 

Como TIP te recomendamos deshabilitar el botón de registro o login hasta que todos los datos estén completos y validados.
 De esta forma puedes evitar envíos de peticiones incompletas.
 
 
 */