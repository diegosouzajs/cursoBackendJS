/*
Crie um pequeno sistema para gerenciar tarefas utilizando função construtora. 
Cada tarefa deve ter:
  título
  descrição
  status (inicialmente "pendente")

Parte 1 – Criar a Função Construtora
  Desenvolva uma função construtora chamada Tarefa que receba titulo e descricao 
  como parâmetros.
  Dentro da função, defina o atributo status com valor padrão "pendente".
  Exemplo de uso esperado:

    const t1 = new Tarefa("Ler artigo", "Ler o artigo sobre otimização em IA");
    console.log(t1.status); // "pendente"

Parte 2 – Adicionar Métodos ao Prototype

Implemente três métodos no Tarefa.prototype:
  concluir()
Altera o status para "concluída".
  resumir()
Retorna uma string no formato:
  "Título: <titulo> | Status: <status>"
  alterarDescricao(novaDescricao)
Atualiza o campo descricao.

Crie três instâncias de Tarefa e:
  Altere a descrição de uma delas.
  Conclua outra.
  Exiba o resumo de todas as tarefas utilizando o método resumir().

*/
// função construtora
function Tarefa(titulo, descricao){
  this.titulo = titulo;
  this.descricao = descricao;
  this.status = 'pendente';
}

//incluindo método no prototype
Tarefa.prototype.concluir = function(){
  this.status = 'concluído';
}

Tarefa.prototype.resumo = function(){
  return (`Título: ${this.titulo} | Status: ${this.status}`);
}

Tarefa.prototype.alteraDescricao = function(novaDescricao){
  this.descricao = novaDescricao;
}

// criando tarefas
const tarefa1 = new Tarefa('Fazer jantar','Preparar o jantar para visita');
const tarefa2 = new Tarefa('Lavar roupa','Lavar o uniforme de trabalho');
const tarefa3 = new Tarefa('Arrumar a casa','Passar brilho max no piso laminado');

// visualizando o resumo das tarefas
console.log(tarefa1.resumo());
console.log();
console.log(tarefa2.resumo());
console.log();
console.log(tarefa3.resumo());

//alterando o status da tarefa
tarefa1.concluir();
console.log(tarefa1.resumo());

//alterando a descrição da tarefa
tarefa2.alteraDescricao('Lavar o terno para o casamento do Christian!');
console.log();
console.log(tarefa2.descricao);




















// // ----- Parte 1: Função Construtora ----- //
// function Tarefa(titulo, descricao) {
//   this.titulo = titulo;
//   this.descricao = descricao;
//   this.status = "pendente";
// }

// // ----- Parte 2: Métodos adicionados ao Prototype ----- //

// // Marca a tarefa como concluída
// Tarefa.prototype.concluir = function () {
//   this.status = "concluída";
// };

// // Retorna um resumo em formato de string
// Tarefa.prototype.resumir = function () {
//   return `Título: ${this.titulo} | Status: ${this.status}`;
// };

// // Atualiza a descrição da tarefa
// Tarefa.prototype.alterarDescricao = function (novaDescricao) {
//   this.descricao = novaDescricao;
// };


// // ----- Parte 3: Testes do sistema ----- //
// const t1 = new Tarefa("Ler artigo", "Ler artigo sobre otimização em IA");
// const t2 = new Tarefa("Implementar modelo", "Criar baseline com Random Forest");
// const t3 = new Tarefa("Preparar relatório", "Organizar métricas e gráficos");

// // Alterando a descrição de t1
// t1.alterarDescricao("Ler artigo sobre Gradient Boosting");

// // Concluindo t2
// t2.concluir();

// // Exibindo resumos
// console.log(t1.resumir());
// console.log(t2.resumir());
// console.log(t3.resumir());

