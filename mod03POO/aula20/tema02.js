/* 
Funções Imediatas
Funções autoinvocadas

IIFE -> Immediately invoked function expression

*/

function qualquerCoisa(){
    // codigo dentro da função
    console.log('Qualquer coisa')
}


// chamada para a função
qualquerCoisa();

// ou 
// usado para proteger o código e não permitir que toque no 
// escopo global

(function (idade, peso, altura){
    const sobrenome = 'Rodrigues';
    function nomeCompleto(nome){
        return nome + ' '+ sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Diego'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(39, 80, 1.72);

const nome = 'Qualquer coisa'