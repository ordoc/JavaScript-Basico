/*Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos) */

const fechaHoy=new Date();
console.log(fechaHoy);

const miCumple=new Date(1978,04,03);
console.log(miCumple);
const hoyMasTarde = fechaHoy > miCumple;
console.log(hoyMasTarde);
const diaCumple = miCumple.getDay();
console.log(diaCumple); 
const mesCumple = miCumple.getMonth()+1;
console.log(mesCumple);
const anyoCumple = miCumple.getFullYear();
console.log(anyoCumple);