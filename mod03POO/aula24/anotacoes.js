const objeto = {
    nome: 'Diego',
    idade: 39

};

// factory function
function criarObjeto(produto, quantidade){
    return {
        produto,
        quantidade
    }
}

// função construtora
function Objeto(nome, quantidade){
    this.nome = nome;
    this.qtd = quantidade;
}

Objeto.prototype.estoque =  ()=>{
        return `Produto: ${this.nome} | Quantidade: ${this.qtd}`;
    }


const tv = new Objeto('Televisão', 5);
const carro = new Objeto('Corolla', 5);
console.log(tv);
console.log(carro.estoque());


// class Novo{
//     constructor(nome, quantidade){
//         this.nome = nome;
//         this.quantidade = quantidade;
//     }
// }



