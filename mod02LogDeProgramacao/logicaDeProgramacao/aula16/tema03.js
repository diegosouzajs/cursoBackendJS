/*
Aula 16 - Estrutura de repetição

For... of

O for...of é usado para percorrer elementos iteráveis, como arrays, strings, 
Map, Set e outros objetos que implementam o protocolo iterável. 
Ele foi introduzido no ES6 e é diferente do for...in, que percorre as chaves.

Estrutura básica

for (let elemento of iteravel) {
  // bloco de código usando elemento
}

elemento → recebe cada valor do iterável a cada iteração.
iteravel → array, string, Map, Set ou qualquer objeto que implemente o protocolo iterável.

Cada iteração entrega diretamente o valor do elemento (fruta), sem precisar acessar índices.


O for...of não funciona com objetos puros diretamente (que não são iteráveis).
Ele não precisa de break para percorrer valores normalmente, mas break e continue ainda podem ser usados.
É ideal quando queremos focar nos valores e não nos índices ou chaves.


*/

// For... of

// diferentemente do for clássico, o for of entrega diretamente
// o valor contido no iteravel
const numeros = [10,25,30,36,45,89];
 
for (let i of numeros){
    console.log(`O valor contido é ${i}`);
}

// o for of não funciona em objetos.
// ao tentar utilizar o método length, o objeto sempre retorna undefined
// As propriedades do objeto não ficam visiveis ao for... of
// simplificando, objetos não possui o método interno [Symbol.iterator].
// Isso acontece porque o interpretador procura funcionario[Symbol.iterator] — e não encontra.

const funcionario = {
    nome: 'Diego',
    sobrenome: 'Rodrigues',
    cargo: 'Desenvolvedor',
    empresa:'IFMG',
    idade: 39,
    email: 'diego.souza@ifmg.edu.br',
    salario: 'mixaria',
    admissao: '29/02/2011',
    endereco: {
        rua: 'Rua x',
        numero: 210,
        bairro: 'Centro'
    }
    // chave: 'Oi'
};

for (propriedade of funcionario){
    for (let item in propriedade){
        console.log(item, propriedade[item]);
    }
}

//
console.log(funcionario.length);

for (let i; i < 9; i++){
    console.log
}