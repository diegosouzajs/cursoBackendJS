/* 
Aula 13 - map, filter e reduce

1 - map()
    Cria um novo array a partir do array original.
    Aplica uma função a cada elemento, retornando o resultado dessa função.
    O array original não é modificado.
    Quando usar: quando precisar transformar cada elemento de um array.
    
    
    */

// o map dispensaria a necessidade de se gerar uma lista nova e adicionar os 
// elementos convertendo para maíusculo.
const maca = 'maçã';
const banana = 'banana';
const melao = 'melão';
const frutas2 = [];

frutas2.push(maca.toUpperCase());
frutas2.push(banana.toUpperCase());
frutas2.push(melao.toUpperCase());

console.log(frutas2)


// poderia utilizar uma lista já elaborada
const frutas = ['maçã','banana','melão','jaca','morango','uva','maçã'];

// ao executar o map, a função de callback itera sobre todos os itens do array
// realiza a operação estabelecida e retorna um novo array com a mesma
// quantidade de itens
const frutasMaiusculas = frutas.map((fruta) => {
    const fruit = fruta.toUpperCase(); // converte a string para maiúsculo
    if (fruit === 'MAÇÃ')  return 'É maçã'; // condicional para substituir a 
    // ocorrência de MAÇÃ por É maçã
    return fruit;
});

console.log(frutasMaiusculas);
console.log(frutas);

function dobrado(num){
    return num * 2;
}

// também pode ser usado em substituição a adoção de um for
const numeros = [4, 5, 9, 8];
// console.log(dobrado(numeros[0]));

const numDobrados = []
for(num of numeros){
    numDobrados.push(dobrado(num));
}
console.log(numDobrados);

// desta forma simplifica a operação e torna o código mais legível.
const dobrados = numeros.map(numero =>  numero * 2);
console.log(dobrados);

// teste com objeto
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

// lista apenas os nomes dos alunos
const nomes = alunos.map(aluno =>{
    return aluno.nome
}); 

// lista apenas as notas
const notas = alunos.map(aluno =>{
    return aluno.nota
}); 

console.log('Alunos',nomes);
console.log('Notas',notas);