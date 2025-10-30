// //  executaOperacaoEmArray(numeros, retorno)
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function executaOperacaoEmArray(array, callback) {
//     array.forEach(elemento => {
//         const resultado = callback(elemento); //function applied to every element in the array
//         console.log(resultado); //log the result
//     });
// }

// const retorno = (elemento) => {
//     const resposta = elemento * 10;
//     return `${elemento} x 10 = ${resposta}`;
// }

// // console.log(executaOperacaoEmArray(numeros, retorno))

// // só posso adicionar métodos ao protoype se o objeto tiver sido criado a partir
// // de uma função construtora ou classe
// const pessoa1 = {
//     nome: 'Diego',
//     sobrenome: 'Souza',
//     dataNascimento: '08/03/1986',
//     nomeCompleto() {
//         const nomeCompleto = this.nome + ' ' + this.sobrenome;
//         return (nomeCompleto);
//     },
//     idade() {
//         const agora = new Date();
//         const dtNascimento = this.dataNascimento.split('/');
//         const anoAtual = agora.getFullYear();
//         const idadeAtual = anoAtual - Number(dtNascimento.at(-1));
//         return idadeAtual;
//     }
// }

// const pessoa2 = {
//     nome: 'Diogo',
//     sobrenome: 'Souza',
//     dataNascimento: '05/10/1988',
// }

// const pessoa3 = {
//     nome: 'Daniel',
//     sobrenome: 'Souza',
//     dataNascimento: '05/10/1995',
// }


// Object.setPrototypeOf(pessoa2, pessoa1);
// Object.setPrototypeOf(pessoa3, pessoa1);
// //  console.log(pessoa1.nomeCompleto());
// //  console.log(pessoa1.idade());


// // console.log(pessoa1);
// // console.log(pessoa2);
// // console.log(pessoa3);

// //função construtora
// function Pessoa(nome, sobrenome, dataNascimento) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.dataNascimento = dataNascimento;

//     this.nomeCompleto = () => {
//         const nomeCompleto = this.nome + ' ' + this.sobrenome;
//         return nomeCompleto;
//     };
//     this.idade = () => {
//         const agora = new Date();
//         const dtNascimento = this.dataNascimento.split('/');
//         const anoAtual = agora.getFullYear();
//         const idadeAtual = anoAtual - Number(dtNascimento.at(-1));
//         return idadeAtual;
//     }
// }

// // não use arrow function pois elas não têm seu próprio this - elas herdam o this do escopo
// // lexico em que foram criadas
// Pessoa.prototype.saudacao = function () {
//     return `Olá, ${this.nomeCompleto()}. Seja bem-vindo(a)!`;
// }


// const p1 = new Pessoa('Diego', 'Souza Rodrigues', '08/03/1986');
// const p2 = new Pessoa('Roberto', 'Carlos', '10/11/2000');
// // console.log(p1.nomeCompleto());
// // console.log(p1.saudacao());
// // console.log(p2.saudacao());
// console.log(p2);


// // factory function
// // não há heranças entre factories mas sim composição. 
// // não aceita inclusão de métodos no proto
// function animais(cor, raca, porte, tipo, dieta) {
//     return {
//         cor,
//         raca,
//         porte,
//         tipo,
//         dieta
//     }
// }


// const cachorro = animal('Rex','Preta','Fila','Grande');

// console.log(cachorro);


const frutas = ['goiaba','maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã','goiaba'];

const contagem = frutas.reduce((acum, fruta) => {
  acum[fruta] = (acum[fruta] || 0) + 1;

  return acum;
}, {});

const objetoLista = {... contagem};

console.log(objetoLista)
console.log(typeof frutas)
