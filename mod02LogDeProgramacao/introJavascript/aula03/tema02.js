/*
Aula 3 - Concatenação

Concatenação é o processo de juntar strings. 
Pode ser feito com o operador + ou +=. 
Também podemos utilizar o método de string concat para fazer isso.

const nome = "Diego";
const sobrenome = "Souza";
const nomeCompleto = nome.concat(" ",sobrenome)
const saudacao = "Olá, " + nome + "!";  // concatenação simples
let mensagem = "Bem-vindo ";
mensagem += "ao JavaScript"; // concatenação com +=
*/
const nome = "Diego";
const sobrenome = "Souza";
const nomeCompleto = nome.concat(" ",sobrenome) // concatenação com o método concat
const saudacao = "Olá, " + nome + "!";  // concatenação simples
let mensagem = "Bem-vindo ";
mensagem += "ao JavaScript"; // concatenação com +=
let nomeCompleto2 = nome + " " + sobrenome;
const saudacao2 = `Olá, ${nomeCompleto}. ${mensagem}`// concatenação com template strings

console.log(saudacao);
console.log(saudacao2);
console.log("");
console.log('Concatenção usando concat:',nomeCompleto);
console.log('Concatenação utilizando o +:', nomeCompleto2);
console.log("");
console.log('Verificando o tipo da variavel/constante saudacao2: ', typeof saudacao2);


// string com o número 39. Tudo que for envolvido por aspas ou crase é uma 
// STRING
let numString = '39' 
let idade = 39

console.log("");
console.log("Nome: ", nome);
console.log("Idade:",idade);
console.log("");

// ao tentar fazer uma operação de adição entre uma variavel ou constante do 
//tipo Number com uma do tipo String, os valores serão concatenados
const somaNumString = idade + numString
console.log('Soma(concatenação) entre number e string:',somaNumString);
console.log("");

// ao tentar fazer uma operação de multiplicação entre uma variavel ou constante do 
//tipo Number com uma do tipo String a operação é realizada
const multNumString = idade * numString;
console.log('Multiplicação entre string e number:',multNumString);
console.log("");

// ao tentar fazer uma operação de divisão entre uma variavel ou constante do 
//tipo Number com uma do tipo String a operação é realizada
const divNumString = idade / numString;
console.log('Divisão entre string e number:',divNumString);
console.log("");

// ao tentar fazer uma operação de subtração entre uma variavel ou constante do 
//tipo Number com uma do tipo String a operação é realizada
const subNumString = idade - numString;
console.log('Subtração entre string e number:',subNumString);
console.log("");

/**
 * é de suma importante saber lidar com tipos de dados. Se o objetivo é receber
 * valores e realizar operações matemáticas, deve-se trata-los antes de realizar
 * as operações. Neste contexto, seria converter o valore recebido para o tipo 
 * Number.
 * let numString = Number('39');
 * 
 */

