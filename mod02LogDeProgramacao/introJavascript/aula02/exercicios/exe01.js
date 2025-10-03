/*
Exercícios sobre tipos primitivos e operadores básicos

Crie um programa em JavaScript que:
    Crie as seguintes variáveis:
        nome (string) com o valor de um nome qualquer.
        idade (number) com o valor de sua idade.
        altura (number) com sua altura em metros.
        estudante (boolean) indicando se você é estudante ou não.
        peso (number)
    Utilize operadores aritméticos para calcular:
        O dobro da idade.
        A metade da altura.
        o IMC: peso / (altura * altura);
Monte uma frase concatenando as variáveis em uma string no seguinte formato (cada uma em um console.log):
    "Meu nome é nome, tenho idade anos, minha altura é altura metros."
    "Sou estudante: estudante";
    "Idade em dobro: dobroIdade";
    "Metade da altura: metadeAltura"
    “IMC: imc";
Mostre todos os resultados no console.


*/

const nome = 'Diego';
const idade = 39;
const altura = 1.72;
const estudante = true;
const peso = 80;

peso = 60;

//dobro da idade
const dobroIdade = idade * 2;
const metadeAltura = altura / 2;
const imc = peso /(altura ** 2);

console.log("Meu nome é", nome,", tenho ",idade, "anos, minha altura é",
     altura," metros.");
    
console.log("Meu nome é " + nome +", tenho "+idade+" anos, minha altura é"+
     altura+" metros.");

console.log(`Meu nome é ${nome}, tenho ${idade} anos, minha altura é 
    ${altura} metros`);

console.log('Sou estudante: ',estudante);
console.log('Idade em dobro: ',dobroIdade);
console.log('Metade da altura: ',metadeAltura);
console.log('IMC: ',imc.toFixed(3));
console.log('IMC: ',imc);


