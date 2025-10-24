/*
Aula 12 - Atribuição por desestruturação (Arrays)

A atribuição por desestruturação é um recurso do ECMAScript 6 (ES6) que 
permite extrair valores de arrays (ou propriedades de objetos) e atribuí-los 
a variáveis individuais de maneira simples e direta.
No caso dos arrays, a desestruturação usa a posição dos elementos para fazer 
a atribuição.

Para que serve
Simplificar a extração de valores de arrays.
Evitar várias linhas de código para acessar índices.
Melhorar a legibilidade e clareza do código.

Rest operator (...)
O rest operator (...) é uma sintaxe do JavaScript que permite agrupar múltiplos 
elementos em uma única variável.
Ele é representado por três pontos (...) e aparece normalmente em atribuições 
por desestruturação (arrays ou objetos) ou em parâmetros de funções.
}
*/

// Exemplo básico

const numeros = [10, 20, 30, 40];
const [num1, num2, num3, num4] = numeros;

console.log(num1); // 10
console.log(num2); // 20
console.log(num3); // 30
console.log(num4); // 40

// Sem desestruturação, precisaríamos de:

const n1 = numeros[0];
const n2 = numeros[1];
const n3 = numeros[2];
const n4 = numeros[4];

// Pulando elementos
// Podemos ignorar posições específicas:

const listaNumeros = [10, 20, 30, 40];
const [primeiro, , ,quarto, quinto] = listaNumeros;

console.log(primeiro); // 10
console.log(quarto); // 30

// se fazemos a desestruturação e referenciamos um item inexistente
// automaticamente a atribuído a ele o valor undefined
console.log(quinto); // undefined

// Valores padrão
// Caso o array não tenha elementos suficientes, é possível definir valores padrão:

const listaDeNumeros = [10, 2, 8];
const [a = 0, b = 5, c = 20, d] = listaDeNumeros;

console.log(a); // 10
console.log(b); // 0
console.log(c); // 0
console.log(d); // 0

// Uso com rest operator(...)
// Se recebemos uma lista, podemos efetuar a desestruturação e armazenar o 
// restante da lista em uma variavel ou constante.

const maisNumeros = [10, 20, 30, 40, 50];
let [nume1,nume2, ...resto ] = maisNumeros;

console.log(nume1); // 10

nume1 = 5;

console.log(nume1); // 10
console.log(maisNumeros);
console.log(nume2);  // 20
console.log(resto);    // [30, 40, 50]

const [nume3, nume4] = resto;

console.log(nume3)
console.log(nume4)

// Troca de valores
// A desestruturação também é ótima para trocar valores entre variáveis 
// sem precisar de variável auxiliar:

let x = 1;
let y = 2;

console.log(x, y);

y = x;
x = y

console.log(x, y);

[x, y] = [y, x];

console.log(x); // 2
console.log(y); // 1

// Rest operator (...)
// Copiando uma lista
// Muitas vezes precisaremos copiar uma lista

const frutas1 = ['Pera','Maçã','Uva'];

// esta atribuição não realiza uma cópia
// a única coisa que fazemos é uma atribuição à nova constante
// para o mesmo enderço de memória da lista frutas1
// desta maneira, ao fazer uma alteração na lista frutas2, também alteraremos
// a lista frutas1
const frutas2 = frutas1;
frutas2[0] = 'Jabuticaba';

console.log('Frutas1: ',frutas1);
console.log('Frutas2: ',frutas2);

// Para efetuar uma cópia também utilizamos o rest operator (...)
// podemos incluir novos itens, inserindo itens antes ou depois do rest operator
const frutas3 = ['kiwi',... frutas1,'laranja'];
frutas3.push('Mamão'); // adiciona mamão ao final da lista
frutas3.push('goiaba');
frutas3.push('manga');
frutas3.push('queijo');
console.log('Frutas3: ',frutas3);

// Usamos o rest operator quando:
// Queremos capturar o “restante” dos elementos de um array ou objeto:

const outrosNumeros = [10, 20, 30, 40];
const [primeiroNum, ...restoNum] = outrosNumeros;
console.log(primeiroNum); // 10
console.log(restoNum);    // [20, 30, 40]

// Precisamos trabalhar com número variável de argumentos em funções:
// podemos utilizar o rest operator quando precisamos pegar um número indefindo
// de parâmetros

function soma(... numeros) { 
  return numeros.reduce((acc, n) => acc + n, 0);
}

console.log(soma(1, 2, 3, 4, 5 , 6, 10)); // 10
