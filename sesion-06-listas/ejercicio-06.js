/*Enunciado del ejercicio:
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */
const listaCompra = ["arroz", "carne", "pollo", "queso", "huevos"];
listaCompra.push("Aceite de Girasol")
console.log(listaCompra)
listaCompra.pop()
console.log(listaCompra)

var fecha = new Date(1998,01,13);
console.log(fecha);

peliculasFavoritas = [
    { titulo: "Titanic", director: "James Cameron", fecha:new Date(1998,01,13) },
    { titulo: "El Rito", director: "Mikael Hafstrom", fecha:new Date(2011,01,25)},
    { titulo: "Corazon Valiente", director: "Mel Gibson", fecha:new Date(1995,04,19)}
]
console.log(peliculasFavoritas)

const peliculasDespues2010 = peliculasFavoritas.filter(pel => pel.fecha > new Date(2010,0,1));
console.log(peliculasDespues2010)

const directoresPeliculas = peliculasFavoritas.map(dir => dir.director)
console.log(directoresPeliculas)

const tituloPeliculas = peliculasFavoritas.map(tit => tit.titulo)
console.log(tituloPeliculas)

const directorTitulo = directoresPeliculas.concat(tituloPeliculas);
console.log(directorTitulo)

const directorTituloFactor = [...directoresPeliculas, ...tituloPeliculas]
console.log(directorTituloFactor)