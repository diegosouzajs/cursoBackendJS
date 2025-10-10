/*

Aula 06 - Arrays

O que é um array?

    Um array em JavaScript é uma estrutura de dados usada para armazenar vários 
    valores em uma única variável.
    Esses valores podem ser de qualquer tipo: números, strings, objetos ou 
    até outros arrays.
    Pense em um array como uma lista ordenada, onde cada item tem uma posição chamada índice.

O que é um índice?

    Um índice é a posição numérica que identifica cada elemento dentro de uma estrutura de dados, como um array e strings em JavaScript.
    Ele funciona como o "endereço" de cada item na lista, permitindo acessar, modificar ou remover valores.
    Não esqueça que a contagem de indices de uma estrutura de dados sempre começa com zero. Caso queira começar a considerar o índice do fim para o ínicio, o valor inicial é -1

índices (-)    -7    -6    -5     -4      -3    -2         -1
índices (+)     0     1     2      3       4     5          6
const lista = [1,     2,    3,     4,     ‘oi’, ‘banana’, ’Um texto’]


*/


// lista = 3;
// Podemos fazer algumas operações utilizando os índices
// console.log('Primeiro item do array',lista[0]); //→ acessa o primeiro item do array (1)
// console.log('Último item do array',lista[lista.length - 1]); //→ acessa o último item do array ([‘nome’, ‘sobrenome’, ‘idade’])
// console.log('Último item do array',lista.at(-1)); //→ acessa o último item do array (ES2022);
// console.log('acessa o penúltimo item do array e o primeiro item do item',lista.at(-2)[0]); //→ acessa o último item do array e o primeiro item do respectivo item
// console.log(lista);
// console.log('altera o valor do índice zero para 10', lista[0] = 10); //→ altera o valor do índice zero para 10
// console.log(lista);

// // #--- Características principais dos arrays ---#
// // ## Formas de declarar um array
// // Usando colchetes 
// let frutas = ["maçã", "banana", "uva"];
// let numeros = [1, 2, 3, 4, 5];

// //Usando o construtor Array(): cria um novo array usando o objeto Array. Pode ser usado com ou sem elementos iniciais.
let cores = new Array("vermelho", "azul", "verde");
let vazios = new Array(5); // cria um array com 5 posições vazias


// //Array vazio e preenchimento posterior: Cria o array sem elementos e adiciona depois. 
const numeros2 = [];
const numeros = [1,2,3,4.6,89, 856]
// numeros2.push(10);
// numeros2.push(20);
// numeros2.push('banana');
// numeros2.push([]);
// // console.log(numeros2);



// // #--- Métodos de array ---#

// // // Adicionar ou remover elementos
// numeros2.push(5);// → adiciona ao final do array.
// let var1 = numeros.pop(); //→ remove do final do array.
// console.log(var1);
// numeros2.unshift(1); //→ adiciona ao início do array.
// numeros.shift() ;//→ remove do início do array.
// numeros2.splice(2, 2); //→ remove elementos em qualquer posição do array.
// numeros2.splice(2, 0, 1,2,3); //→ adiciona elementos em qualquer posição do array.

// console.log(numeros);
// console.log(numeros2);

// const nome ='Diego';
// const lista1 = [1,2,3,4,5,6,7]
// lista1.push(nome);
// lista1.splice(2, 0, 1,2,3);
// lista1[0] = 89;
// console.log(lista1);
// console.log(lista1.splice(3,2));
// console.log(lista1);




const lista = [1 , 2, 5, 10, 'oi', "banana", ['nome', 'sobrenome', 'idade'],'banana'];

// //Acessar e localizar elementos
console.log(lista.indexOf('banana'));// → retorna o índice da primeira ocorrência do elemento ou -1 se não existir.
console.log(lista.lastIndexOf('banana')); //→ retorna o índice da última ocorrência.
console.log(lista.includes('oi')); //→ retorna true se o elemento existir no array, false caso contrário.
