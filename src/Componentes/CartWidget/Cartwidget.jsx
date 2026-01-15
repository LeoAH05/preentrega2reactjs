import "./CartWidget.css"
import { miContexto } from "../../providers/CartProviders"
import { useContext } from "react"
import { Link } from "react-router-dom"


const Cartwidget = () => {

  const valorActual = useContext(miContexto)

  return (

  <Link to = "/Carrito">
  <div>
    <img className="carrito" src="../public/imagenes/carrito.png" alt="carrito compras" />
    <strong>{valorActual.cantidad}</strong>
  </div> 
  </Link>   
  )
}

export default Cartwidget