/*
Exercício – Manipulação de notas com desestruturação e forEach

Você recebeu uma lista de alunos e suas respectivas notas em três avaliações.
Utilize atribuição por desestruturação para extrair os valores das notas e 
calcule a média de cada aluno usando o método forEach().
Ao final, exiba o nome do aluno, suas notas e a média, formatada com 
duas casas decimais.

Passos
Crie um array chamado alunos, onde cada elemento seja outro array com a estrutura:
[nome, nota1, nota2, nota3]
Utilize o exemplo abaixo:
// Lista de alunos: [nome, nota1, nota2, nota3]
const alunos = [
  ["Ana", 8.5, 7.0, 9.0],
  ["Bruno", 6.0, 5.5, 7.0],
  ["Carla", 9.0, 9.5, 8.5],
  ["Diego", 7.5, 8.0, 7.0]
];

Use o método forEach() para percorrer o array de alunos.
Dentro da função de callback do forEach(), utilize atribuição por 
desestruturação para separar o nome e as notas.
Calcule a média das três notas.
Exiba os resultados formatados no console.
*/

// Lista de alunos: [nome, nota1, nota2, nota3]
// um array que contem 4 arrays
const alunos = [
  ["Ana", 8.5, 7.0, 9.0],
  ["Bruno", 6.0, 4, 7.0],
  ["Carla", 9.0, 9.5, 8.5],
  ["Diego", 7.5, 4, 7.0]
];
// console.log(alunos[0].length);

alunos.forEach((aluno) => {
    const [nome, nota1, nota2, nota3 ] = aluno;

    const media = (nota1 + nota2 + nota3) / 3

    const situacao = media >= 7 ? 'Aprovado':'Reprovado';

    console.log('Nome do aluno: ', nome);
    console.log('Notas: ', nota1, nota2, nota3);
    console.log('Média das notas: ', media.toFixed(2));
    console.log('Situação do aluno: ', situacao);
    console.log('-----------------------');

})






















// //executo o forEach no array principal
// alunos.forEach((aluno) => {
//   // realizo a atribuição por desestruturação em cada array que está
//   // dentro do array principal
//   const [nome, n1, n2,n3] = aluno;
  
//   // calculo a média
//   const media = ((n1+n2+n3)/3).toFixed(2);

//   //utilizo operador ternário para indicar a situação do aluno
//   const situacao = media >= 6? 'Aprovado':'Reprovado';

//   // imprimo o resultado
//   console.log('Aluno:',nome);
//   console.log(`Notas: ${n1}, ${n2}, ${n3}`);
//   console.log('Média:',media);
//   console.log('Situacao:',situacao);
//   console.log('-------------------------');
// })