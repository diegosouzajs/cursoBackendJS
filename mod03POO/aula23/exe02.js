/*
Crie uma função geradora chamada geradorId() que:
    Comece a contar a partir de 1;
    A cada chamada de next(), retorne o próximo número da sequência;
    Nunca reinicie a contagem enquanto o mesmo gerador estiver ativo.
Em seguida, crie uma função chamada criarUsuarios(qtd) que:
    Receba um número inteiro qtd;
    Utilize o mesmo gerador de IDs para criar um array de objetos no formato:

        { id: <gerado>, nome: "Usuário <id>" }

    Retorne o array povoado.
Ao final:
    Gere uma lista com 5 usuários;
    Exiba o array resultante no console;
    Chame o gerador novamente fora da função e mostre que a contagem continua.

*/

// função geradora
function* geradorId(){
  let id = 1;
  // while infinito mas chamado apenas quando a função geradora é invocada
  while(true){
    yield id;
    id++;
  }
}

// chamada da função geradora
const gerarId = geradorId();

function criaUsuarios(qtd){
  const usuarios = []; // array em branco que receberá os objetos

  // for clássico para iterar sobre a quantidade informada
  for(let i= 0; i < qtd; i++){
    let idUser = gerarId.next().value; // chama o próximo a cada execução
    // criação do objeto
    const user = {
      id: idUser,
      nome: `Usuário ${idUser}`
    };
    // inclusão do objeto na lista de usuários
    usuarios.push(user);
  }
  
  return usuarios; 
}

const usuarios = criaUsuarios(5);

console.log(usuarios);

// Consultando o próximo ID fora da função
const proximoId = gerarId.next().value;

console.log("Próximo ID após criar usuários:", proximoId);
console.log();

// imprime usuários presentes na lista usuários
for(let i = 0; i < lista.length; i++){
  const {id, nome} = lista[i];
  console.log('ID: ', id);
  console.log('Nome: ', nome);
  console.log('--------------------')
}

// function* geradorId() {
//   let id = 1;
//   while (true) {
//     yield id++;
//   }
// }

// // Criando uma instância do gerador
// const gerarId = geradorId();

// function criarUsuarios(qtd) {
//   const usuarios = [];

//   for (let i = 0; i < qtd; i++) {
//     const novoId = gerarId.next().value;
//     usuarios.push({
//       id: novoId,
//       nome: `Usuário ${novoId}`
//     });
//   }

//   return usuarios;
// }

// // Criando 5 usuários
// const lista = criarUsuarios(5);
// console.log("Usuários criados:");
// console.log(lista);

// // Consultando o próximo ID fora da função
// const proximoId = gerarId.next().value;
// console.log("Próximo ID após criar usuários:", proximoId);

