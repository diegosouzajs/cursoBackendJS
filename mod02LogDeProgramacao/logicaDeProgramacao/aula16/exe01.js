/* 
Exercício – Números Primos entre 0 e 1000

Crie um programa em JavaScript que identifique e exiba todos os números primos existentes no intervalo de 0 a 1000.
O programa deve:

    Utilizar um laço de repetição (for) para percorrer os números entre 0 e 1000.
    Armazenar todos os números primos encontrados em um array chamado 
    numerosPrimos.
    Exibir o conteúdo do array no console, com todos os números primos 
    identificados.

💡 Dica: Um número é considerado primo quando é maior que 1 e divisível apenas por 1 e por ele mesmo.

*/

const numerosPrimos = []

function ehPrimo(numero){
    if (numero <= 1) return false;

    // precisamos verificar até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0) return false
    }
    return true;
}

for (let n = 0; n <= 1000; n++){
    if(ehPrimo(n)){
        numerosPrimos.push(n);
    }
}

console.log('Números primos entre 0 e 1000');
console.log("----------------------------------")
console.table(numerosPrimos);