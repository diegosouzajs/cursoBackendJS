/*
8. Escreva um programa que calcule a equação de segundo grau 
(ax2 + bx + c = 0) utilizando
as fórmulas de Bhaskara.

delta = b**2-4ac
x1 = (-b + delta ** 0.5) /2a
x2 = (-b - delta ** 0.5) /2a

*/
const a = 3;
const b = -2;
const c = -8;

const delta = b**2-4*a*c;

function xLinha(delta){
    const x1 = (-b + delta ** 0.5) / (2*a);
    return x1.toFixed(2);
}

function xDuasLinhas(delta){
    const x2 = (-b - delta ** 0.5) / (2*a);
    return x2.toFixed(2);
}

console.log('Valor de delta',delta);
console.log("Valor de x'",xLinha(delta));
console.log('Valor de x"',xDuasLinhas(delta));

// comentário apenas




