/*
Aula 01 - console.log e comentários

console.log é uma função javascript que permite imprimir conteúdo no console.
Sua chamada é da seguinte forma:
    console.log(conteudo);

- Onde "conteúdo" pode ser um valor literal bruto , variavel,
- constante, objetos, etc. Ou seja, podemos imprimir qualquer coisa com o
     console.log
- Cada console.log insere, automaticamente, uma quebra de linha em seu final.
*/

// Formas de passar string literal para o console.log
console.log('Olá, mundo!');
console.log("Olá, mundo com aspas duplas!");
console.log(`Olá, mundo com aspas duplas!`);


// Imprimindo aspas no console.log
console.log('Olá, "mundo"'); //aspas duplas
console.log("Olá, 'mundo'"); //aspas duplas
console.log(`"Olá", 'mundo'`); //aspas duplas e aspas simples
console.log("Olá, \"mundo\""); //aspas duplas e aspas simples
console.log('Olá, \'mundo\''); //aspas duplas e aspas simples


/* 
Comentários

Comentários são trechos do código que são ignorados pelos motores do javascript
Uma linha comentada não é utilizada na execução do algoritimo
Um comentário nunca é exibido para o usuário
Comentários são uteis para explicar para outros desenvolvedores 
e até para nós mesmos, sobre o que o código específico faz
/*

// este é um comentário de uma linha

/*
Este é um comentário de bloco
Tudo que estiver aqui será ignorado pela engine(motor) do javascript.
Não importa a quantida de linhas. 
*/

/**
 * Este tipo de comentário em bloco é comumente usado na linguagem java.
 * É adotado quando você deseja documentar formalmente o código
 * para que outras pessoas (ou ferramentas) entendam sua finalidade.
 * Ele não é apenas um comentário para programadores, mas um meio de gerar 
 * documentação oficial automaticamente (para a linguagem java). 
 */