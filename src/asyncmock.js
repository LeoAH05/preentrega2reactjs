const misNovelas = [
    {id: 1, seccion: "novela", Nombre: "Stephen King", titulo: "It", precio: 15000, img:"../public/imagenes/IT.jpg"},
    {id: 2, seccion: "novela", Nombre: "Stephen King", titulo: "Si te gusta la oscuridad", precio: 30000, img:"../public/imagenes/top1.jpg"},
    {id: 3, seccion: "novela", Nombre: "Stephen King", titulo: "Cementerio de animales", precio: 10000, img:"../public/imagenes/CementerioA.jpg"},
    {id: 4, seccion: "novela", Nombre: "Stephen King", titulo: "El misterio de salem lot", precio: 10000, img:"../public/imagenes/Misterio.jpg"},
    {id: 5, seccion: "novela", Nombre: "Paul Tremblay", titulo: "Desaparicion en la roca del diablo", precio: 20000, img:"../public/imagenes/diablo.jpg"},
    {id: 6, seccion: "novela", Nombre: "Paul Tremblay", titulo: "Una cabeza llena de fantasmas", precio: 20000, img:"../public/imagenes/unacabeza.jpg"},
    {id: 7, seccion: "novela", Nombre: "Paul Tremblay", titulo: "La cancion del superviviente", precio: 15000, img:"../public/imagenes/Lacancion.jpg"},
    {id: 8, seccion: "novela", Nombre: "Stephen Chbosky", titulo: "Amigo imaginario", precio: 40000, img:"../public/imagenes/amigoimaginario.jpg"},
    {id: 9, seccion: "novela", Nombre: "Neil Gaiman", titulo: "Coraline", precio: 5000, img:"../public/imagenes/Coraline.jpg"},
    {id: 10, seccion: "mangas", Nombre: "Alan Moore", titulo: "La broma asesina", precio: 30000, img:"../public/imagenes/Broma.jpg"},
    {id: 11, seccion: "mangas", Nombre: "Inio Asano", titulo: "Solanin", precio: 10000, img:"../public/imagenes/Solanin.jpg"},
    {id: 12, seccion: "mangas", Nombre: "Inio Asano", titulo: "Nijigahara holograph", precio: 5000, img:"../public/imagenes/holograph.jpg"},
    {id: 13, seccion: "mangas", Nombre: "Junji Ito", titulo: "Uzumaki", precio: 7000, img:"../public/imagenes/uzumaki.jpg"},
    {id: 14, seccion: "educacional", Nombre: "Santillana", titulo: "Alfa y Beto", precio: 25000, img:"../public/imagenes/AlfaB.jpg"},
    {id: 15, seccion: "educacional", Nombre: "Kapeluz", titulo: "Manual 4", precio: 5000, img:"../public/imagenes/manual.jpg"},
    {id: 16, seccion: "inicio", Nombre: "Stephen King", titulo: "No tengas miedo", precio: 35000, img:"../public/imagenes/preventa2.jpg",},
    {id: 17, seccion: "inicio", Nombre: "Isabel Allende", titulo: "Mi nombre es Emilia Del Valle", precio: 20000, img:"../public/imagenes/preventa3.jpg"},
    {id: 18, seccion: "preventa", Nombre: "Stephen King", titulo: "Hansel y Gretel", precio: 50000, img:"../public/imagenes/Hansel.jpeg"},
    {id: 19, seccion: "preventa", Nombre: "George R.R. Martin", titulo: "Wind of Winter", precio: 60000, img:"../public/imagenes/invierno.jpg"},
    
];



export const getNovelas = (seccion) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            
            const novelas= misNovelas.filter(item=>item.seccion === seccion)
            resolve(novelas)
            
        },2000)
    })
}

export const getUnaNovela = (id)=>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            const novelas= misNovelas.find(item=>item.id == id)
            resolve (novelas)
        }, 2000)
    })
}