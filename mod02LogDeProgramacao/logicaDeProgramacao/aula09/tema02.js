/*

Aula 09 - If, else if e else

Elabore um algorítimo que receba 4 notas com valores entre zero e 10.
Calcule a média das notas e imprima:
Aprovado se a média for maior que 7 pontos
Recuperação se a média for maior que 5 e menor que 7
Reprovado se a nota for menor que 5
*/

// notas 
const nota1 = 10;
const nota2 = 3;
const nota3 = 0;
const nota4 = 6.6;

// cálculo da média
const media = (nota1 + nota2 + nota3 + nota4)/4;

// condicionais
if (media >= 7){
    console.log(`Parabéns! Você foi APROVADO com média ${media.toFixed(2)}`);
}else if (media <7 && media >=5){
    console.log(`Sua média foi ${media.toFixed(2)}. Você está de RECUPERAÇÃO`);
}else{
    console.log(`Sua média foi ${media.toFixed(2)}. Você está REPROVADO`);
}

console.log();
console.log();


