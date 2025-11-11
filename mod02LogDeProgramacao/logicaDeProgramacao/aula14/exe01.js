/*
Você recebeu o seguinte objeto que representa um produto de um e-commerce:

const produto = {
  nome: 'Notebook',
  preco: 4500,
  especificacoes: {
    memoria: '16GB',
    armazenamento: '512GB SSD',
    processador: 'Intel Core i7'
  },
  disponivel: true
};

a) Use desestruturação de objeto para extrair as propriedades nome e preco do 
objeto produto.
b) Extraia também as propriedades internas do objeto especificacoes: memoria, 
armazenamento e processador.
c) Crie uma função chamada mostrarProduto() que receba o objeto produto e 
utilize desestruturação diretamente nos parâmetros.
d) Dentro da função, exiba uma mensagem formatada no console com os dados 
do produto, conforme o exemplo abaixo:

Produto: Notebook
Preço: R$ 4500
Memória: 16GB
Armazenamento: 512GB SSD
Processador: Intel Core i7
Disponível: Sim

Desafio

Altere o objeto para incluir uma propriedade fornecedor com nome e país, e
use desestruturação aninhada para extrair esses dados(não faça diretamente 
no objeto).
Crie uma função que retorne uma string formatada com todas as informações
do produto e do fornecedor.


*/

const produto = {
  nome: 'Notebook',
  preco: 4500.91,
  especificacoes: {
    memoria: '16GB',
    armazenamento: '512GB SSD',
    processador: 'Intel Core i7'
  },
  disponivel: true,
  
};



function mostrarProduto(produto){
  const {nome, preco, especificacoes: {memoria, armazenamento, processador}, disponivel} = produto;
  console.log('Produto:', nome);
  let preco1 = preco.toLocaleString('pt-br');
  console.log('Preço: R$', preco1);
  console.log('Memória:', memoria);
  console.log('Armazenamento:', armazenamento);
  console.log('Processador:', processador);
  const situacao = disponivel === true ? 'Sim' : 'Não';
  console.log('Disponível:', situacao);
}

produto.fornecedor = {
  nome: 'Dell',
  country: 'EUA'

}

produto.saudacao = function(){
  console.log('Olá, Comprador');
}

// console.log(produto);
// mostrarProduto(produto);

function dadosFornecedor(produto){
  produto.saudacao()
  mostrarProduto(produto);
  console.log('-------------------------------')
  const {fornecedor: {nome, country}} = produto;
  console.log('Nome do fornecedor:', nome);
  console.log('País fornecedor:', country);
}

dadosFornecedor(produto);
// fornecedor.saudacao();






// // a) e b)
// const { nome, preco, especificacoes: { memoria, armazenamento, processador }, disponivel } = produto;

// console.log(nome, preco, memoria, armazenamento, processador, disponivel);

// // c) função com desestruturação nos parâmetros
// function mostrarProduto({ nome, preco, especificacoes: { memoria, armazenamento, processador }, disponivel }) {
//   console.log('------------------------')
//   console.log(`Produto: ${nome}`);
//   console.log(`Preço: R$ ${preco}`);
//   console.log(`Memória: ${memoria}`);
//   console.log(`Armazenamento: ${armazenamento}`);
//   console.log(`Processador: ${processador}`);
//   console.log(`Disponível: ${disponivel ? 'Sim' : 'Não'}`);
// }

// // Desafio

// // adiciona uma nova propriedade no meu objeto
// produto.fornecedor = {nome: 'Dell', pais: 'EUA'};


// produto.saudacao = function(){
//   return 'Olá, comprador';
// }
// // console.log(produto)

// function dadosFornecedor(produto){
//     console.log(produto.saudacao());
//     mostrarProduto(produto);
//     const {fornecedor: {nome, pais}} = produto
//     console.log(`Fornecedor: ${nome}`);
//     console.log(`País: ${pais}`);
// }
// dadosFornecedor(produto);