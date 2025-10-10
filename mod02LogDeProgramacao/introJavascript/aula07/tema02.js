/* 

Aula 07 - Funções em JavaScript: Uma introdução ao básico

O que é uma função
    Uma função é um bloco de código reutilizável que realiza uma tarefa específica.
    Pode receber entradas (parâmetros) e retornar saídas (valores).
    Funções ajudam a organizar o código, evitando repetição.

Sintaxe básica
    function nomeDaFuncao(param1, param2) {
    // código a ser executado
    return resultado; // opcional
    }

    function → palavra-chave para declarar uma função
    nomeDaFuncao → identificador da função
    param1, param2 → valores de entrada
    return → retorna um valor (opcional)

Chamando uma função

    Para executar a função, usamos o nome seguido de parênteses:

    function saudacao(nome) {
    console.log("Olá, " + nome + "!");
    }

    saudacao("Diego"); // Olá, Diego!

    
    
Funções com retorno

    Funções podem retornar valores que podem ser armazenados:
    function soma(a, b) {
        return a + b;
    }

    let resultado = soma(5, 3);
    console.log(resultado); // 8

    Toda função pode usar a palavra-chave return para devolver um valor.
    Se o return não for usado, ou se a função não especificar nenhum valor, 
    o JavaScript retorna undefined automaticamente.
Funções anônimas
    Uma função anônima é uma função sem nome.
    Em vez de ser declarada com um identificador, ela geralmente é armazenada 
    em uma variável, passada como parâmetro para outra função, ou usada 
    em eventos e callbacks.

    const multiplicar = function(a, b) {
    return a * b;
    };

    console.log(multiplicar(2, 4)); // 8


Arrow functions (ES6)
    Uma arrow function (função de seta) é uma sintaxe mais curta para declarar funções em JavaScript, introduzida no ES6.
    Ela é especialmente útil para funções anônimas e callbacks.

    Características principais
    Sintaxe curta usando =>.
    Não possui seu próprio this, herdando o this do contexto onde foi criada.
    Ideal para funções simples e expressões curtas.
    Pode ser armazenada em variáveis, passada como callback ou usada imediatamente.
    
    Exemplo1: 
    const soma = (a, b) => a + b;
    console.log(soma(2, 3)); // 5

    Exemplo 2:
    const saudacao = (nome) => {
    const mensagem = "Olá, " + nome + "!";
    console.log(mensagem);
    };
    saudacao("Diego"); // Olá, Diego!


*/


// Função tradicional com parâmetros
function soma(x, y) {
    return x + y;
}

const num1 = 4;
const num2 = 6;
const resultSoma = soma(num1, num2);
console.log('Resultado da soma: ', resultSoma);

soma(num1, num2); // não apresenta valor pois a função está retornando(return)
// e não imprimindo (console.log)


// função tradicional que não recebe parâmetros
function saudacao() {
    console.log('Olá! Seja bem-vindo(a)');
}

// #--- Função anônima ---#
//Função anônima
const multiplicacao = function (a, b){
    return a * b;
};
console.log(multiplicacao(num1, num2));

//Função anônima sem parâmetros
const ola = function (){
    console.log('Boa noite.')
};
ola();


// Função anônima
const endereco = function (rua, bairro, cidade, estado){
    const enderecoCompleto = `${rua}, ${bairro}, ${cidade}\\${estado}`;
    return enderecoCompleto
};

//chamada da função anônima
console.log(endereco('Rua Pandiá Calógeras, 898', 
    'Bauxita', 
    'Ouro Preto', 
    'Minas Gerais'
));

// função anônima que retorna objeto
const endereco2 = function (rua, bairro, cidade, estado){
    return {
        'rua': rua,
        'bairro': bairro,
        'cidade': cidade,
        'estado': estado,
    }
};
// chamada da função anônima
console.log(endereco2(
    'Rua Pandiá Calógeras, 898', 
    'Bauxita', 
    'Ouro Preto', 
    'Minas Gerais'
));

// #--- Arrow Function ---#

const IMC = (peso, altura) => {
    const imc = peso /(altura ** 2);
    return imc.toFixed(2);
};

console.log('IMC: ',IMC(80,1.72));




