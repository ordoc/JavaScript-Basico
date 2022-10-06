/*Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */

const familia = ["Marcela", "Mariana", "Isabella", "Orlando"];
console.log(familia);
const setFamilia = new Set(["Marcela", "Mariana", "Isabella", "Orlando"]);
console.log(setFamilia);
setFamilia.add("Orlando");
console.log(setFamilia);
setFamilia.add("Javascript");
console.log(setFamilia);
