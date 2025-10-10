/*
Aula 04 - Tipo único de número

Em JavaScript, todos os números (inteiros e decimais) são do tipo Number.
Internamente, eles seguem o padrão IEEE 754 (64 bits, ponto flutuante).

let inteiro = 10;
let decimal = 3.14;
console.log(typeof inteiro); // "number"
console.log(typeof decimal); // "number"

Porém, podemos converte-los para um tipo específico utilizando os métodos de Number
    Number.parserInt(n) - converte uma string em número inteiro, podendo especificar a base.
    Number.parseFloat(n) → converte uma string em número decimal (ponto flutuante).

    MAS, APESAR DA CONVERSÃO, CONTINUAM SENDO NUMBER

*/
let inteiro = 10;
let decimal = 3.14;

console.log(inteiro, typeof inteiro); // "number"
console.log(decimal, typeof decimal); // "number"
console.log();

let numString = '10.25';
let convetStringFloat = Number.parseFloat(numString);
let convertStringInt = Number.parseInt(numString);
let convertStringNumber = Number(numString);

console.log(numString, typeof numString);
console.log(convetStringFloat, typeof convetStringFloat);
console.log(convertStringInt,typeof convertStringInt);
console.log(convertStringNumber, typeof convertStringNumber);







