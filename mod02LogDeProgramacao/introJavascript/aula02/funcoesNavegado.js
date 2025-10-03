const nome = prompt('Informe seu nome:');
alert(`Olá, ${nome}. Seja bem-vindo(a)!`)
const confirmar = confirm('Você é maior de idade?');


if (confirmar) {
    console.log('Fique a vontade');
}else{
    console.log('Tente no próximo ano!');
}

const numero = prompt('Informe um número:');
const numero2 = prompt('Informe um novo número:');

const soma = Number(numero) + Number(numero2)

alert(`Soma dos números ${soma}`);