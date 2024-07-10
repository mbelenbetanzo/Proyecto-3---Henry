import Home from "./views/Home"
import Navbar from "./components/Navbar"
import MisTurnos from "./views/MisTurnos"
import style from "./styles/App.module.css"
import Register from "./views/Register"
import Login from "./views/Login"
import Footer from "./components/Footer"
import FormAppointment from "./views/Appointments"
import {Routes, Route} from "react-router-dom"
import Tratamientos from "./views/Tratamientos"
import Contactanos from "./views/Contactanos"



function App() {
  return (
    <>
    <div className={style.body}>
     <Navbar/>
     <img className={style.glowimg} src="/images/glowgirl1.png" alt="" />
     <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/formAppointment" element={<FormAppointment/>} />
      <Route path="/misTurnos" element={<MisTurnos/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/tratamientos" element={<Tratamientos/>} />
      <Route path="/contactanos" element={<Contactanos/>} />
     </Routes>
     <Footer/>
    </div>
    
    
    </>
  )
}
export default App

// <Register/>
// <FormAppointment/>
 //
//
//
   //