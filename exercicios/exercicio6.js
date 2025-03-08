let numeros = [10, 20, 30, 40, 50]

numeros.push(7)
console.log(numeros)

numeros.shift()
console.log(numeros)

console.log(Math.max.apply(null, numeros))

console.log(Math.min.apply(null, numeros))


