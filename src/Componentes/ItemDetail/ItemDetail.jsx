import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id, Nombre, titulo, precio,img}) => {
  return (
    <div className= "detalle">
        <img src={img} alt={Nombre} />
        <h2>{Nombre}</h2>
        <h3>{titulo}</h3>
        <h4>{precio}</h4>
       {/*  <h5>id:{id}</h5> */}
        <p></p>

        <button>Comprar</button>
    </div>
  )
}

export default ItemDetail