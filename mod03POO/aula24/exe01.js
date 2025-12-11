/*
Refatorar o código procedural abaixo, de forma que as variáveis e funções 
fiquem encapsuladas dentro de uma classe, aplicando os conceitos de atributos, 
métodos de instância e encapsulamento básico.
Código procedural
let produto = "Camiseta";
let quantidade = 10;

function adicionarEstoque(qtd) {
  quantidade += qtd;
}

function removerEstoque(qtd) {
  if (quantidade >= qtd) {
    quantidade -= qtd;
  } else {
    console.log("Estoque insuficiente!");
  }
}


function verEstoque() {
 console.log(`Produto: ${produto} | Quantidade: ${quantidade}`);
}

// Execução
adicionarEstoque(5);
removerEstoque(3);
verEstoque();
*/

class Produto{
  constructor(nome, quantidade){
    this.nome = nome;
    this.quantidade = quantidade;    
  }
  adicionarEstoque(qtd){
    return this.quantidade += qtd;
  }

  removerEstoque(qtd){
    if(qtd > this.quantidade) {
      return 'Operação inválida!';
    }
    return this.quantidade -= qtd;
  }

  verProduto(){
    return `Nome: ${this.nome} | Quantidade: ${this.quantidade}`;
  }
}

const celular = new Produto('Iphone',10);
console.log(celular);
celular.adicionarEstoque(10);
console.log(celular.removerEstoque(5));
console.log(celular.verProduto());
console.log(celular.removerEstoque(21));
console.log(celular.verProduto());








// class Produto{
//     constructor(produto, quantidade){
//         this.produto = produto;
//         this.quantidade = quantidade;
//     }

//     adicionarEstoque(qtd){
//         this.quantidade += qtd;        
//     }

//     removerEstoque(qtd){
//         if(qtd > this.quantidade) {
//             return `Quantidade maior que o estoque!`
//         }
//         this.quantidade -= qtd
//     }

//     verEstoque(){
//         console.log('Produto: ', this.produto);
//         console.log('Estoque: ', this.quantidade);
//     }
// }

// const produto = new Produto('Notebook',10);
// produto.adicionarEstoque(5);
// produto.verEstoque();

// const p2 = new Produto('Iphone',5);
// console.log();
// console.log(p2.removerEstoque(6));
// p2.adicionarEstoque(6);
// p2.verEstoque();