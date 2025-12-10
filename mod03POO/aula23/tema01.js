/* 
Funções Recursivas

Uma função recursiva é uma função que chama a si mesma para resolver 
partes menores de um mesmo problema.
Esse processo continua até que seja atingida uma condição de parada, 
chamada de caso base, que interrompe as chamadas recursivas.

Em outras palavras:
Recursão é uma técnica onde o problema é resolvido dividindo-o em versões 
menores dele mesmo.

Toda recursão precisa de duas partes fundamentais:

  Caso base → define quando a recursão deve parar (evita loop infinito).
  Chamada recursiva → a função chama a si mesma com uma versão reduzida 
  do problema.

Fluxo típico:

A função é chamada.
Verifica-se se o problema é simples o bastante para ser resolvido 
diretamente (caso base).
Caso contrário, a função chama a si mesma (chamada recursiva) com um 
problema menor.
As chamadas se empilham e, quando o caso base é atingido, começam a retornar 
os resultados, desempilhando as execuções.
*/

function contarAteN(inicio, fim){
    if(inicio > fim) return; // caso base -> interrompe a função ao chegar em 10  
    console.log(inicio);
    inicio++;
    contarAteN(inicio, fim);
};

// contarAteN(0, 10);

//Fatorial de um número
function fatorial(n) {
  if (n === 0 || n === 1) return 1; // Caso base
  return n * fatorial(n - 1);       // Chamada recursiva
}

console.log('Fatorial de 5: ',fatorial(5)); // Saída: 120

// Soma dos elementos de um vetor
function somaVetor(vetor) {
  if (vetor.length === 0) return 0;          // Caso base
  return vetor[0] + somaVetor(vetor.slice(1)); // Chamada recursiva
}

console.log('Soma do vetor',somaVetor([1, 2, 3, 4, 5])); // Saída: 15



