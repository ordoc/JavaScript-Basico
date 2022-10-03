let factorial = 1
let num = 10
while (true) {
    factorial = factorial + factorial*num
    num--
    if (num === 1) break
}
console.log(factorial) // Factorial de 10 = 3628800