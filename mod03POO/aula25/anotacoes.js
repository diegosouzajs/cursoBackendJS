

// const objeto1 = {
//     nome: 'Nome',
//     quantidade: 10,
//     opcao: true
// }

// const objeto2 = {
//     nome: 'Nome2',
//     quantidade: 15,
//     teste: 3
// }

// console.log(Object.assign({}, objeto2, objeto1));

class Carro {
    #velocidade = 0 // variavel privada
    constructor(nome, marca, ano) {
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;


    }
    // método de classe -> inserido direto no prototype da classe
    acelerar(valor = 10) {
        this.#velocidade += valor;
        return `${this.nome}  acelerando... Velocidade atual ${this.#velocidade} km/h`;
    }
    andar() {
        return 'O carro está andando..'
    }
}

// const uno = new Carro('Fiat Uno', 'Fiat', 2008);
// const civic = new Carro('Honda Civic', 'Honda', 2025);
// console.log(uno.acelerar(100));
// console.log(civic.acelerar(30));
// console.log(Carro.prototype);


const produto = { precoBase: 100 };

Object.defineProperty(produto, "precoComDesconto", {
    
    get: function () {
        return this.precoBase * 0.9;
    },
    set: function (valor) {
        this.precoBase = valor / 0.9;
    }
});

// console.log(produto.precoComDesconto); // 90
// produto.precoComDesconto = 180;
// console.log(produto.precoBase); // 200


class Moto{
    #marca
    constructor(modelo, marca, cilindradas){
        this.modelo = modelo;
        this.#marca = marca;
        this.cilindradas = cilindradas;
    }

    get descricao(){
        return `Modelo: ${this.modelo} | Marca: ${this.#marca} | Cilindradas: ${this.cilindradas}`
    }
}

const cg = new Moto('CG Titan', 'Honda', 1000);
console.log(cg);
console.log(cg.descricao);