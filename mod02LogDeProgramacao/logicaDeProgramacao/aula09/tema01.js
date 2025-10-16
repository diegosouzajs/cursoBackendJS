/* 
Operadores de comparação


*/

console.log('Operadores de comparação!');
console.log('5 > 3', 5 > 3); // true
console.log('5 >= 3', 5 >= 3); // true
console.log('4 < 10', 4 < 10); // true
console.log('4 <= 10', 4 <= 10); // true
console.log("1 == '1' ", 1 == '1'); // true
console.log("1 === '1' ", 1 === '1'); // false
console.log("1 != '1' ", 1 != '1'); // false
console.log("1 !== '1' ", 1 !== '1'); // true
console.log();

/**
 *  Operadores lógicos
 * */ 

// Usei "const" para declarar estas variáveis porque seus valores não irão mudar
// durante a execução do código.  
// Se precisássemos reatribuir valores, usaríamos "let".

const num1 = 10;
const num2 = -30;

// O operador "&&" (E lógico) verifica duas ou mais condições:
// - Todas as condições devem ser verdadeiras para que o bloco "if" seja executado
// - Se qualquer condição for falsa, o bloco "else" será executado

if (num1 > 0 && num2 < 0){
    console.log('num1 + num2 = ', num1 + num2);
}else{
    console.log('O num2 é maior que zero(0): ', num2)
}

console.log();

// O operador "||" (OU lógico) verifica duas ou mais condições:
// - Se pelo menos uma das condições for verdadeira, o bloco "if" é executado
// - Se todas as condições forem falsas, o bloco "else" é executado

if (num1 > 0 || num2 > 0){
    console.log('num1 + num2 = ',num1 + num2);
}else{
    console.log('Número é MAIOR que zero: ', num1)
}

console.log();

//Operador não lógico "!""
const situacao = false;

// O operador "!" (não lógico) inverte o valor booleano:
// - se a expressão for true, !expressão retorna false
// - se a expressão for false, !expressão retorna true

if(!situacao){
    console.log('Está ativo');
}else{
    console.log('Não está ativo');
}

console.log();
const situacao1 = false;
const situacao2 = true;

if (!(situacao1 || situacao2)){
    console.log('Pelo menos uma das situações é verdadeira');
}else{
    console.log('Nenhum das situações é verdadeira')
}