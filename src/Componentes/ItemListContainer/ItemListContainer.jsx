import { useState, useEffect} from 'react'

import { getProductos } from '../../asyncmock'
import  ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])
  const {seccion} = useParams ()


  useEffect(()=>{
          getProductos(seccion)
          .then(respuesta => setProductos(respuesta))
  
      }, [seccion])
  
  
    return (
    <div>
    <h1>{props.Bienvenida}</h1>

    <ItemList productos = {productos} />

    </div>
  )
}

export default ItemListContainer