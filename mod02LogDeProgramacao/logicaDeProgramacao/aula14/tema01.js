/* 
Atribuição por desestruturação (Objetos)

A atribuição por desestruturação em objetos é um recurso do ES6 (ECMAScript 2015)
que permite extrair valores de propriedades de um objeto e atribuí-los a 
variáveis de forma simples e direta. Enquanto nos arrays a desestruturação 
depende da posição, nos objetos ela depende do nome das propriedades.


*/

// Exemplo básico


const pessoa = {
    nome: 'Diego',
    sobrenome: 'Souza',
    idade: 39
};

// sem desestruturação
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);

// comandos para descobrir as 
console.log(Object.values(pessoa)); // retorna todos os valores presentes no objeto
console.log(Object.keys(pessoa)); // retorna todas as chaves presentes no objeto

// com a desestruturação 
const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade)



