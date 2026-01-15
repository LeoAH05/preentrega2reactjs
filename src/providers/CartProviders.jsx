import { createContext, useState } from "react";

 export const miContexto = createContext()




const {Provider} = miContexto

const CartProviders = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto, cantidadAAgregar = 1) => {
        const productoExistente = carrito.find(item => item.id === producto.id)
        
        if (productoExistente) {
            const carritoActualizado = carrito.map(function(item) {
                if (item.id === producto.id) {
                    const nuevoItem = {
                        ...item,
                        cantidad: item.cantidad + cantidadAAgregar
                    }
                    return nuevoItem
                } else {
                    return item
                }
            })
            setCarrito(carritoActualizado)
        } else {
            setCarrito([...carrito, {...producto, cantidad: cantidadAAgregar}])
        }
    }

    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(item => item.id !== id))
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0)

    const totalCompra = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)

    const valorDelContexto = {
        carrito: carrito,
        agregarAlCarrito: agregarAlCarrito,
        eliminarDelCarrito: eliminarDelCarrito,
        vaciarCarrito: vaciarCarrito,
        cantidad: cantidadTotal,
        total: totalCompra
    }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default CartProviders