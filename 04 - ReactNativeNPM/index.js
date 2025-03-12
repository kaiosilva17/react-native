import { calcularIMC, tabelaIMC } from "./calculadoraIMC.js";
import moment from "moment"

console.log(calcularIMC(100, 1.85))
console.table(tabelaIMC)

const hoje = moment().locale('pt-br')
console.log(hoje.format('DD/MM/yyyy'))