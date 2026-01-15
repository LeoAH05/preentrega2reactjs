import React, { useContext } from 'react'
import { miContexto } from "../../providers/CartProviders"
import "./CarroCompra.css"



const CarroCompra = () => {
  const valorActual = useContext(miContexto)

  if (valorActual.carrito.length === 0) {
    return (
      <div className="vacio">
        <h2>Tu carrito está vacío</h2>
        <p>No hay productos en el carrito todavía</p>
      </div>
    )
  }

  const total = valorActual.carrito.reduce((acumulador, item) => {
    return acumulador + (item.precio * item.cantidad)
  }, 0)

  return (
    <div className="contenedor">
      <h2>Mi Carrito</h2>
      
      <div className="carrito">
        {valorActual.carrito.map(item => (
          <div key={item.id} className="producto">
            <img src={item.img} alt={item.titulo} />
            <div className="info-producto">
              <h3>{item.titulo}</h3>
              <p>Autor: {item.Nombre}</p>
              <p>Precio unitario: ${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <p className="subtotal">Subtotal: ${item.precio * item.cantidad}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="total-carrito">
        <h3>Total: ${total}</h3>
        <button className="finalizar">Finalizar Compra</button>
      </div>
    </div>
  )
}

export default CarroCompra

