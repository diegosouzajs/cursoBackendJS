/* 

Aula 05 - Objeto Math
O objeto Math é um objeto estático que fornece funções e propriedades matemáticas.
Diferente de outros objetos, não é necessário criar uma instância de Math, 
pois todos os seus métodos são chamados diretamente usando Math.nomeDoMétodo().
Ele é amplamente utilizado para cálculos matemáticos como potências, 
arredondamentos, valores absolutos, geração de números aleatórios, trigonometria, logaritmos e muito mais.

*/

let num = 5.35;

console.log(Math.pow(num, 2)); // → realiza a exponenciação, elevando um número a uma potência.
console.log(Math.sqrt(num)); //→ retorna a raiz quadrada do número.
console.log(Math.abs(num));// → fornece o valor absoluto, ignorando o sinal.
console.log(Math.round(num));// → arredonda o valor para o inteiro mais próximo.
console.log(Math.floor(num));// → arredonda o valor para baixo, para o inteiro mais próximo.
console.log(Math.ceil(num));// → arredonda o valor para cima, para o inteiro mais próximo.
console.log(Math.max(20, 35,22,46,98,864)); //→ retorna o maior valor entre os fornecidos.
console.log(Math.min(20, 35,22,46,98,864));// → retorna o menor valor entre os fornecidos.
console.log(Math.random());// → gera um número pseudoaleatório entre 0 e 1. 
console.log(Math.random() * (10 - 5) + 5 );//-> gera um número aleatorio entre o intervalo defindo(5 e 10 onde 10 é o valor máximo e 5 o mínimo)
console.log(Math.trunc(num));// → remove as casas decimais, ficando apenas com a parte inteira.
console.log(Math.sign(num));// → retorna o sinal do número (-1, 0 ou 1).
console.log(Math.log(num));// → calcula o logaritmo natural (base e).
console.log(Math.log10(num));//→ calcula o logaritmo na base 10.
console.log(Math.exp(num));// → retorna e elevado ao número fornecido. Onde e é a constante matemática de Euler, aproximadamente 2.71828..., que é a base dos logaritmos naturais.
console.log(Math.sin(num), Math.cos(num), Math.tan(num));// → funções trigonométricas para seno, cosseno e tangente.


