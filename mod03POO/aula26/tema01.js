/*
Aula 26 - Herança em javascript

Herança é o mecanismo pelo qual um objeto pode reutilizar propriedades e métodos de outro objeto.
No JavaScript, isso é implementado através do prototype chain (cadeia de protótipos).

Herança prototipal
Todo objeto em JavaScript tem um prototype (exceto Object.prototype, que é a raiz).

Quando você acessa uma propriedade/método em um objeto, o motor do JS procura:
Primeiro no próprio objeto.
Depois no seu prototype.
Depois no prototype do prototype…
Até chegar em Object.prototype ou null.


*/

class Veiculo{
    #velocidade = 0 // variavel privada -> acessada apenas dentro do escopo da classe
    constructor(nome, marca, cor){
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        Object.defineProperty(this,'velocidade',{
            get: () => this.#velocidade,
            enumerable: true
        })
        
    }
    acelerar(valor=10){
        this.#velocidade += valor;
        return `A velocidade do(a) ${this.nome} é ${this.#velocidade} km/h`
    }
}

class Moto extends Veiculo{
    constructor(nome, marca, cor, cilindradas){
        super(nome, marca, cor)
        this.cilindradas = cilindradas;
    }
}

const cg = new Moto('CG Titan','Honda','Vermelha',150);
// console.log(cg.acelerar(50));


const animal = {
    tipo: 'Mamífero',
    comer(){
        console.log('Estou comendo...');
    }
}

const cachorro = Object.create(animal);// herda de animal
cachorro.nome = 'Rex';

// console.log(cachorro);
// console.log(cachorro.tipo);
// console.log(cachorro.comer());

// função construtora
// função pai -> prototype de Cliente
function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

// método no prototype
Pessoa.prototype.apresentar = function(){
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos!`);
}

// método no prototype
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const p1 = new Pessoa('Diego','Souza',39);
// console.log(p1.apresentar());

function Cliente(nome, sobrenome, idade, endereco, telefone){
    Pessoa.call(this, nome, sobrenome, idade);
    this.endereco = endereco;
    this.telefone = telefone;
}

// Defino como prototype de Cliente a função Pessoa
Cliente.prototype = Object.create(Pessoa.prototype);

const c1 = new Cliente('Jose','Rodrigues',29, 'Rua dois, nº 9','991238534');


console.log(c1.nomeCompleto());
console.log(c1.email);



// Prototype
//     Pessoa
//         Cliente

// Protype



// class Veiculo{
//     #velocidade = 0;
//     constructor(nome, marca, cor){
//         this.nome = nome;
//         this.marca = marca;
//         this.cor = cor;
//         Object.defineProperty(this,'velocidade',{
//             get: () => this.#velocidade,
//             enumerable: true
//         })

//     }
//     get estadoParado(){
//         return this.#velocidade === 0;
//     }
    
//     acelerar(valor = 1){
//         if(valor <= 0){
//             throw new Error("Valor de aceleração deve ser positivo")
//         }
//         this.#velocidade += valor
//         return `Acelerando ${this.nome}... Velocidade atual: ${this.#velocidade} km/h`;
//     }
    
// }

// const uno = new Veiculo('Fiat Uno', 'Fiat', 'Prata');

// console.log(uno);
// console.log(uno.acelerar());
// console.log(uno.acelerar());
// console.log(uno.acelerar());
// console.log(uno.acelerar());
// console.log(uno.acelerar(50));
// console.log();


// // moto herda de Veiculo
// class Moto extends Veiculo{
//     // variavel privada da classe
//     #velocidade = 0;
//     // construtor da classe
//     constructor(nome, marca, cor, modelo, cilindradas){
//         // chamando as propriedades da classe pai)
//         super(nome, marca, cor);
//         this.modelo = modelo;
//         this.cilindradas = cilindradas;
//     }

//     // método próprio da classe Moto
//     empinar(){
//         if(this.#velocidade < 20){
//             return "Velocidade insuficiente para empinar.";
//         }
//         return "A moto está empinada";
//     }

//     // polimorfismo -> sobrescrevo o método acelerar de veículo
//     acelerar(valor = 1){
//         if(valor <= 0){
//             throw new Error("Valor de aceleração deve ser positivo")
//         }
//         const multplicador = 1.5;
//         this.#velocidade += (valor * multplicador);
//         return `Acelerando ${this.nome}... Velocidade atual: ${this.#velocidade} mi/h`;
//     }

// }

// const ninja = new Moto("Kawasaki Ninja", "Kawasaki", "Ouro", "Esportivo",1100);

// console.log(ninja.acelerar(50));
// console.log(ninja.acelerar());
// console.log(ninja.empinar());

