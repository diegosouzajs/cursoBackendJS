/* 
Aula 19 - Clousure

Um closure é a combinação de uma função com o escopo léxico em que ela foi criada.
Isso significa que a função “lembra” as variáveis do ambiente onde nasceu, 
mesmo que seja executada fora desse ambiente.

Em outras palavras:
Um closure permite que uma função acesse variáveis externas ao seu corpo,
mesmo após a função externa ter sido executada.

Por que os Closures existem?
Closures existem porque o JavaScript usa escopo léxico.
Quando uma função é criada, ela “captura” o contexto (as variáveis e funções 
disponíveis naquele momento).
Essa captura é mantida na memória, possibilitando que a função interna use 
esses dados mais tarde.

*/


// Closure está relacionado ao escopo lexico da função
// é a habilidade da função acessar seu escopo lexico
function retornaFuncao(){
    const nome = 'Diego';
    return function(){ // essa função tem acesso a três escopos o dela, o do pai e o global
        return nome;
    }
}

const funcao = retornaFuncao('Diego');
const funcao2 = retornaFuncao('Saul');

// ver isso no navegador
console.dir(funcao); 
console.dir(funcao2); 
console.log()
console.log(funcao(), funcao2());
console.log()

function retornaNomeCompleto(nome){
    return function (sobrenome){
        return `${nome} ${sobrenome}`;
    }
}

const p1 = retornaNomeCompleto('Diego');

console.log();
console.log(p1('Souza'));
console.log(p1('Rodrigues'));
console.log(p1('Moura'));
console.log();


// function multiplica(n){
//     return function(num){
//         return n * num;
//     }
// }

// const duplicar = multiplica(2);
// const triplicar = multiplica(3);

// console.log(duplicar(5));
// console.log(triplicar(5));