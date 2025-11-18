// Function expression
// quando armazenamos uma função dentro de uma constante.
// muito útil uma vez que isso viabilizar utiliza-la como argumento de uma 
// outra função
const saudacao = function(){
    console.log('Olá Mundo');
    return 1;
}

console.log(saudacao());
console.log();

// forma tradicional de se declarar uma função
// ela sofre hoisting(alavancada para o topo do códio quando ele é 
// executado)
function cumprimeto(saudacao){
    console.log('Função como argumento')
    console.log(saudacao());
}

cumprimeto(saudacao);
console.log();
// arrow function
// introduzidas no ES6. Forma mais moderna de se trabalhar com funções
// sua desvantagem é o fato de não ter this, prototype ou arguments

const contagemRegressiva = () => {
    for(let i = 10; i >= 0; i--){
        console.log(i);
    }
}
console.log('--------------------------');
contagemRegressiva();
console.log('--------------------------');


const pessoa = {
    nome: 'Diego',
    sobrenome: 'Souza',
    idade: 25,
    nomeCompleto: () =>{
        console.log("-----------------------------")
        console.log(pessoa.nome, pessoa.sobrenome)
        console.log("-----------------------------")
    }
}

//function expression 
const soma = function () {
    console.log();
    for (item of arguments){
        console.log(item);
    }
    // console.log(rest);
    // const total = a + b + c;
    return 1 + 2;
}

console.log(soma(10,20,3,4,5,6,7,10));

// Função Nomeada (Named Function Expression)
// útil para ser usada em funções recursivas. 

const fatorial = function calcula(n) {
  return n <= 1 ? 1 : n * calcula(n - 1);
};

console.log(fatorial(8));


// função auto invocada
(function saudacao(){
    console.log('Olá, Mundo!');
})()


const valor = 10;

(function conta(){
    const valor = 1000;
})();

// função dentro de objeto é um método

const conta = {
    saldo: 1000,
    numero: '10123-4',
    divida: 15000,
    tipoConta: 'Poupança',
    titular: 'Orozimbo Rodrigues Neto',
    verSaldo: function (){
        return(this.saldo)
    },
    depositar(valor){
        return this.saldo += valor;
    },
    saque: (valor)=> {
        if(valor <= conta.saldo){
            conta.saldo = conta.saldo - valor;
            return conta.saldo;
        }else{
            return `Saldo Insuficiente`;
        }
    },
}

console.log(conta.verSaldo());
console.log(conta.saque(100));
console.log(conta.verSaldo());
console.log(conta.saque(1000));




function somarTudo(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log(somarTudo(1, 2, 3, 4, 19, 40, 12, 100, -20, -35, )); // 👉 81



