/* 
Cenário: análise de notas de estudantes

Suponha que temos uma lista de alunos com suas respectivas notas em uma
disciplina.
Queremos calcular a média das notas dos alunos aprovados, considerando apenas 
aqueles com nota ≥ 7.
*/
// cada objeto tem duas propriedades
// nome e nota

const alunos = [
  { nome: "Ana", nota: 9 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 8 },
  { nome: "Diego", nota: 7.5 },
  { nome: "Fernanda", nota: 10 }
];

// Filtrar apenas os aprovados (nota >= 7)

const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log('Lista de aprovado:', aprovados);

// Extrair apenas as notas dos aprovados
const notas = aprovados.map(aprovado => aprovado.nota );
console.log('Notas dos aprovados: ', notas)

// Calcular a média das notas usando reduce

const media = notas.reduce((acum, nota) => (acum += nota), 0) /notas.length;

console.log('Média de notas dos aprovados', media.toFixed(2));
const nome = 'Diego'
console.log(nome.indexOf('e'));

console.log('Aprovados',aprovados);
console.log('Notas dos aprovados',notasAprovados);
console.log(`Média dos aprovados: ${media.toFixed(2)}`);

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