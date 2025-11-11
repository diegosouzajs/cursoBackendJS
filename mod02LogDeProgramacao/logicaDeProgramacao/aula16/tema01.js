/*
Aula 16 - Estrutura de repetição

For clássico

O for clássico é usado quando sabemos quantas vezes queremos que um bloco de 
código seja executado. Ele é ideal para percorrer arrays, contar iterações ou 
executar instruções repetidamente com um controle de início, condição e incremento

Estrutura básica

for (inicializacao; condicao; incremento) {
  // bloco de código a ser repetido
}
inicializacao → normalmente define e inicia uma variável de controle 
(ex.: let i = 0).
condicao → expressão que será avaliada antes de cada iteração; enquanto for 
true, o loop continua.
incremento → operação feita ao final de cada iteração (ex.: i++ ou i+=2).

O for clássico não itera diretamente sobre objetos em JavaScript porque ele 
foi projetado para trabalhar com índices numéricos, não com chaves nomeadas.

Break e continue

O break é usado para interromper imediatamente a execução de um loop (for, while, do...while) ou de um switch.
Quando chamado, o controle sai do loop, e o código continua após o bloco de repetição.

O continue interrompe a iteração atual do loop, mas não encerra o loop.
O loop continua com a próxima iteração.
Útil para pular certos valores sem sair completamente do loop.

*/

// For clássico
const numeros = [10,25,30,36,45,89];
const numeros2 =[];

// o i representa o index e não o valor
// o incremento pode ter valores diferentes
// exemplo i+=2 -> incrementa o i de 2 em 2
for (let i = 0; i < numeros.length; i++){
    // o que acha que será impresso?
    // console.log(i);
    // e agora?
    // ou seja, o i representa o índice dentro do array;
    if(numeros[i] === 36) continue;
      ; //break interrompe o laço
    console.log(numeros[i]);
    // if(numeros[i] === 36) continue; // salta a iteração
    // console.log(`O valor contido no índice ${i} é ${numeros[i]}`);
}

console.log(numeros);

// for (let n = 0; n < numeros.length; n++){
//   if(numeros[n] === 36){
//     numeros2.push('Novo número: 89');
//   }else{
//     numeros2.push(numeros[n]);
//   }
// }

// console.log(numeros2);