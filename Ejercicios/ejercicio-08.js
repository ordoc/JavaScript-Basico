/* Enunciado del ejercicio:
Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos 
*/

function siempreTrue() {
    return true;
}

console.log(siempreTrue());

async function soyPromesa() {
    setTimeout(function(){
        console.log("Hola soy una promesa");
    }, 5000);
}

soyPromesa()

    function* paresId() {
        let id = 0;
        while(true) {
            id=id+2
            if (id === 20) {
                return id
            }
            yield id 
        }
    }
    
    const par = paresId();
    
    console.log(par.next().value)
    console.log(par.next().value)
    console.log(par.next().value)
    console.log(par.next().value)
    console.log(par.next().value)
    console.log(par.next().value)
    console.log(par.next().value)

    
   