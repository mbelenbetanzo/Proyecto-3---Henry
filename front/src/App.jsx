import Home from "./views/Home"
import Navbar from "./components/Navbar"
import MisTurnos from "./views/MisTurnos"
import style from "./styles/App.module.css"
import Register from "./views/Register"
import Login from "./views/Login"

function App() {
  return (
    <>
    <div className={style.body}>
     <Navbar/>
     <img className={style.glowimg} src="/images/glowgirl2.png" alt="" />
     <Home/>
    <MisTurnos/>
    </div>
    <Register/>
    <Login/>
    </>
  )
}
export default App
//const [count, setCount] = useState(0)
   