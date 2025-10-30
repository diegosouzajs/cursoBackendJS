/* 
Aula 13 - map, filter e reduce

3 - reduce()
    O método reduce() é utilizado para reduzir (ou acumular) todos os elementos 
    de um array em um único valor, aplicando uma função acumuladora que processa
    cada elemento sequencialmente.
    Diferente de map() e filter(), que retornam novos arrays, o reduce() pode 
    retornar qualquer tipo de valor — um número, uma string, um objeto ou até 
    mesmo outro array — dependendo da lógica definida.
*/

function somaPar([...numeros]){
    let soma = 0
    for (const n of numeros){
        if(n % 2===0) soma += n;
    }
    return soma;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Total:',somaPar(numeros));

// somar valores de uma lista

// pode ser utilizado para substituir uma função que recebe um número
// indefinido de parâmetros
const somaPares = numeros
                  .filter(numero => numero % 2 === 0)
                  .reduce((acum, valor) => acum + valor,0)

const soma = numeros.reduce((acum, valor) => acum + valor);

console.log('Total da soma dos números pares:',somaPares);
console.log('Total da lista:',soma);


// calcular média 
const notas = [8, 7, 10, 9];

const media = notas.reduce((acum, nota) => acum + nota, 0) / notas.length;

console.log('Média das notas',media); // 8.5

// contar ocorrência de elementos
const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

// utilizo o reduce para percorrer todos os itens do array,
// e verificar quantas vezes cada item ocorre
const contagem = frutas.reduce((acum, fruta) => {
  // console.log(fruta);
  // console.log(acum[fruta]);
  acum[fruta] = (acum[fruta] || 0) + 1;
  // console.log(acum[fruta]);
  return acum;
}, {});

console.log('Quantidade de cada fruta na lista',contagem);


const arrays = [[1, 2], [3, 4], [5]];

const concatenado = arrays.reduce((acum, atual) => acum.concat(atual), []);

console.log('Concatenação das litas',concatenado); // [1, 2, 3, 4, 5]

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


// método reduce para separar aprovados e reprovados
const situacao = alunos.reduce((acc, aluno) => {
  // se ainda não existir as chaves, inicializa
  if (!acc.aprovados) acc.aprovados = [];
  if (!acc.reprovados) acc.reprovados = [];

  // separa conforme a nota
  if (aluno.nota > 6) {
    acc.aprovados.push(aluno);
  } else {
    acc.reprovados.push(aluno);
  }

  return acc; // importante: sempre retornar o acumulador
}, {}); // acumulador começa como um objeto vazio

console.log(situacao);