/*
Elabore um algorítimo que receba 4 notas com valores entre zero e 10.
Calcule a média das notas e imprima:
Aprovado se a média for maior que 7 pontos
Recuperação se a média for maior que 5 e menor que 7
Reprovado se a nota for menor que 5
*/

const nota1 = 10;
const nota2 = 10;
const nota3 = 6.9;
const nota4 = 3.0;

const media = (nota1 + nota2 + nota3 + nota4)/4;

if (media >= 7){
    console.log(`Média das notas: ${media.toFixed(2)}. APROVADO`);
} else if (media >= 5){
    console.log(`Média das notas: ${media.toFixed(2)}. RECUPERAÇÃO`);
}else{
    console.log(`Média das notas: ${media.toFixed(2)}. REPROVADO`);
}