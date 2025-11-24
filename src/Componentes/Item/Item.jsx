import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({id, Nombre, titulo, precio, img}) => {
  return (
    <div className= "libros">
        <img src={img} alt={Nombre} />
        <h2> {titulo}</h2>
        <h3>{Nombre}</h3>
        <h4>{precio}</h4>
        {/* <h5>id:{id}</h5> */}
        <button>
          <Link to = {`/detalle/${id}`}>Ver Info</Link>
        </button>

    
    </div>
  )
}

export default Item