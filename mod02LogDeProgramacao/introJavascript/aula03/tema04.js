/*
Aula 3 - Template Strings (ou Template Literals)

Usando crases (`), é possível criar strings mais flexíveis:
Suportam múltiplas linhas sem \n.
Permitem interpolação de variáveis com ${ }.

*/

let nome = "Diego";
let idade = 30;

let mensagem = `Olá, meu nome é ${nome}.
Tenho ${idade} anos de idade.`;

console.log(mensagem);
