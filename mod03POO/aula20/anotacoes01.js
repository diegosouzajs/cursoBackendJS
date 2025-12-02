
/*
Função de callback
// IIFE -> Immediately invoked function expression

Funções que são executadas quando uma determinada ação ocorre.

Em desenvolvimento web, as vezes temos que fazer ações que não
tem como controlarmos o custo de tempo que ela demandará.

Para resolver esse tipo de problema, precisamos que as funções
sejam executadas na ordem estipulada

quando encadeamos várias funções de callback encadeadas, criamos o
callback hell

Callback é literalmente a chamada para alguma coisa, quando algo
encerra
*/


// function cumprimentar(nome, callback){
//     console.log('Olá',nome);
//     callback();
// }

// function despedir(){
//     console.log('Até logo!');
// }


// cumprimentar('Diego',despedir);
// console.log('Opa');

function rand(max=3000, min=1000){
    const n = Math.random() * (max-min) + min;
    return Math.floor(n);
}

function conectarDB(callback) {
    setTimeout(function () {
        console.log('conectar banco de dados')
        if(callback) return callback();
    }, rand());
}

function consultarDados(callback){
    setTimeout(function(){
        console.log('Consultando dados');
        if(callback) return callback();
    },rand());
}


function listarDados(callback){
    setTimeout(function(){
        console.log('Listando dados');
        if(callback) return callback();
    },rand());
}   

// chamada das funções
// observe que, devido a função rand, a chamada não respeita ordem
conectarDB();
consultarDados();
listarDados();

// callback hell
// conectarDB(function(){
//     consultarDados(function(){
//         listarDados(function (){
//             console.log('Finalizando a solicitação');
//         })
//     })
// })


// callback mais organizado (substitui o callback hell)


conectarDB(connectCallback);

function connectCallback(){
    consultarDados(consultCallback)
}

function consultCallback(){
    listarDados(listCallback);
}
function listCallback(){
    console.log('Operação realizada com sucesso');
}