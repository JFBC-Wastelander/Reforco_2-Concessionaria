const prompt = require("prompt-sync")();
const concessionaria = [];

function adicionar() {
  let carro = {
    marca: "",
    modelo: "",
    preco: "",
    ano: "",
  };
  carro.marca = prompt("Informe a marca do novo carro: ");
  carro.modelo = prompt("Informe o modelo desse novo carro: ");
  carro.preco = +prompt("Informe o preço do carro: ");
  carro.ano = +prompt("Informe o ano de fabricação do carro: ");
  concessionaria.push(carro);
  console.log(
    `O carro ${carro.marca} ${carro.modelo} foi adicionado a concessionária.`
  );
}

function remover() {
  console.log(concessionaria);
  let entradaRemover = prompt("Informe a marca do carro que deseja remover: ");
  let deletou = false;
  for (let i = 0; i < concessionaria.length; i++) {
    if (entradaRemover.toLowerCase() == concessionaria[i].marca.toLowerCase()) {
      concessionaria.splice(i, 1);
      deletou = true;
      console.log("Carro removido com sucesso.");
    }
  }
  if (!deletou) {
    console.log("Não temos essa marca na concessionária.");
  }
}

const listar = function () {
  console.log(concessionaria);
};

const atualizar = () => {
  listar();
  let indice = +prompt("Qual índice deseja atualizar? ");
  indice = indice - 1;
  let carro = {
    marca: "",
    modelo: "",
    preco: "",
    ano: "",
  };
  carro.marca = prompt("Informe a marca do novo carro: ");
  carro.modelo = prompt("Informe o modelo desse novo carro: ");
  carro.preco = +prompt("Informe o preço do carro: ");
  carro.ano = +prompt("Informe o ano de fabricação do carro: ");
  concessionaria[indice] = carro;
};

module.exports = {
  adicionar,
  remover,
  listar,
  atualizar,
};
