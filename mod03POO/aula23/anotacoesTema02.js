function* calculadora(num1, num2){
    yield `${num1} + ${num2} = ${num1 + num2}`;
    yield `${num1} - ${num2} = ${num1 - num2}`;
    yield `${num1} x ${num2} = ${num1 * num2}`;
    yield `${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`;
}

const calc = calculadora(15,2);
// console.log(calc);
console.log(calc.next().value);
console.log(calc.next().value);
console.log(calc.next().value);
console.log(calc.next().value);
console.log(calc.next())