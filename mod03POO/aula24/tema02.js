/*
Revisando e reforçando objetos

*/

// forma literal
const objeto = {
    produto: 'Notebook',
    quantidade: 10,
    // incluindo método
    verProduto(){
        console.log(`Produto: ${this.produto} | Quantidade: ${this.quantidade}`)
    }
}

objeto.verProduto();
// usando a função Object
// const smartphone = new Object();

// for(item in objeto){
//     console.log(item, objeto[item]);
// }


// // incluindo propriedades
// smartphone.nome = 'Iphone';
// smartphone.quantidade = 15;
// smartphone.marca = 'Apple';


// // forma de acesso
// // através da notação de ponto

// console.log(smartphone.nome);
// console.log(smartphone.marca);
// console.log();

// // através dos colchetes
// console.log(objeto['produto']);
// console.log();

// // incluindo método através da notação de ponto
// smartphone.estoque = function(qtd){
//     return this.quantidade += qtd;
// }
// smartphone.verSmartphone = function (){
//     console.log(`Produto: ${this.nome}\nQuantidade: ${this.quantidade}\nMarca: ${this.marca}`)
// }
// smartphone.estoque(10);

// console.log();
// smartphone.verSmartphone();