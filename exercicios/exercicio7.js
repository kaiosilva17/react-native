let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"]

let frutasMaiusculas = frutas.map((fruta) => fruta.toUpperCase())
console.log(frutasMaiusculas)

let frutasInicialA = frutas.filter((fruta) => fruta.startsWith("A"))
console.log(frutasInicialA)

let comprimento = frutas.map((fruta) => fruta.length)
console.log(comprimento)