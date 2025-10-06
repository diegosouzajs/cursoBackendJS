/* 
Tipos de dados

Tipos de dados primitivos são os valores mais simples da linguagem, que não são 
objetos e não possuem métodos próprios (apesar de o JavaScript internamente 
envolvê-los em objetos quando necessário). Eles são imutáveis, ou seja, 
uma vez criados, não podem ser alterados — só substituídos.

    String – representa textos.
    Number – representa números inteiros e decimais.
    Boolean – representa valores lógicos: verdadeiro (true) ou falso (false).
    Undefined – quando uma variável é declarada, mas não recebeu valor.
    Null – representa ausência intencional de valor.
    Symbol – usado para criar identificadores únicos (introduzido no ES6).
    let id = Symbol("id");
    BigInt – usado para representar números inteiros muito grandes.
    let big = 123456789012345678901234567890n;

Para verificar o tipo de um dado, usamos o método typeof
    typeof é um operador que retorna uma string indicando o tipo de dado de uma
    variável ou expressão. Ele é muito útil para verificar o tipo de uma 
    variável antes de fazer operações com ela, ajudando
        console.log(typeof nome, nome)
*/

let nome = "Diego";
let idade = 39;
let idade2 = '39'; // string
let nota = 6.7 // number
let x; // undefined
let y = null; // nulo

console.log(typeof Number(idade2));

