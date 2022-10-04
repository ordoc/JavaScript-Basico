/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/


let alturaCem=168
let alturaMet=1.68;
let pesoKg=68.5;

let alturaMetRed=Math.ceil(alturaMet);
console.log(alturaMetRed);

let pesoKgRed=Math.floor(pesoKg);
console.log(pesoKgRed);

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(sonIguales)
