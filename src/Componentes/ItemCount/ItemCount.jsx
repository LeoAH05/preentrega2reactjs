import React, { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [contador, setContador] = useState(inicial)

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }

  return (
    <div className="contador">
      <div className="controles">
        <button onClick={decrementar} disabled={contador <= 1}>-</button>
        <span>{contador}</span>
        <button onClick={incrementar} disabled={contador >= stock}>+</button>
      </div>
      <button className="agregar" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount