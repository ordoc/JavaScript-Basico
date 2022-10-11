/* Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función */

var fibonacci = function(num) {
    const sol = [0, 1];
    let array =[1]
    for (let i = 2; i<= num; i++) {
        sol[i] = sol[i -1] + sol[i - 2];
        array.push(sol[i])
    }
    return array;
};

console.log(fibonacci(6))
