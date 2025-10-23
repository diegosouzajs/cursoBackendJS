/* 
Aula 07 - Const em JavaScript: Conceito e Uso

O que é const
    const descreve uma variável que não pode ser reatribuída 
    (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

Valores Mutáveis
    Objetos e arrays são mutáveis, mesmo quando declarados com const.
    A variável continua constante, mas podemos alterar os valores internos:
    const array = [1, 2, 3];
    array[0] = 100;      // ✅ permitido
    array.push(4);       // ✅ permitido
    A única operação que não funciona é reatribuir a variável:
    array = 'Legal'; // ❌ Erro: Assignment to constant variable

*/

// O que é const
const nome = 'diego';
nome = 'José'; // Erro: Assignment to constant variable.
console.log(nome);
console.log();

// Valores mutáveis
const array = [1, 2, 3];
array[0] = 100;      // ✅ permitido
array.push(4);       // ✅ permitido
console.log(array);

// A única operação que não funciona é reatribuir a variável:
array = 'Legal'; // ❌ Erro: Assignment to constant variable


