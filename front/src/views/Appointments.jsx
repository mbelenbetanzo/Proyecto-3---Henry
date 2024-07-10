import { useEffect, useState } from "react"
import { validateAppointment } from "../helpers/validateAppointment"
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import style from "../styles/FormAppointment.module.css"

const FormAppointment = () => {

const inicialState = {
  date: '',
  time: '',
  description: ''
}

const [form, setForm] = useState(inicialState);

const [errors, setErrors] = useState({
  date: '',
  time: '',
  description: ''
});

useEffect(() => {
 const errors = validateAppointment(form)
 setErrors(errors)
}, [form])

const handleChange = (event) => {
 const {name, value} = event.target;
 setForm({...form, [name]: value})

}

const registroUser = async () => {
 try {
  console.log(form);
   const response = await axios.post("http://localhost:3004/appointments", form);
   if(response.status === 201) {
     MySwal.fire({
       title: '✨Agendaste un turno con éxito✨',
       text: 'Estamos listos para brindarte el mejor servicio✅',
       icon: 'success',
       confirmButtonText: 'Cerrar'
      });
    } else {
      MySwal.fire({
        title: 'Error😟',
        text: 'No pudimos registrar tu turno. Chequea los datos e intenta de nuevo🙌',
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

      <div className={style.cartel}>
       <h2 className={style.tituloCarteles}>Tratamientos:</h2>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       <h4 className={style.tratamientos}>Corte ................................... $1000</h4>
       
       
       
      </div>
      
      <form onSubmit={handleSubmit} className={style.form} >
      <h2 className={style.tituloForm} >Agenda tu próximo turno🪄</h2>

      <div className={style.divForm}>
      <label  className={style.labelForm} htmlFor="date">Fecha:</label>
      <input className={style.inputForm} type="date" value={form.date} name="date" onChange={handleChange} />
      {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}
      </div>

      <div className={style.divForm}>
      <label  className={style.labelForm} htmlFor="time" >Hora</label>
      <input className={style.inputForm} type="time" value={form.time} name="time" onChange={handleChange} />
      <h6 className={style.textoForm}>Horario de atención: Lunes a Viernes de 08 a 17hs⚠️ </h6>
      {errors.time && <p style={{ color: 'red' }}    >{errors.time}</p>}
      </div>

      <div className={style.divForm} >
      <label className={style.labelForm} htmlFor="description" >Tratamiento:</label>
      <input className={style.inputForm}  type="text" value={form.description} name="description" placeholder="Ingresa tu nombre completo acá 🙌" onChange={handleChange} />
      <h6 className={style.textoForm}>Chequeá todas las opciones que tenemos para vos a tu izquierda✨</h6>
      {errors.description && <p style={{ color: 'red' }}    >{errors.description}</p>}
      </div>

      <div className={style.divBoton}  >
      <button className={style.botonForm} type="submit">Pedir turno</button>
      </div>
      </form>
    </div>
  )
}

export default FormAppointment;
//