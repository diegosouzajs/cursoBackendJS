/* 
Aula 13 - map, filter e reduce

2 - filter()
    Cria um novo array apenas com os elementos que satisfazem uma condição (retornam true).
    Também não modifica o array original.
    Quando usar: quando precisar selecionar elementos de um array com base em uma regra.
*/

const numeros = [1, 5, 6, 9, 8, 2, 7, 13, 8, 9, 25, 36,2, 90, 88];

// ao aplicar o filter, somente os itens que atenderem a condição estabelecida
// serão incluídos na nova lista
const numerosPares = numeros.filter((num) => num % 2 === 0);

console.log(numeros);
console.log(numerosPares);

const alunos = [
  { nome: "Ana", nota: 3 },
  { nome: "Bruno", nota: 5 },
  { nome: "Clara", nota: 2 },
  { nome: "Fernanda", nota: 7},
  { nome: "Bruna", nota: 2 },
  { nome: "Carla", nota: 9 },
  { nome: "José", nota: 10 },
  { nome: "Gomes", nota: 3 },
  { nome: "Fernanda", nota: 4 },
];

// retornará apenas o itens que satisfazerem a condição
const notasPares = alunos.filter(aluno => aluno.nota % 2 === 0);

console.log('Notas pares',notasPares);


