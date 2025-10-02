/* Aula 02 - variáveis e constantes

Variaveis são nomes atribuidos a endereços de memória que podem
passar por uma reatribuição durante a execução de um código. É possível criar
uma variavel sem atribuir um valor a ela
    let nome;

Constantes, diferentemente das variaveis, não permite a reatribuição de valores.
Ao criar uma constante, sempre devemos atribuir um valor a ela.
    const nome = "Diego"; -> certo
    const sobrenome; -> errado

Quando usar?
    Use const para tudo que puder
    Use let quando precisar
    Evite usar o var pois trata-se de um código legado
*/
// declaração de variável
var carro = "Fuscão preto"; // legado -> importante evitar o uso
let idade; // cria uma variavél com valor undefined
let nome = "Diego";

console.log(carro);
console.log(nome, idade);

nome = "Denise";
console.log(nome);

// console.log(idade);
// var carro = 'Porshe';
// declaração de constante
const sobrenome = "Rodrigues";
// sobrenome = 'Souza'; proibido

console.log(nome, sobrenome);


console.log(carro);