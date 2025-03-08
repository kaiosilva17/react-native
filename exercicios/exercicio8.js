let pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo"
}

pessoa.peso = 90
console.log(pessoa)

delete pessoa.peso 
console.log(pessoa)

console.log(Object.keys(pessoa))