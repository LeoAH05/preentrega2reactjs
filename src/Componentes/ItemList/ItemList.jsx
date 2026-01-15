import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({ productos }) => {

  if (!productos || productos.length === 0) {
    return <p>No hay productos para mostrar</p>
  }

  return (
    <div className="productos">
      {productos.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ItemList
