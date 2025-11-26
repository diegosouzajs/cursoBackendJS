/* 
Aula 19 - Retorno de funções

return -> Retorna um valor da função executada e encerra a função
Por default, funções sempre retornam undefined, caso o return não seja 
especificada.

Não confunda console.log com return
Console.log apenas exibi o que estou mandando
return retorna o valor e podemos efetuar alguma ação com ele

*/

function soma(a, b){
    return a + b;
}

document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = criaPessoa('Diego','Rodrigues');
const p2 = {
    nome: 'Joao',
    sobrenome: 'oliveira'
};

console.log(typeof(p1));
console.log(typeof(p2));

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

function duplica(n){
    return n * 2;
}

function triplica(n){
    return n * 3;
}

function quadruplica(n){
    return n * 4;
}


// exemplo de clousure, retorna a função sem executa-la
// enviamos um valor que após a chamada da função, pode retornar outra coisa 
// Basicamente, as funções abaixo "lembram" o que foi feito na função anterior

// As funções acima podem ser substituida por
function criaMultiplicador1(multiplicador){
    // multiplicador
    function multiplicacao(n){
        return n * multiplicador;
    }
    return multiplicacao;
}

// ou assim
function criaMultiplicador2(multiplicador){
    // busca o multiplicador no escopo acima
    return function(n){
        return n * multiplicador;
    };
}
// nesta chamada eu passo o argumento que desejo utilizar como operador
const duplica = criaMultiplicador1(2); 
const triplica = criaMultiplicador1(3);
const quadriplica = criaMultiplicador1(4);

// nesta etapa eu informo por quanto eu quero multiplicar o valor passado na 
// chamada anterior
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));