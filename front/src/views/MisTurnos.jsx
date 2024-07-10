import React, { useEffect, useState } from 'react'
//import myTurns from "../helpers/myTurns";
import Turno from '../components/Turno';
import style from '../styles/Turno.module.css'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUserAppointments } from '../redux/reducer';

const MisTurnos = () => {

//const [turnos, setTurnos] = useState([]);
const userData = useSelector((state) => state.userActive);
const turnos = useSelector((state) => state.userAppointments);
const dispatch = useDispatch();

useEffect(() => {
  const peticion = async () => {
    try { 
      console.log(userData);
      const response = await axios.get(`http://localhost:3004/users/${userData.id}`)
      dispatch(addUserAppointments(response.data.appointments))
      console.log(response);
      //setTurnos(response.data.turnos)
    } catch (error) {
      console.error("Error:", error)
    }
  };
    peticion();
  }, [])

  return (
    <>
    <div className={style.contenedorback}>
        <Link to="/home" className={style.back} >⬅️ Volver a mi perfil</Link>
      </div>
  <div className={style.contenedorTitulo}>
    <h1 className={style.turnos}>MIS TURNOS✂️</h1>
    </div>
    <div className={style.contenedorTurnos}>
      {
        //.length
      turnos ? ( turnos?.map((turno => {
         return <Turno key={turno.id} date={turno.date} time={turno.time} id={turno.id} description={turno.description} status={turno.status}
      />}))) : <h2 className={style.noturnos}>No tenes turnos agendados😟</h2>   }
    </div>

    </>
  )
}

export default MisTurnos

