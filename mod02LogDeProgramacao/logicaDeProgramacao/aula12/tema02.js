/*
Aula 12 - forEach

O método forEach em JavaScript é uma função nativa dos arrays que permite 
percorrer cada elemento da lista e executar uma ação definida em uma função 
de callback. Ele é muito usado para iterar sobre arrays quando não é necessário 
interromper o loop (já que não suporta break ou continue).

Sintaxe básica
array.forEach(function(elemento, indice, array) {
  // código a ser executado
});

Parâmetros do callback
elemento → o valor atual do item que está sendo processado.
indice (opcional) → a posição do elemento dentro do array.
array (opcional) → o próprio array em que o forEach está sendo aplicado.

Não retorna um novo array → diferente de métodos como map, filter ou reduce.
Sempre percorre todos os elementos → não pode ser interrompido com break ou continue.
Mais legível que um for clássico em situações onde só é preciso executar algo para cada item.


*/

// Exemplo Básico
const numeros = [10, 20, 30];

// numeros.forEach(function(valor, indice, array) {
//   const somaArray = array.reduce((acc, n) => acc += n);
//   const porcentagem = valor / somaArray;
//   // const arrayPorcentagem = []
//   // arrayPorcentagem.push(porcentagem);
//   console.log(`Índice: ${indice}, Valor: ${valor}, Valor ao quadro ${valor**2}, ${porcentagem.toFixed(2)}`);
// });

console.log(numeros);

//Com arrow function

// const frutas = ["maçã", "banana", "uva"];

// frutas.forEach((fruta) => {
//   console.log(fruta.toUpperCase());
// });

// console.log(frutas);

// Exemplo prático
const produtos = [
  { nome: "Notebook", 
    preco: 3000,
    desconto: function(preco){
      const novoPreco = preco - (preco/10)
      return (novoPreco);
    }
  
  },
  { nome: "Celular", preco: 1500 },
  { nome: "Mouse", preco: 100 }
];

produtos.forEach((p) => {
  const desconto = p.desconto
  console.log(`${p.nome} custa R$${p.preco}, Preço com desconto:${desconto}`);
});

// // Esse tipo de abordagem é muito útil para percorrer coleções quando o 
// // objetivo é apenas executar efeitos colaterais (como imprimir, salvar em 
// // banco de dados ou atualizar DOM).

