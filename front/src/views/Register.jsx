import { useEffect, useState } from "react"
import { validate } from "../helpers/validate";
import axios from "axios";

const Register = () => {

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
      alert("Te registraste con éxito")
    } else {
      alert("El usuario no se ha podido registrar")
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
    <div>
      <h2>Registrate acá</h2>
      <form onSubmit={handleSubmit}>

      <div>
      <label htmlFor="name" >Nombre:</label>
      <input type="text" value={form.name} name="name" placeholder="Ingresa tu nombre completo acá 🙌" onChange={handleChange} />
      <h6>Sólo letras</h6>
      {errors.name && <p style={{ color: 'red' }}    >{errors.name}</p>}
      </div>

      <div>
      <label htmlFor="username">Nombre de usuario:</label>
      <input type="text" value={form.username} name="username" placeholder="Ingresa un nombre con el que ingresarás ✅" onChange={handleChange} />
      <h6>Debe contener entre 3 y 20 caracteres, permitiendo letras, números y guiones bajos</h6>
      {errors.username && <p style={{ color: 'red' }}  >{errors.username}</p>}
      </div>

      <div>
      <label htmlFor="email" >Email:</label>
      <input type="email" value={form.email} name="email" placeholder="Ingresa tu email✨" onChange={handleChange} />
      <h6>Example: messi22@mail.com</h6>
      {errors.email && <p style={{ color: 'red' }}  >{errors.email}</p>}
      </div>

      <div>
      <label htmlFor="password">Contraseña:</label>
      <input type="password" value={form.password} name="password" placeholder="Ingresa una contraseña😎" onChange={handleChange} />
      <h6>Debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial</h6>
      {errors.password && <p style={{ color: 'red' }}   >{errors.password}</p>}
      </div>

      <div>
      <label htmlFor="birthdate">Fecha de nacimiento:</label>
      <input type="text" value={form.birthdate} name="birthdate" placeholder="Ingresa tu fecha de nacimiento😁" onChange={handleChange} />
      <h6>Formato DD-MM-AAAA</h6>
      {errors.birthdate && <p style={{ color: 'red' }}   >{errors.birthdate}</p>}
      </div>

      <div>
      <label htmlFor="nDni">DNI:</label>
      <input type="text" value={form.nDni} name="nDni" placeholder="Ingresa tu dni🚀" onChange={handleChange} />
      <h6>Sólo se permiten números</h6>
      {errors.nDni && <p  style={{ color: 'red' }}  >{errors.nDni}</p>}
      </div>

      <button type="submit"> Registrarse</button>
      </form>
    </div>
  )
}
/*name, username, email, password, birthdate, numero dni */
export default Register

/*Implementar en el componente Register un formulario controlado que se encargará del registro de usuario. 

Controlar el formulario de manera tal que se pueda validar que todos los datos necesarios para el registro están
 completos, al mismo tiempo que los datos de los inputs son reflejados en el estado local correspondiente y viceversa.

Una vez completos y validados los datos, se debe poder presionar un botón que dispare un evento, el cual ejecutará
 una función que se encargue de realizar la petición de tipo POST correspondiente al servidor para el registro del
  usuario enviando como body el estado que se confeccionó a través del formulario. 

En caso de que el registro sea exitoso, informar al usuario. Del mismo modo, informar al usuario si ha ocurrido un
 error. */