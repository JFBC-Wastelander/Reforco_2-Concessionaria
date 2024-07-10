const prompt = require("prompt-sync")()
const concessionaria = []
function adicionar () {
    let carro = {
        marca: "",
        modelo: "",
        preco: "",
        ano: "",
    }
    carro.marca = prompt("Informe a marca do novo carro: ")
    carro.modelo = prompt("Informe o modelo desse novo carro: ")
    carro.preco = prompt("Informe o preço do carro: ")
    carro.ano = prompt("Informe o ano de fabricação do carro: ")
    concessionaria.push(carro)
    console.log(`O carro ${carro.marca} foi adicionado a concessionária`)
}

function remover () {

}

function listar () {
    concessionaria.forEach()
}

function atualizar () {

}

module.exports = {
    adicionar,
    remover,
    listar,
    atualizar,
}