/* 
Aula 03 - Aspas dentro de strings

No JavaScript, strings podem ser delimitadas por aspas simples ('), aspas duplas (") ou crase (`).
Se você usar aspas simples para delimitar a string, pode colocar aspas duplas dentro dela, e vice-versa.
Para usar o mesmo tipo de aspas dentro da string, é preciso usar caracteres de escape.

let frase1 = "Ela disse: 'Olá!'";
let frase2 = 'Ele respondeu: "Oi!"';
let frase3 = "Ele disse: \"Use aspas duplas\""; // com escape

Aula 03 - Caracteres de escape

Alguns caracteres especiais precisam de uma barra invertida (\) para serem 
usados dentro da string.
    \" → aspas duplas
    \' → aspas simples
    \\ → barra invertida
    \n → nova linha
    \t → tabulação

    let texto = "Linha 1\nLinha 2\n\tCom tabulação";
    console.log(texto);

*/

// aspas duplas dentro da string
let frase1 = 'Olá, boa noite! Estou estudando "Javascript"';

// aspas simples dentro da string
let frase2 = 'Olá, boa noite! Estou estudando \'Javascript\'';

// aspas duplas dentro da string utilizando \.
// tabulação no ínicio da frase
let frase3 = "\tOlá, boa noite! Estou estudando \"Javascript\"";

// aspas simples dentro da string
let frase4 = "Olá, boa noite! Estou estudando 'Javascript'";

// aspas duplas dentro da string utilizando template strings.
// Quebra de linha utilizando \n. Contudo, em template strings é dispensável
// a utilização de \n ou \t pois as quebras de linha inseridas ao pressionar
// enter e os espaçamentos, são reconhecidos
let frase5 = `Olá, boa noite! Estou \n"estudando" 'Javascript'`;
let frase6 = `Olá, boa noite! 
Estou "estudando"           'Javascript'`;

console.log(frase1);
console.log(frase2);
console.log(frase3);
console.log(frase4);
console.log(frase5);
console.log(frase6);




