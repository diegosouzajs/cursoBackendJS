/* 

Aula 10 - If, else if e else dentro da função

Dentro de funções, muitas vezes não precisamos do else.
Isso acontece porque o return já encerra a execução da função.
*/

function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarIdade(20));
console.log();


// Ele pode ser reescrito da seguinte maneira
// O fluxo é o mesmo. O código fica mais limpo e legível.
 
function verificarIdadeSemElse(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    }
    return "Menor de idade";
}

console.log(verificarIdadeSemElse(17));

// mais simplificada ainda
// quando o if só tem uma linha de instrução, podemos colocar tudo na mesma linha
function verificarIdadeMaisSimples(idade) {
    if (idade >= 18) return "Maior de idade";
    return "Menor de idade";
}

console.log(verificarIdadeMaisSimples(20));