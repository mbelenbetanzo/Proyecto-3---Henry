import React, { useEffect, useState } from 'react'
//import myTurns from "../helpers/myTurns";
import Turno from '../components/Turno';
import style from '../styles/Turno.module.css'
import axios from "axios";
import { Link } from 'react-router-dom';

const MisTurnos = () => {

const [turnos, setTurnos] = useState([]);

useEffect(() => {
  const peticion = async () => {
    try { 
      const response = await axios.get('http://localhost:3004/appointments')
      setTurnos(response.data.message)
    } catch (error) {
      console.error("Error:", error)
    }
  };
    peticion();
  }, [turnos])

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
      turnos.length ? ( turnos?.map((turno => {
         return <Turno key={turno.id} date={turno.date} time={turno.time} id={turno.id} description={turno.description} status={turno.status}
      />}))) : <h2 className={style.noturnos}>No tenes turnos agendados😟</h2>   }
    </div>

    </>
  )
}

export default MisTurnos

//axios.get("http://localhost:3004/appointments").then((res) => setTurnos(res.data));
//}, []);