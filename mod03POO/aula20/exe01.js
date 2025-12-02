/*
Exercício – Processamento assíncrono com callbacks

Considere que você está desenvolvendo um módulo simples para simular operações
de leitura de dados em um sistema. Sua tarefa é implementar uma função que receba:
  Um array de números;
  Uma função de processamento (callback) que será aplicada individualmente 
  a cada elemento;
  Uma função final (callback) que será executada ao final do processamento, 
  recebendo o resultado agregado.

Tarefa
Implemente a função processarDados com o seguinte comportamento:
  A função deve receber três argumentos:

      processarDados(lista, callbackProcessamento, callbackFinal)

  O processamento de cada item deve ocorrer de forma assíncrona, usando 
  setTimeout com um atraso aleatório entre 100 e 500 ms para simular uma operação de I/O.

  O callbackProcessamento deve transformar cada valor da lista e retornar o 
  valor processado.

  Após todos os itens terem sido processados, a função deve chamar callbackFinal, 
  passando um objeto com:

  {
  quantidade: <total de itens>,
  resultados: <array com os resultados processados>
  }

  Crie um exemplo de uso que:
      Multiplique cada número por 2 durante o processamento.
      Exiba ao final um resumo no console.
*/

function processarDados(lista, cbProcessamento, cbFinal){
  const listResultado = [];
  let processados = 0;

  lista.forEach((item, index) => {
    setTimeout(function(){
      const resultado = cbProcessamento(item);
      listResultado[index] = resultado;

      processados++; // adiciona 1 aos itens
      // console.log(resultado);
      if(processados === lista.length){
        const objeto = {
          resultado: listResultado,
          processados: processados
        }
        cbFinal(objeto);        
      }
    },rand());    
  })
}

function dobrar(item){
  return item * 2;
}

function final(info){
  const {processados, resultado} = info
  console.log('Resultado final');
  console.log('Itens processados:', processados);
  console.log('Lista processada:', resultado);
}

function rand(min=100, max=500){
  return Math.random() * (max - min) + min;
}

const numeros = [2, 5, 10, 7, 3];

processarDados(numeros, dobrar, final);

















// function processarDados(lista, callbackProcessamento, callbackFinal) {
//   const resultados = [];
//   let processados = 0;
//   //executa um forEach na lista para aplicar o processamento em cada item presente nela
//   lista.forEach((item, index) => {
//     // criação de um número aleatório para simular um temporizador
//     const delay = Math.floor(Math.random() * (400 - 100) + 100); // 100–500 ms

//     //temporizador
//     setTimeout(() => {
//       // chama o callbackProcessamento (dobrar)
//       const resultado = callbackProcessamento(item);
//       resultados[index] = resultado;

//       // incrementa o processados
//       processados++;

//       // quando processados atingir o limite, executa o callbackFinal (resumoFinal)
//       if (processados === lista.length) {
//         callbackFinal({
//           quantidade: lista.length,
//           resultados: resultados
//         });
//       }
//     }, delay);
//   });
// }

// // Exemplo de uso
// const numeros = [2, 5, 10, 7, 3];

// function dobrar(valor) {
//   return valor * 2;
// }

// function resumoFinal(info) {
//   console.log("Processamento concluído.");
//   console.log("Total de itens:", info.quantidade);
//   console.log("Resultados:", info.resultados);
// }

// processarDados(numeros, dobrar, resumoFinal);
