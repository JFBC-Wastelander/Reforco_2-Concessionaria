const prompt = require('prompt-sync')()
const concessionaria = require('./concessionaria.js')
while (true){
console.log("Escolha uma das opções abaixo:")
let entrada = prompt("1- Adicionar carro. 2- Remover carro. 3- Listar carros. 4- Atualizar carro. 5- Sair. ")
if (entrada == "Adicionar carro".toLowerCase() || entrada == "Adicionarcarro".toLowerCase || entrada == 1) {
    concessionaria.adicionar()
} else if (entrada == "Remover carro".toLowerCase() || entrada == "Removercarro".toLowerCase() || entrada == 2) {
    console.log("carro removido")
} else if (entrada == "Listar carro".toLowerCase() || entrada == "Listarcarro".toLowerCase() || entrada == 3) {
    concessionaria.listar()
} else if (entrada == "Atualizar carro".toLowerCase() || entrada == "Atualizarcarro".toLowerCase() || entrada == 4) {
    console.log("atualizar")
} else if (entrada == "Sair".toLowerCase() || entrada == 5) {
    console.log("Saindo...")
    process.exit()
} else {
    console.log("Informe um valor correto.")
}
}