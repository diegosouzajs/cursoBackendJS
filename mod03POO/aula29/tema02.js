/*
Métodos úteis para Promises
 - Promise.all -> recebe um array com promises ou valores já resolvidos
    e entrega uma promessa só com valores dentro de um array 
 - Promise.race -> recebe várias promessa e a primeira que é resolvida é entregue
 - Promise.resolve -> entrega uma Promise já resolvida
 - Promise.reject -> rejeita a promise e apresenta o erro

*/

function rand(min, max) {
    min *= 1000;
    max *= 3000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve('Passei na promise ' + msg.toUpperCase());
            return;
        }, tempo);
    });
}

// Promise.all
const promises = [
    // 'Primeiro valor', //não é uma promessa semper será entregue primeiro
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    // esperaAi(1000, 1000), 
    // 'Outro valor'
];

// Promise.all(promises)
// .then(valor => {
//     console.log(valor);
// })
// .catch(e => console.log(e));

// //Promise.race
// Promise.race(promises)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(e => console.log(e));

// // Promise.resolve
// // suponha que existe uma função que baixe uma página
// function baixaPagina(){
//     const emCache = true;
//     if(emCache){
//         return Promise.resolve('Página em cache');
//     }else{
//         return esperaAi('Baixei a página', 3000);z
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina);
//     })
//     .catch(e => console.log(e));

// Promise.reject
// suponha que, caso eu tenha a página em cache e por isso eu rejeito 
// minha promise
function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.reject('Página em cache');
    }else{
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:',e));
