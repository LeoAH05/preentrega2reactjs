import React from 'react'
import "./ItemDetail.css"
import { useContext, useState } from "react"
import { miContexto } from "../../providers/CartProviders"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, Nombre, titulo, precio, img}) => {

  const valorActual = useContext(miContexto)
  const [agregado, setAgregado] = useState(false)

  const onAdd = (cantidad) => {
    const producto = {
      id: id,
      Nombre: Nombre,
      titulo: titulo,
      precio: precio,
      img: img
    }
    valorActual.agregarAlCarrito(producto, cantidad)
    setAgregado(true)
  }

  return (
    <div className="detalle">
        <img src={img} alt={Nombre} />
        <h2>{Nombre}</h2>
        <h3>{titulo}</h3>
        <h4>${precio}</h4>

        {agregado === false ? (
          <ItemCount stock={10} inicial={1} onAdd={onAdd} />
        ) : (
          <p>Producto agregado al carrito ✓</p>
        )}
    </div>
  )
}

export default ItemDetail
