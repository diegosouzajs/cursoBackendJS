/*
Aula 17 - Temporizadores em JavaScript: setTimeout e setInterval

JavaScript possui funções nativas para trabalhar com execução assíncrona e controle de tempo:
setTimeout → executa uma função apenas uma vez, após um tempo definido.
setInterval → executa uma função repetidamente, em intervalos de tempo definidos.
Ambos funcionam de forma assíncrona, ou seja, não bloqueiam a execução do restante do código.

*/

//setTimeout
// Usado para executar uma função depois de um tempo (em milissegundos).

console.log("Início");

setTimeout(() => {
    console.log("Executado após 2 segundos");
}, 2000);

console.log("Fim");

// Útil para:
// atrasar uma execução,
// criar efeitos visuais,
// simular operações demoradas.

// setInterval
// Usado para executar uma função repetidamente a cada intervalo de tempo definido (em milissegundos).

let contador = 0;

const intervalo = setInterval(() => {
  contador++;
  console.log("Contagem:", contador);

  if (contador === 5) {
    clearInterval(intervalo); // encerra o intervalo
    console.log("Intervalo parado");
  }
}, 1000);

// Útil para:
// atualizações de tela,
// animações,
// relógios ou cronômetros.

// Cancelando temporizadores
clearTimeout(id) //→ cancela um setTimeout.
clearInterval(id) //→ cancela um setInterval.

const timeout = setTimeout(() => {
    console.log("Não vai executar");
}, 3000);

clearTimeout(timeout); // cancelado antes de rodar

