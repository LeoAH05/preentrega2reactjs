import React from 'react'
import Item from "../Item/Item" 
import "./ItemList.css"

const ItemList = ({novelas}) => {
  return (
    <div className= "productos">
        {novelas.map(item=> <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemList