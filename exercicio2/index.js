import { soma, subtracao, divisao, multiplicacao } from "./calculadora.js";
import moment from 'moment';

console.log("Soma: ", soma(10, 5));
console.log("Subtração: ", subtracao(10, 5));
console.log("Multiplicação: ", multiplicacao(10, 5));
console.log("Divisão: ", divisao(10, 5));


function calcularIdade(anoNascimento) {
const anoAtual = moment().format("yyyy")
return anoAtual - anoNascimento
}
const anoNascimento = 2002;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);