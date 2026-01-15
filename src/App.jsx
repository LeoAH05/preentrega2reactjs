import React from 'react'
import NavBar from './Componentes/NavBar/NavBar'
import Cartwidget from './Componentes/CartWidget/Cartwidget'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'
import CarroCompra from './Componentes/CarroCompra/CarroCompra'

  

const App = () => {
  return (

    <>

<NavBar/>



<Routes>

  <Route path="/:" element={<ItemListContainer Bienvenida= "Bienvenidos a Blackpool libros"/>}></Route>

  <Route path= "/seccion/:seccion" element= {<ItemListContainer Bienvenida= "Bienvenidos a Blackpool libros"/>}> </Route>

  <Route path = "/detalle/:id" element= {<ItemDetailContainer/>}></Route>

  <Route path = "/Carrito" element = {<CarroCompra/>}></Route>


</Routes>


    </>

  )
}

export default App

