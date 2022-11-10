/* Crea un nuevo proyecto de Node

- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)

- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal */

let miNombre = "Orlando";
let miApellido = "Echeverria";
let estudiante = miNombre + " " + miApellido;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let numletras = estudiante.length;
let primeraletranom = estudiante[0];
let ultimaLetraApe = miApellido[miApellido.length-1];
let sinEspacios = estudiante.replace(" ","");
let booleana = estudiante.includes(miNombre);

console.log(miNombre);
console.log(miApellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numletras);
console.log(primeraletranom);
console.log(ultimaLetraApe);
console.log(sinEspacios);
console.log(booleana);
