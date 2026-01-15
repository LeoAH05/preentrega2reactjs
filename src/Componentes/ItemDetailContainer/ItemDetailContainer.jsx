import React, {useEffect, useState} from 'react'
import { getProductoById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [novela, setNovela] = useState (null)
    const {id}= useParams ()

    useEffect(()=>{
         getProductoById(id)
        .then(respuesta => setNovela(respuesta))

    }, [id])


    if (novela === null) {
  return <p>Cargando...</p>
}

  


  return (
    <div>
        <ItemDetail {...novela}/>


    </div>
  )
}

export default ItemDetailContainer