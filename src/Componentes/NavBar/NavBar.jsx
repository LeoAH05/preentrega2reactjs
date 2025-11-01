import Cartwidget from "../CartWidget/Cartwidget"
import "./NavBar.css"


const NavBar = () => {
  return (
    <header>
      
        <img src="/logo.jpeg" alt="logo de la empresa" />

        <Cartwidget/>
     
      
      <nav>
        <ul>
            <li>Inicio</li>
            <li>Novelas</li>
            <li>Comics y mangas</li>
            <li>Educacional</li>
            <li>Preventas</li>
        </ul>
       </nav>

         
    </header>
  )
}

export default NavBar