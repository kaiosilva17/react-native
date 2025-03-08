let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const par = function (a) {
  return a.filter((num) => num % 2 === 0);
};
console.log(par(numeros));

const vezes = function (a) {
  return a.map((num) => num * 2);
};
console.log(vezes(numeros));

const soma = function (a) {
  return a.reduce((b, c) => b + c, 0);
};
console.log(soma(numeros));

function valores(a) {
  const pares = a.filter((num) => num % 2 === 0);

  const dobrados = pares.map((num) => num * 2);

  const soma = dobrados.reduce((b, c) => b + c, 0);

  return { pares, dobrados, soma };
}

const resultado = valores(numeros);
console.log("pares:", resultado.pares);
console.log("dobrados:", resultado.dobrados);
console.log("total:", resultado.soma);
