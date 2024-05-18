import './App.css'
import NavBar from './components/NavBar'
import Home from "./views/Home"
import Login from './views/Login/Login'
import MisTurnos from './views/MisTurnos/misTurnos'
import Register from './views/Register/Register'
import { Routes, Route} from 'react-router-dom'
import NavLogRegister from "../src/components/NavLogRegister.jsx"
import NewTurn from './views/NewTurn/NewTurn.jsx'


function App() {


  return (
    <div>
      <NavBar/>
      <NavLogRegister/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointments" element={<MisTurnos/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/booking" element={<NewTurn/>}/>
      </Routes>
      {/* <Home/> */}
      {/* <MisTurnos/> */}
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  )
}

export default App
