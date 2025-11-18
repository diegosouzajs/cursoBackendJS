// Função construtora
// é uma função que utilizamos para construir objetos
// um fator de grande importância é o fato do uso da palavra reservada this
// uma função construtora deve sempre iniciar com letra maiúscula
// sua chamada deve utilizar a palavra reservada new NomeDaFuncao(argumentos);

function Funcionario([nome, sobrenome, idade, funcao]){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.funcao = funcao;
    this.apresentar = function(){
            return(`
                Olá. Meu nome é ${this.nome} ${this.sobrenome}.
                Tenho ${this.idade}.
                E sou um(a) ${this.funcao}.            
                `);    
    }
};

const diego = ['Diego','Souza',39,'Analista']
const pessoa1 = new Funcionario(diego);
const pessoa2 = new Funcionario(['Eduardo','Gomes',40,'Gênio da matemática']);
const pessoa3 = new Funcionario(['Jonas','Oliveira',20,' DevOps']);

console.log(typeof pessoa1);

function imprimeObj({nome, sobrenome, idade, funcao, apresentar}){
    console.log('Nome: ', nome);
    console.log('Sobrenome: ', sobrenome);
    console.log('Idade: ', idade);
    console.log('Funcao: ', funcao);
}

imprimeObj(pessoa1);
imprimeObj(pessoa2);
imprimeObj(pessoa3);
console.log(pessoa1.apresentar());

console.log('Nome: ', pessoa1.nome);
console.log('Sobrenome: ', pessoa1.sobrenome);
console.log('Idade: ', pessoa1.idade);
console.log('Funcao: ', pessoa1.funcao);

console.log('Nome: ', pessoa2.nome);
console.log('Sobrenome: ', pessoa2.sobrenome);
console.log('Idade: ', pessoa2.idade);
console.log('Funcao: ', pessoa2.funcao);


console.log('Nome: ', pessoa3.nome);
console.log('Sobrenome: ', pessoa3.sobrenome);
console.log('Idade: ', pessoa3.idade);
console.log('Funcao: ', pessoa3.funcao);

function Pessoa(nome,  sobrenome, ...rest ){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    };
    this.resto = rest;
    this.imprirResto = function(){
        for(let item of this.resto){
            console.log(item);
        }
    };    
}

const pessoa4 = new Pessoa('Diego','Souza',39,'Analista');

console.log(pessoa1.nomeCompleto());
pessoa1.imprirResto();


function lerNumeros(){
    // const soma = arguments.reduce((total, n) => total + n, 0);
    // console.log(soma);
    console.log(typeof arguments);
}

lerNumeros(1,4,5,7,9,10,14);
