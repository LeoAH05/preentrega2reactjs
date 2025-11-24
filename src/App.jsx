import React from 'react'
import NavBar from './Componentes/NavBar/NavBar'
import Cartwidget from './Componentes/CartWidget/Cartwidget'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'
  

const App = () => {
  return (

    <>

<NavBar/>

{/* <ItemListContainer Bienvenida= "Bienvenidos a Blackpool libros"/>
<ItemDetailContainer/> */}

<Routes>

  <Route path="/:" element={<ItemListContainer Bienvenida= "Bienvenidos a Blackpool libros"/>}></Route>

  <Route path= "/categoria/:seccion" element= {<ItemListContainer Bienvenida= "Bienvenidos a Blackpool libros"/>}> </Route>

  <Route path = "/detalle/:id" element= {<ItemDetailContainer/>}></Route>


</Routes>


    </>

  )
}

export default App

