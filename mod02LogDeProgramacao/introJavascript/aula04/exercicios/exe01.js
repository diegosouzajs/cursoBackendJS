/*
Crie um arquivo index.html e importe um arquivo JavaScript externo chamado script.js.
No arquivo script.js, faça o seguinte:

Parte 1 – Tipos e valores especiais
Crie uma variável numero1 com valor 10 e numero2 com valor 0.
    Mostre no console:
        O tipo das variáveis (typeof)
        O resultado da divisão numero1 / numero2
Parte 2 – Operadores e precisão limitada
    Crie duas variáveis a = 0.1 e b = 0.2.
    Some a + b e mostre o resultado no console.
    Mostre o resultado corrigido para duas casas decimais usando métodos de Number.

Parte 3 – Métodos e funções úteis da classe Number
Use os métodos toFixed(), toPrecision(), isNaN() e isFinite() em valores numéricos para demonstrar:
    Formatação com casas decimais
    Verificação de número finito
    Verificação de NaN
*/

const numero1 = 10;
const numero2 = 0;

console.log('Tipo variável numero1: ', typeof numero1);
console.log('Tipo variável numero2: ', typeof numero2);
console.log();

const a = 0.1;
const b = 0.2
console.log('a + b = ',a + b);
console.log();

const numero = 123456.59879
console.log(numero.toFixed(2))
console.log(numero.toPrecision(6))
console.log('É NaN: ',Number.isNaN(numero));
console.log('É finito: ',Number.isFinite(numero));

