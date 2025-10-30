/*

4. Escreva um programa que calcule a média geométrica entre três números informados
pelo usuário ( a fórmula do cálculo da média geométrica é:
Math.pow(num1 * num2 * num3, 1/3)

*/

const num1 = Number(prompt('Informe o primeiro número: '));
const num2 = Number(prompt('Informe o segundo número: '));
const num3 = Number(prompt('Informe o terceiro número: '));

function imprimirResultado(media){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML += `<p> Média geometríca dos números</p>`;
    resultado.innerHTML += `<p> ${media.toFixed(2)}</p>`;
}

function mediaGeometrica(n1, n2, n3){
    const media = Math.pow(n1 * n2 * n3, 1/3);
    imprimirResultado(media);  
    return media.toFixed(2);
}

console.log(mediaGeometrica(num1, num2, num3));
