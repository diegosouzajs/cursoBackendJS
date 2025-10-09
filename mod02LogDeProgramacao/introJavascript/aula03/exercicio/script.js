/*

Crie um arquivo index.html e importe um arquivo JavaScript externo chamado 
script.js.
No arquivo script.js, faça o seguinte:
 Crie uma string chamada frase que contenha aspas dentro da string.
Por exemplo: Ele disse: "JavaScript é incrível!"
 Crie duas variáveis nome e cidade com valores à sua escolha e concatene-as 
 em uma frase completa usando o operador +.
 Crie uma string que utilize caracteres de escape (\n, \t) para formatar uma 
 mensagem de duas linhas com tabulação.
Crie uma string usando Template String para incluir variáveis e expressões 
dentro da string de forma dinâmica.
Exemplo: "Olá, meu nome é NOME e moro em CIDADE."
 Aplique pelo menos três métodos de string em qualquer uma das variáveis 
criadas:
toUpperCase(), toLowerCase(), length, replace(), includes(), etc.
Mostre todas as strings e resultados no console.
*/

const frase = `Javascript é "incrível"`;
const nome = 'Diego';
const cidade = 'Ouro Preto';
const concacNomeCidade = nome +"\\" + cidade;

const endereco = 'Rua Pandiá Calógeras, 898 \n Ouro Preto \t Minas Gerais'

const completo = `${frase}, Meu nome é \n${nome}, \n trabalho em ${cidade}
no endereço ${endereco}`


console.log(completo);
// toUpperCase
console.log(nome.toUpperCase())
// toLowerCase
console.log(nome.toLowerCase())
// split
console.log(cidade.split(" "));