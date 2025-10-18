/* 
Elabore uma função que receba um número como parâmetro e determine se ele é 
positivo, negativo ou zero.  A função deve imprimir o resultado no console 
informando a classificação do número.
*/

const numero = 10;

function verificaNumero(numero){
    if (numero === 0) return `O número ${numero} é zero`;
    if(numero > 0) return `O número ${numero} positivo`;
    return `O número ${numero} é negativo`;
}

console.log(verificaNumero(numero));
console.log(verificaNumero(0));
console.log(verificaNumero(-5));

