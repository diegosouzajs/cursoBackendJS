/* 
Operadores básicos

+	Adição e concatenação -> Somar números ou unir strings:	
        "5 + 3 // 8 
        ""Oi"" + ""!"" // ""Oi!"""
-	Subtração -> Calcular a diferença entre valores	
        10 - 4 // 6
*	Multiplicação -> Repetir ou escalar valores numéricos	
        6 * 2 // 12
/	Divisão	-> Dividir um valor pelo outro	
        10 / 2 // 5
%	Módulo (resto da divisão) -> Saber o resto de uma divisão 
        (muito usado em verificações de par/ímpar)	
        10 % 3 // 1
**	Exponenciação -> Elevar um número a uma potência	
        2 ** 3 // 8
++	Incremento -> Somar +1 a uma variável	
        "let x = 1; x++; // 2"
--	Decremento -> Subtrair -1 de uma variável	
        "let y = 5; y--; // 4"

*/

let num1 = 20;
let num2 = 10;

const soma = num1 + num2;
const subtracao = num1 - num2;
const multi = num1 * num2;
const divisao = num1 / num2;
const num2AoQuadrado = num2 ** 2;
const resto = num1 % 3;

const estudante = true; 

console.log(++num1);//'Incrementa o númer antes dele ser chamado',
console.log(num1++); // o número é apresentado e somente após é incrementado
console.log(--num2); // o decremento ocorre  antes da apresentação do número
console.log(num2--);
console.log(soma);
console.log(subtracao);
console.log(multi);
console.log(divisao);
console.log(num2AoQuadrado);
console.log(resto);