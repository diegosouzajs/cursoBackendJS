/* 
Parâmetros da função

Uma função javascript pode receber parâmetros ou não.
Podemos passar vários parâmetros para uma função que, 
podendo recebe-los ou não, ela executará normalmente, respeitando
a ordem dos parâmetros informados.
Mas, para onde vão os parâmetros não utilizados?
Quando definimos a função com a palavra function(somente com a palavra
function), desta forma ou função da variavel. temos dentro dela uma variavel
chamada arguments. Ela sustenta todos os parâmetros passados para a função
function funcao(){
    console.log('oi');
    console.log(arguments);
}

const a = funcao('Valor', 1,2,3,4,5,6);

Isso é interessante pois podemos elaborar funções que explorem tal 
funcionalidade. Podemos explorar parâmetros passados para a funçao
mesmo sem terem sido especificados no ato de criação dela.
// função definida com a palavra function tem um parâmetro especial
// chamado arguments que sustenta todos os parâmetros enviados.
function funcao(a, b, c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c);
}

console.log(funcao(1,2,3,4,5,6));

Quando uma função recebe mais argumentos do que os passados
o valor atribuido para os parâmetros não informados será undefined

Podemos setar valor padrão para um parâmetro da função
Para pular um parâmetro da função, podemos atribuir a ele o valor 
undefined. Isso não é recomendado. 
*/
function funcao(a, b, c, d, e, f, g){
    for (let argumento of arguments){
        console.log(argumento);
    }
    console.log(a, b,c,d,e,f,g);
}

funcao(1,2,'3', [], {}, undefined, NaN, 'a',32,45,6);

// passando um valor como default para um parâmetro da função (b = 2)
function soma(a, b = 2, c = 4){
    //b = b || 0; // maneira antiga
    console.log(a + b + c);
}

soma(2, undefined, 20);

// Podemos também fazer atribuição por desestruturação, para a função
// atribuição por desestruturação de objeto {}
function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

let obj = {
    nome: 'Diego',
    sobrenome: 'Rodrigues',
    idade: 39
}
funcao(obj);


// atribuição por desestruturação de array []
function funcaoArray([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}

let lista = ['Diego','Rodrigues',39]
funcaoArray(lista);

// podemos utilizar o rest operator (...)para guardar os valores
// a mais de argumentos da função
// o rest operator tem que ser sempre o último parâmetro da função

const conta = function (operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+')acumulador += numero;
        if (operador === '-')acumulador -= numero;
        if (operador === '*')acumulador *= numero;
        if (operador === '/')acumulador /= numero;
    }
    console.log(acumulador);
};

conta('+', 0, 20,30,40,50);

// mesmo com o rest operator temos o arguments em funções
// anonimas. Porém quando usamos arrow function, o arguments não
// é mais acessível.

// Rest operator funciona em qualquer função
// util para enviar parametros indeterminados para uma função
const conta2 = (operador,...args) => {
    console.log(operador, args);
};

conta2('+', 0, 20,30,40,50);

// função que recebe um número indefinido de argumentos
function operacoes(operador, acumulador, ...numeros){
    switch (operador){
        case '+':
            for(let numero of numeros){
                acumulador += numero;
            }
            console.log(acumulador);
            break;
        case '-':
            for(let numero of numeros){
                acumulador -= numero;
            }
            console.log(acumulador);
            break;
        case '/':
            for(let numero of numeros){
                acumulador /= numero;
            }
            console.log(acumulador);
            break;
        case '*':
            for(let numero of numeros){
                acumulador *= numero;
            }
            console.log(acumulador);
            break;
        default:
            console.log('Valor inválido');
    }
}

operacoes('-', 0, 20,30,50,50)