/*
As várias maneiras de declarar funções em JavaScript

Vamos aprofundar na parte básicar. O que são funções
o que elas realizam e como podemos trabalhar com elas.
Funções são first-class objects - objetos de primeira classe ->
pode ser tratada como dado

## Formas de declarar

1 - Declação de função (function hoisting)
Quando declaramos a função desta maneira, é que acontece o hoisting
- a engine do js vai elevar as funções e as variaveis definidas com var
para o topo do código javascript.
Isso significa que posso chamar uma função antes mesmo dela ser 
criada no código.
quando usamos uma função nomeada como 
falaOi(nome)
function falaOi(nome){
    console.log('Oi ', nome);
}

2 - jogar uma função anonima dentro de uma variavel

const souUmDado = function(){
    console.log('Sou um dado.');
Desta forma, posso utilizar a constante como uma função normal
Inclusive, posso passar essa variavel como parâmetro para outra 
função.
Dentro quando passamos uma função anonima para uma variavel, a função
passa a ter o nome da variavel

3 - Arrow functions -> recurso do ECMA Script 2015
é uma declaração de função (function expression) bem mais curta
};
Há uma diferença quando utilizamos a palavra reservada this
As arrow functions não têm seu próprio this.
Elas herdam o this do contexto léxico onde foram criadas — isto é, do escopo exterior.

4 - Dentro de um objeto. Posso criar uma função 
dentro de um objeto. Desta forma a função torna-se um método do
objeto.
Nas versões mais novas, podemos dispensar a palavra reservada 
function

*/


console.log(testeHoisting2);

falaOi()
// declaração de função
function falaOi(){
    console.log('Oi');
}

// constante recebe função como dado
// function expression
const souUmDado = function(){
    console.log('Sou um dado.');
};

function executafuncao(funcao){
    console.log('Vou executar sua função abaixo.')
    funcao();
}
executafuncao(souUmDado);

// arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function!');
};

funcaoArrow();

// Dentro de um objeto
const objeto = {
    falar() {
        console.log('SOU UM MÉTODO DE UM OBJETO E estou falando...');
    },
};

objeto.falar();

let testeHoisting  ='Chamar no ínicio do código';
var testeHoisting2  ='Chamar no ínicio do código';