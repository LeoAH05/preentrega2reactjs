import Cartwidget from "../CartWidget/Cartwidget"
import "./NavBar.css"
import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
      
      <div className= "superior">
        
        <img className = "logo" src="../public/imagenes/logo.jpeg" alt="logo de la empresa" />

        <Cartwidget/>
      
      </div>
      
      <nav>
        <ul>
          
            <li><NavLink to = "/categoria/inicio" >Inicio</NavLink></li>
            <li><NavLink to = "/categoria/novela" >Novelas</NavLink></li>
            <li><NavLink to = "/categoria/mangas" >Comics y Mangas</NavLink></li>
            <li><NavLink to = "/categoria/educacional" >Educacional</NavLink></li>
            <li><NavLink to = "/categoria/preventa" >Preventa</NavLink></li>
          
        </ul>
       </nav>

         
    </header>
  )
}

export default NavBar