import { collection, doc, getDoc, getDocs, query, where  } from "firebase/firestore";
import { db } from "./firebaseConfig";


export const getProductos = (seccion) => {

    const productosCollection = collection(db, "libros");

    let consulta

if (seccion) {
  consulta = query(
    productosCollection,
    where("seccion", "==", seccion)
  )
} else {
  consulta = productosCollection
}

    return getDocs(consulta)
        .then((respuesta) => {

            const productosConFormato = respuesta.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return productosConFormato;
        })
        .catch((error) => {
            console.log(error);
        });
};


export const getProductoById = (id) => {
  const productosCollection = collection(db, "libros");
  const consulta = query(productosCollection, where("id", "==", Number(id)));
  
  return getDocs(consulta)
    .then((respuesta) => {
      if (respuesta.empty === false) {
        const doc = respuesta.docs[0];
        const producto = {
          id: doc.id,
          ...doc.data()
        };
        return producto;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};





/* export const getProductoById = (id) => {
  const productoRef = doc(db, "libros", id)

  return getDoc(productoRef).then(res => {
    if (res.exists()) {
      return {
        id: res.id,
        ...res.data()
      }
    }
  })
}
 */

/* export const getUnaNovela = (id)=>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            const novelas= misNovelas.find(item=>item.id == id)
            resolve (novelas)
        }, 2000)
    })
} */