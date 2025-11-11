/* 
Você recebeu uma lista de objetos representando alunos e suas respectivas notas 
em uma disciplina.
Seu objetivo é analisar os resultados e obter informações estatísticas 
utilizando métodos de arrays (filter, map, reduce).

const alunos = [
    { nome: 'Diego', nota: 9.0 },
    { nome: 'Ana', nota: 6.5 },
    { nome: 'Lucas', nota: 7.2 },
    { nome: 'Mariana', nota: 8.3 },
    { nome: 'João', nota: 5.9 },
];

Filtrar apenas os alunos aprovados, considerando nota maior ou igual a 7.
Gerar um novo array contendo apenas as notas dos alunos aprovados.
Calcular a média das notas dos aprovados.
Exibir no console:
A lista dos aprovados;
As notas dos aprovados;
A média final com duas casas decimais.
*/
// cada objeto tem duas propriedades
// nome e nota

const alunos = [
    { nome: 'Diego', nota: 9.0 },
    { nome: 'Ana', nota: 7.5 },
    { nome: 'Lucas', nota: 7.2 },
    { nome: 'Mariana', nota: 8.3 },
    { nome: 'João', nota: 5.9 },
];

// Filtrar apenas os aprovados (nota >= 7) usando filter
const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log('Lista de aprovados: ',aprovados);

// Extrair apenas as notas dos aprovados usando map

const notasAprovados = aprovados.map(aprovado => aprovado.nota);
console.log('Notas dos aprovados: ',notasAprovados);

// Calcular a média das notas usando reduce

const media = notasAprovados.reduce((acc, nota) => acc+nota,0) / notasAprovados.length;
console.log('Nota média dos aprovados:',media.toFixed(2));
console.log('------------------------');


// // Filtrar apenas os aprovados (nota >= 7)

// const aprovados = alunos.filter(aluno => aluno.nota >= 7);
// console.log('Lista de aprovado:', aprovados);

// // Extrair apenas as notas dos aprovados
// const notas = aprovados.map(aprovado => aprovado.nota );
// console.log('Notas dos aprovados: ', notas)

// // Calcular a média das notas usando reduce

// const media = notas.reduce((acum, nota) => (acum += nota), 0) /notas.length;

// console.log('Média de notas dos aprovados', media.toFixed(2));
// const nome = 'Diego'
// console.log(nome.indexOf('e'));

// console.log('Aprovados',aprovados);
// console.log('Notas dos aprovados',notasAprovados);
// console.log(`Média dos aprovados: ${media.toFixed(2)}`);

// método avançado para calcular média
console.log('---------------------------------')
const mediaNotas = alunos
                .filter(aluno => aluno.nota >=7)
                .map(aluno => aluno.nota)
                .reduce((acum, nota, index, notas) =>{
                    acum += nota; // acumula o total das notas
                    
                    // efetua a divisão apenas na última iteração
                    if (index === notas.length - 1){
                        return acum / notas.length;
                    }
                    return acum;
                    
                }, 0);

console.log(`Média dos aprovados: ${mediaNotas.toFixed(2)}`);