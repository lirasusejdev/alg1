// import project - dependencies
let teclado = require('prompt-sync')()

//Entrada de dados
console.log('Digite o primeiro valor')
let valor1 = teclado()
let valor2 = teclado()

//Processamento
let v1 = parseFloat(valor1)
let soma = valor1 + valor2

//Saida de dados
//Voce digitou o valor X
//console.log('Voce digitou o valor', valor2)
//console.log(`Voce digitou o valor ${valor1}`)
console.log(`Resultado: ${soma}`)
console.log('Resultado: ' + soma)
