/* Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */

const datosPersonales = {
    nombre:"Orlando",
    apellido:"Echeverria",
    edad:"44",
    altura:1.68,
    eresDesarrollador:true
}

const edadOrlando = datosPersonales.edad;
console.log(edadOrlando);
const lista = [{...datosPersonales},{
    nombre:"Samith",
    apellido:"Marquez",
    edad:35,
    altura:1.70,
    eresDesarrollador:false
},{
    nombre:"Mauricio",
    apellido:"Gonzalez",
    edad:46,
    altura:1.72,
    eresDesarrollador:false
}]
console.log(lista);

const nuevaLista = lista.sort((a,b) => b.edad - a.edad)
console.log(nuevaLista)

