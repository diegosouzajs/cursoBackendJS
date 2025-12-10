/*
Funções geradoras

São diferentes das funções tradicionais por possuirem um recurso que 
é quase um pause no código em determinado local (lasy evaluation).
É uma avaliação preguiçosa bastante interessante para a performace dos 
sistemas que utiliza a metodologia.

Ela também pode utilizar return mas nós devemos usar o yield
O yield retorna o primeiro valor cadastrado. Na proxima chamada, ele retorna o 
segundo e por fim, retorna o próximo té que a função seja concluída

O return retorna o valor e encerrará no ponto em que ele foi executado

são bem mais ou menos diferentes das funções normais que é um recurso que é 
quase pausar o código. 
*/

function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1(); // ver o tipo de objeto
const g3 = geradora1();

console.log(g1.next().value);
console.log(g1.next());
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next());


console.log(g1); // exibe o tipo do retorno
console.log(g1.next()); // chama o próximo item e exibe um objeto como retorno da chamada (yield)
console.log(g1.next().value); // exibe o valor yield do retorno
console.log(g1.next().value); // exibe o segundo valor
console.log(g1.next().value); // exibe o terceiro valor
// exibe um objeto com o valor do done como true indicando que não há mais chamadas yield
console.log(g1.next()); 
console.log();
// o for é capaz de percorrer a função geradora e executar as chamadas dela
// sem entrar em um laço infinito
// for(let valor of g1){
//     console.log(valor);
// }

console.log();
//gerador infinito
function* geradora2(){
    let i = 0;
    // o while aqui é infinito, mas não somente será executado quando a função geradora for executada
    while(true){
        yield i;
        i++
    }
}

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log();

// gerador que delega função para outro gerador

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3(); // delegar parte da execução para a geradora3()
    yield 3;
    yield 4;
    yield 5;
    yield 10;
}

// const g4 = geradora4();
// for (let valor of g4){
//     console.log(valor);
// }
// console.log();

//função geradora
function* geradora5(){
    yield function(){
        console.log('Vim do y1');
    }

    yield function(){
        console.log('Vim do y2');
        const g4 = geradora4();
        console.log(g4.next().value);
    }
}

// sempre que chamar a função geradora, ela retornará um valor no yield
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;


// func1();
// func2();
// console.log(func2());
// console.log(func2());



// function* calculadora(n, m){
//     yield `${n} + ${m} = ${n + m}`;
//     yield `${n} - ${m} = ${n - m}`;
//     yield `${n} x ${m} = ${n * m}`;
//     yield `${n} / ${m} = ${(n / m).toFixed(2)}`;
// }

// const calc = calculadora(15,2);

// console.log(calc);
// console.log(calc.next().value);
// console.log(calc.next().value);
// console.log(calc.next().value);
// console.log(calc.next().value);

