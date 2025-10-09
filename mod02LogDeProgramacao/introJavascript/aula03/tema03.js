/*
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

// utilizando a barra invertida (\) e a tabulação (\t) dentro da string
const endereco = 'Rua pandiá Calógeras, Ouro Preto\\MG - \tIFMG';
console.log(endereco);
console.log("");

// utilizando \n dentro da string
const bairro = 'Bauxita \nCEP: 35420-00';
console.log(bairro);
console.log("");

// inserindo quebra de linha e tabulação dentro da string utilizando template strings
const enderecoCompleto = `${endereco},
 
        ${bairro} `;
console.log(enderecoCompleto);