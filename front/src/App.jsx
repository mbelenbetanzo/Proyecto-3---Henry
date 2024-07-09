import Home from "./views/Home"
import Navbar from "./components/Navbar"
import MisTurnos from "./views/MisTurnos"
import style from "./styles/App.module.css"
import Register from "./views/Register"
import Login from "./views/Login"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <div className={style.body}>
     <Navbar/>
     <img className={style.glowimg} src="/images/glowgirl1.png" alt="" />
     <Register/>
     <Footer/>
    </div>
    
    
    </>
  )
}
export default App
//const [count, setCount] = useState(0)
   //<MisTurnos/>
//
//<Login/>


   //<Home/>