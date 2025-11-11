// /*
// Aula 16 - while – Estrutura de repetição

// O while executa um bloco de código enquanto uma condição for verdadeira.
// A condição é verificada antes da execução do bloco.
// Se a condição inicial for falsa, o bloco pode nem ser executado.

// Estrutura básica
// while (condicao) {
//   // bloco de código
// }

// Exemplo:
// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// */

// const numeros = [4,5, 3, 6, 9, 4, 8, 9, 25, 0, 2, 1];

// let i = 1


// // i representa o indice do item no iteral
// // while (i < numeros.length){
// //     if (numeros[i] % 2 === 0){
// //         console.log(`${numeros[i]} é par`);
// //     }else{
// //         console.log(numeros[i]);
// //     }
// //     i++;
// // }

// let count = 0

// while (count < 20){
//     if (numeros[count] % 2 === 0){
//         console.log(`${numeros[count]} é par`);
//     }else if(count !== numeros.length){
//         console.log(numeros[count],'é impar');
//     }else{
//         break;
//     }
//     count++;
// }

// // console.log(numeros[15]);
// const funcionario = {
//     nome: 'Diego',
//     sobrenome: 'Rodrigues',
//     cargo: 'Desenvolvedor',
//     empresa:'IFMG',
//     idade: 39,
//     email: 'diego.souza@ifmg.edu.br',
//     salario: 'mixaria',
//     admissao: '29/02/2011',
//     endereco: {
//         rua: 'Rua x',
//         numero: 210,
//         bairro: 'Centro'
//     },
//     telefone: '(31)3549-2100'
//     // chave: 'Oi'
// };


// do {
//     funcionario.telefone = '(31)3559-2155';
// }while (!funcionario.telefone)
    


const numeros = [10, 35, 67, 11, 90, 38];

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// };

let i = 0;


// ctrl + c interrompe a execução do código
while(i < numeros.length){
    i++;
    console.log(numeros[i]);
}

// console.log(Number.MAX_SAFE_INTEGER);