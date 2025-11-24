import { useState, useEffect} from 'react'

import { getNovelas } from '../../asyncmock'
import  ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



/* import Botones from "../Botones/Botones" */


const ItemListContainer = (props) => {

  const [novelas, setNovelas] = useState([])
  const {seccion} = useParams ()


  useEffect(()=>{
          getNovelas(seccion)
          .then(respuesta => setNovelas(respuesta))
  
      }, [seccion])
  

    /* useEffect(()=>{
      getnovelas()
      .then(respuesta=> setNovelas(respuesta))
      .catch(error=> console.log(error))
    },[]) */

  return (
    <div>
    <h1>{props.Bienvenida}</h1>

    {/* <h2>Lo mejor del terror</h2> */}

    <ItemList novelas = {novelas} />

    
    {/* <Botones Orden= "Comprar"/>
     <Botones Orden= "Reservar"/> */}
      


    </div>
  )
}

export default ItemListContainer