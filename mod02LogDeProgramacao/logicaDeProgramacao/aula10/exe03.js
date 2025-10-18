/* 
Desenvolva uma função que receba um número inteiro e determine se ele é par ou 
ímpar.O resultado deve ser impresso no console informando se o número 
é par ou ímpar.
*/


function parOuImpar(numero){
    if(numero === 0){
        return('Número é 0(ZERO)');
    }else if(numero % 2=== 0){
        return('Número é par');
    }else{
        return('Número é impar');
    }
}

console.log(parOuImpar(11));
console.log(parOuImpar(20));
console.log(parOuImpar(0));
console.log(parOuImpar("0"));