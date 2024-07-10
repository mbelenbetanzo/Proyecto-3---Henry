import React from 'react'
import style from '../styles/Turno.module.css'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { cancelAppointmentBoton } from '../redux/reducer';

const Turno = ({date, time, description, status, id}) => {

  const dispatch = useDispatch();
  
const cancelAppointment = async () => {
  
  try {
    const response = await axios.put(`http://localhost:3004/appointments/cancel/${id}`)
    dispatch(cancelAppointmentBoton(id))
    //cancelar tambien en redux
  } catch (error) {
    console.log(error);
    
  }
}












  return (
    <div className={style.card}>
    <h3 className={style.cardFecha}>{"Fecha: "}{date}</h3>
    <h4 className={style.cardHora}>{"Hora: "}{time}{"hs"}</h4>
    <p className={style.cardDescripcion}>{"Turno: "}{description}</p>
    <h4 className={style.cardStatus}>{"Estado: "}{status.toUpperCase()}</h4>
    <button onClick={() => cancelAppointment()} className={style.cardbtn} disabled={status == "cancelado"}  >Cancelar</button>
    </div>
  )
}

export default Turno