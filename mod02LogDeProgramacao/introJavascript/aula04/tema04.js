/* 
Em JavaScript, o tipo Number é usado para representar valores numéricos 
(inteiros e decimais, seguindo o padrão IEEE 754).
Para facilitar operações com esses valores, a linguagem oferece métodos 
associados ao tipo Number.
Esses métodos são funções pré-definidas que permitem:
    - Formatar a exibição de números.
    - Converter números em outros formatos (como texto ou bases numéricas).
    - Verificar propriedades de valores numéricos (se são inteiros, finitos ou válidos).

Métodos de instância

    São métodos aplicados a uma instância de número, ou seja, a um valor 
    numérico específico armazenado em uma variável.
    Esses métodos pertencem ao objeto Number do JavaScript e permitem manipular
    ou representar o número de diferentes formas.

Métodos estáticos (usados direto em Number)

    São métodos que pertencem à classe/objeto Number em si, e não às suas instâncias.
    Isso significa que você chama diretamente pelo nome do tipo, 
    sem precisar de uma variável.

Constantes do objeto Number

O objeto Number também possui valores especiais já definidos, como:

Number.MAX_VALUE → maior número representável
Number.MIN_VALUE → menor número positivo rpresentável
Number.MAX_SAFE_INTEGER → maior número inteiro que pode ser representado e 
    comparado com segurança, ou seja, sem perda de precisão. (9007199254740991)
Number.NaN → representa um valor numérico indefinido ou irrepresentável, como 
    o resultado de uma operação matemática falhada (por exemplo, a raiz quadrada 
    de um número negativo) ou uma tentativa de converter uma string não numérica 
    para um número. É importante notar que NaN é o único valor em JavaScript que 
    não é igual a si mesmo (NaN === NaN retorna false) e o seu tipo é number, 
    apesar de o nome sugerir o contrário

*/

// Métodos de instância

// console.log(25.3447597.toFixed(2));
// console.log(Number.parseInt(25.3447597));

// let n = 123.456;
// let numString = '128.47912'
// console.log('Fixar casas decimais: ',n.toFixed(0));      // "123.46" → fixa 2 casas decimais
// console.log('Precisão: ',n.toPrecision(2));  // "123.5"  → define 4 dígitos significativos
// console.log('Converte número para hexadecimal',n.toString(16));    // "7b"     → converte para hexadecimal

// // Métodos estáticos
// console.log('Verifica se número é inteiro: ',Number.isInteger(n)); //→ verifica se n é um número inteiro.
// console.log('Verifica se número é finito: ',Number.isFinite(n)); //→ verifica se n é um número finito ( não Infinity, -Infinity ou NaN).
// console.log('Verifica se é NaN: ',Number.isNaN(n)); //→ verifica se x é NaN (Not-a-Number).
// console.log('Converte para inteiro: ',Number.parseInt(numString)); //→ converte uma string em número interio, podendo especificar a base.
// console.log('Converte para float: ',Number.parseFloat(numString));// → converte uma string em número decimal (ponto flutuante).
// console.log();

// Constantes do Objeto Number
console.log('Maior número representável: ',Number.MAX_VALUE); //→ maior número representável
console.log('Menor número positivo representável: ',Number.MIN_VALUE);//→ menor número positivo rpresentável
console.log('Maior número inteiro representavel',Number.MAX_SAFE_INTEGER); //→ maior número inteiro que pode ser representado (9007199254740991)
console.log('NaN: ',Number.NaN);