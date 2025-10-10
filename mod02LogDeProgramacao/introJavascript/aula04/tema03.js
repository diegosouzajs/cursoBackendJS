/*
Aula 04 - Precisão limitada

Operações que utilizem números decimais(ponto flutuante) ou  que resultem 
em números decimais (como divisão) podem apresentar imprecisão em cálculos decimais.
console.log(0.1 + 0.2); // 0.30000000000000004

Uma solução meio que “gambiarra” seria a seguinte:
const total = ((0.1 * 100)+(0.2*100))/100 // retorna 0.3

Não é muito funcional. 
Então para resolver, basta usar o método .toFixed(n).
const total = (0.1 + 0.2).toFixed(2); // 0.30




*/

const total1 = ((0.1 * 100)+(0.2*100))/100 // retorna 0.3
const total2 = (0.1 + 0.2).toFixed(2); // 0.30

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(1.1 + 0.2); // 0.30000000000000004
console.log(total1); // 0.30000000000000004
console.log(total2); // 0.30000000000000004