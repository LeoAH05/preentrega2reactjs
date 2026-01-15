import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
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
          
            <li><NavLink to = "/seccion/inicio" >Inicio</NavLink></li>
            <li><NavLink to = "/seccion/novela" >Novelas</NavLink></li>
            <li><NavLink to = "/seccion/mangas" >Comics y Mangas</NavLink></li>
            <li><NavLink to = "/seccion/educacional" >Educacional</NavLink></li>
            <li><NavLink to = "/seccion/preventa" >Preventa</NavLink></li>
          
        </ul>
       </nav>

         
    </header>
  )
}

export default NavBar