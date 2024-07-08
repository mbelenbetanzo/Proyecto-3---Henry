import React from 'react'
import style from '../styles/Turno.module.css'

const Turno = ({date, time, description, status, id}) => {
  return (
    <div className={style.card}>
    <h3 className={style.cardFecha}>{"Fecha: "}{date}</h3>
    <h4 className={style.cardHora}>{"Hora: "}{time}{"hs"}</h4>
    <p className={style.cardDescripcion}>{"Turno: "}{description}</p>
    <h4 className={style.cardStatus}>{"Estado: "}{status.toUpperCase()}</h4>
    <button className={style.cardbtn} disabled={status == "cancelado"}>Cancelar</button>
    </div>
  )
}

export default Turno