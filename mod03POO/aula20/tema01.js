/* 
Função de callback

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

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
// conexão com a base de dados
function f1(callback){
    // time out aleatório
    const tempo = rand()
    // console.log(tempo);
    setTimeout(function(){
        console.log('f1');        
        if (callback) callback();
    }, tempo); 
       
}
//consulta
function f2(callback){
    // time out aleatório
    const tempo = rand()
    // console.log(tempo);
    setTimeout(function(){
        console.log('f2')
        if (callback) callback();
    }, tempo);    
}

// edição
function f3(callback){
    // time out aleatório
    const tempo = rand()
    // console.log(tempo);
    setTimeout(function(){
        console.log('f3')
        if (callback) callback();
    }, tempo);    
}


// f1();
// f2();
// f3();
// callback hell
f1(function (){
    f2(function(){
        f3(function (){
            console.log('Olá mundo!');
        })
    })
})

// f1(f1Callback);

// function f1Callback(){
//     f2(f2Callback);
// }

// function f2Callback(){
//     f3(f3Callback);
// }

// function f3Callback(){
//     console.log('Consulta realizada');
// }

// // async function consulta(){
// //     const item = await 

// // }

// console.log('Oi');