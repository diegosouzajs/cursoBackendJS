/* Aula 02 - variáveis e constantes

Variaveis são nomes atribuidos a endereços de memória que podem
passar por uma reatribuição durante a execução de um código. É possível criar
uma variavel sem atribuir um valor a ela
    let nome;
    
Abaixo são listados alguns pontos importantes sobre variáveis
     * não podemos declarar a mesma variavel mais de uma vez
     * não podemos criar variaveis com palavras reservadas, como let, number, 
     * var, console, const, func, if, else, entre várias outras opções
     * variaveis precisam ter nomes significativos
     * variaveis não podem iniciar seu nome com número
     * recomenda-se que variaveis iniciem com letra minuscula
     * nomes delas não podem conter espaços ou traços 
     * let nome cliente ou let nome-cliente
     * são case-sensitive (como tudo no javascript)
     * variaveis com nomes compostos é bom utilizar a notação camelCase
     * cada palavra posterior a primeira, inicia com a letra maiuscula
     * as variaveis são case-sensitive (letra maiuscula e letra minuscula
     * fazem diferença)
     * não podemos redeclarar variaveis com let ou var
     * NÃO UTILIZE VAR, UTILIZE LET


Constantes, diferentemente das variaveis, não permite a reatribuição de valores.
Ao criar uma constante, sempre devemos atribuir um valor a ela.
    const nome = "Diego"; -> certo
    const sobrenome; -> errado

    Abaixo são listados alguns pontos importantes sobre constantes
    * Constantes são variaveis que não mudam o valor na execução do código
    * Não podemos criar constantes com palavras reservadas
    * não podemos começar constantes com um número
    * Constantes devem ter nomes significativos
    * não podem conter espaços ou traços
    * utilizamos camelCase como padrão de escrita
    * são case-sensitive (como tudo no javascript)
    * não podemos modificar o valor de uma constante
    * a constante precisa ser criada e inicializada ao mesmo tempo
    * const nome; //errado
    * const nome = 'diego' // certo
    * const assegura que o valor da variavel não seja modificado no decorrer do
    * código. Quando for necessário modificar o valor de uma variavel, utilize 
    * sempre o let
    * NÃO UTILIZE VAR, UTILIZE CONST 

Quando usar?
    Use const para tudo que puder
    Use let quando precisar
    Evite usar o var pois trata-se de um código legado

Ao criar uma variavel ou constante não é necessário definir o tipo dela.
Por ser uma linguagem de tipagem dinâmica somente a inclusão do valor fará
com que o javascript já defina o seu tipo automaticamente.
*/
// declaração de variável
var carro = "Fuscão preto"; // legado -> importante evitar o uso
let idade; // cria uma variavél com valor undefined
let nome = "Diego";

console.log(carro);
console.log(nome, idade);

nome = "Denise";
console.log(nome);

// console.log(idade);
// var carro = 'Porshe';
// declaração de constante
const sobrenome = "Rodrigues";
// sobrenome = 'Souza'; proibido

console.log(nome, sobrenome);


console.log(carro);