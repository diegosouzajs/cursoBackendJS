/*
Crie um programa que percorra um array de números inteiros e exiba apenas os 
números positivos, interrompendo o loop se encontrar o número 0.
const numeros = [3, -5, 7, 10, -2, 0, 12, 8];
*/

const numeros = [3, -5, 7, 10, 0, -2, 12, 8];
let i = 0;

while(i < numeros.length){
  if(numeros[i] > 0){
    console.log(numeros[i]);
  }else if(numeros[i] === 0){
    console.log('Número zero (0) encontrado. Saíndo do laço');
    break;
  }
  i++;
}



console.log(Number.MAX_SAFE_INTEGER);

const num = Number.MAX_SAFE_INTEGER;












// while (i < numeros.length) {
//   const num = numeros[i];
  
//   if (num === 0) {
//     console.log("Número 0 encontrado. Encerrando verificação...");
//     break; // interrompe o loop completamente
//   }

//   if (num < 0) {
//     i++; // evita loop infinito
//     continue; // pula para a próxima iteração
//   }

//   console.log("Número positivo:", num);
//   i++;
// }