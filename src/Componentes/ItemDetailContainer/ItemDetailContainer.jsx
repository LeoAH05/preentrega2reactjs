import React, {useEffect, useState} from 'react'
import {getUnaNovela} from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [novelas, setNovelas] = useState (null)
    const params= useParams ()

    useEffect(()=>{
        getUnaNovela(params.id)
        .then(respuesta => setNovelas(respuesta))

    }, [])




  return (
    <div>
        <ItemDetail {...novelas}/>


    </div>
  )
}

export default ItemDetailContainer