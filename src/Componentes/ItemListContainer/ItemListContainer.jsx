import Botones from "../Botones/Botones"


const ItemListContainer = (props) => {
  return (
    <div>
    <h1>{props.Bienvenida}</h1>
    
    <Botones Orden= "Comprar"/>
     <Botones Orden= "Reservar"/>
      


    </div>
  )
}

export default ItemListContainer