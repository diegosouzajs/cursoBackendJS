/*
Aula 3 - Métodos de String

Os métodos de string são funções pré-definidas que pertencem ao objeto String 
e permitem manipular, analisar ou transformar textos.
Ou seja, uma string em JavaScript é tratada como um objeto imutável 
(não pode ser alterada diretamente), mas possui diversos métodos que retornam 
novas strings ou informações sobre ela.

Para exemplificar, utilizarei como exemplo, as declarações abaixo:

let campus = “Ouro Preto”;
let campus2 = "     Conselheiro Lafaiete        ";
*/

let campus = "Ouro Preto Preto";
let campus2 = "     Conselheiro Lafaiete        ";

console.log(campus.length); // →  Retorna o número de caracteres da string.
console.log(campus.toUpperCase()); // → converte todos os caracteres da string para maíusculas
console.log(campus.toLowerCase()); // → converte todos os caracteres para minúsculas.
console.log(campus2.trim()); // → remove espaços em branco no início e no fim da string.
console.log(campus.substring('Ouro')); // → verifica se a string contéum um determinado trecho, retornando true ou false
console.log(campus.indexOf('a')); //→ retorna o índice da primeira ocorrência de um trecho na string. Se não encontrar, retorna -1.
console.log(campus.lastIndexOf('a')) // → retorna o índice da última ocorrência de um trecho. 
console.log(campus.slice(1, 7)); // extrai parte da string entre os índices informados, desconsiderando o elemento do índice final

console.log(campus.substring(0, 5)); // → similar ao slice, mas não aceita índices negativos
console.log(campus.replace('Preto', 'Branco'));//→ substitui a primeira ocorrência de um trecho por outro
console.log(campus.replaceAll('Preto', 'Branco'));// → substitui todas as ocorrências de um trecho.
console.log(campus.split(' ')); // → divide a string em um array, usando o separador informado.
console.log(campus.startsWith('o')); //→  Verifica se a string começa com o valor indicado.
console.log(campus.endsWith('a')); // → verifica se a string termina com o valor indicado
console.log(campus.repeat(3)) // → repete a string o número de vezes informado
console.log(campus.concat(' Tem um campus do ', 'IFMG')) // → Concatena string. Similar ao operador +