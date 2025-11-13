/*
Aula 16 - Tratando e lançando erros (try, catch, finally, throw)

Em JavaScript, erros podem ocorrer durante a execução do código, como:
Acesso a variáveis inexistentes
Operações inválidas
Falha ao manipular dados externos
Para prevenir que o programa quebre, usamos o tratamento de exceções, 
permitindo capturar e tratar os erros de forma controlada.

O bloco try envolve o código que pode gerar um erro.
Se nenhuma exceção ocorrer, o catch não será executado.

try {
  // código que pode gerar erro
  let resultado = 10 / 0;
  console.log("Executou o try sem problemas");
} catch (erro) {
  console.log("Ocorreu um erro:", erro);
}
if (resultado === Infinity || resultado === NaN){
    throw new Error('Divisão por zero');
*/


// formato comum 1
let num1 = 2;
let num2 = 0;

try {
    // Bloco de código que pode gerar um erro
    let resultado = num1 / num2
    console.log(resultado);
} catch (erro) {
    // Bloco executado se ocorrer um erro no try
    console.error('Ocorreu um erro:', erro.message);
} finally {
    // Bloco executado sempre, com ou sem erro
    console.log('Execução finalizada.');
}

console.log();
console.log("--------------------------------")

// lançando nossos próprios erros
try {
    // Bloco de código que pode gerar um erro
    let resultado2 = num1 / num2;
    if (resultado2 === Infinity || resultado2 === NaN) {
        throw new Error('Divisão por zero');
    }
    console.log(resultado2);
} catch (erro) {
    // Bloco executado se ocorrer um erro no try
    console.error('1 - Ocorreu um erro:', erro.message);
} finally {
    // Bloco executado sempre, com ou sem erro
    console.log('Execução finalizada.');
}

// especificando o erro no catch
console.log();
console.log('--------------------------------');
const pessoa = "{nome: 'Diego',sobrenome: 'Souza',idade: 39}";
// const pessoa = [];
let p1;
try {
    // Código que pode gerar diferentes tipos de erro
    p1 = JSON.stringify(pessoa); // JSON inválido
} catch (erro) {
    console.log(p1);
    if (erro instanceof SyntaxError) {
        console.error('Erro de sintaxe ao analisar JSON:', erro.message);
    } else if (erro instanceof ReferenceError) {
        console.error('Variável não definida:', erro.message);
    } else {
        console.error('Erro inesperado:', erro);
    }
} finally {
}


//JSON.stringify(pessoa) - Transforma estruturas JavaScript (objetos, arrays, valores primitivos) em texto JSON válido
//JSON.parse(pessoa) - Converte uma string JSON em um objeto JavaScript, recuperando a estrutura original.


