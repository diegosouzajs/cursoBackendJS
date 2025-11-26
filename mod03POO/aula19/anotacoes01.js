function saudacao(){
    return 'Boa noite!';
    // isso nunca será executado pois a função é interrompida ao encontrar o return
    console.log('Durma bem!');
}

// saudacao();
// console.log(saudacao())

function somar(a, b){
    return a + b;
}
// Factory Function
// função que retorna um objeto
function pessoa(nome, lastName){
    return {
        nome: nome,
        sobrenome: lastName
    }
}

const p1 = pessoa('Diego', 'Souza')

// console.log(p1);

// Função construtora
// Nome com primeira letra maiúscula
// sua instanciação é feita através da palavra reservarda new

function maiorIdade(idade){
    if(idade >= 18) return `Maior de idade`;
    return 'Menor de idade';
};

// console.log(maiorIdade(18));
// console.log(maiorIdade(13));

// arrow function
const dobrar = n => n * 2;

dobrar(5);

// console.log(dobrar(20));
// clousure
function multiplicador(n){
    return function(num){
        return num * n;
    }
}

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);
const quadruplicar = multiplicador(4);

console.log(duplicar(10));
console.log(triplicar(10));
console.log(quadruplicar(10));


// Função construtora
function Multiplicar(n){
    this.multiplicador2 = n;
    this.multiplicacao = function(num) {
        return this.multiplicador2 * num;
    }
}

const conta = new Multiplicar(2);
const conta3 = new Multiplicar(3);

console.log(conta.multiplicacao(3));
console.log(conta3.multiplicacao(8));