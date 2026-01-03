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
        });
        
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


const cg = new Moto();

cg.nome = 'CG Titan';
cg.marca = 'Honda';
cg.cor = 'Vermelha';
cg.cilindradas = 150;
console.log(cg);
// const cg = new Moto('CG Titan','Honda','Vermelha',150);
// console.log(cg.acelerar(50));

class Pessoa{
    #nome
    #sobrenome
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        return `Olá! Meu nome é ${this.nome} ${this.sobrenome}`;
    }
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
    set nomeCompleto(valor){
        const nomes = valor.split(' ');
        this.nome = nomes[0];
        this.sobrenome = nomes[1];
    }

}

const p1 = new Pessoa('Diego', 'Souza')
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Maria José'
console.log(p1.nomeCompleto);
console.log(p1);
// console.log(Pessoa.prototype.falar === p1.__proto__.falar);



class Conta{
    #saldo; // variavel privada
    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }
    // se comporta como uma propriedade do objeto
    get saldo(){
        return this.#saldo;
    }
    // protege a propriedade
    set saldo(valor){
        console.log(`Operação Inválida. Faça um depósito`);
    }
    depositar(valor){
        return this.#saldo += valor;
    }
}

const cc = new Conta(10);
// cc.saldo = 500;
console.log(cc.depositar(500));
console.log(cc.saldo);