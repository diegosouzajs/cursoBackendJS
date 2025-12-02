// exemplo de factory function imediata
((nome, sobrenome) => {
// podemos ter funções imediatas nomeadas
// isso é útil para debugar o código
// (function(nome, sobrenome){ 
    const idade = 39;
    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
    console.log(pessoa);
    function nomeCompleto(){
        console.log(nome+' '+sobrenome);
    }
    nomeCompleto()
    
    
})('Diego','Souza');

const idade = 35;
console.log()
console.log(idade);
console.log()

// função clássica
function soma(n, m){
    let total = 0
    return total = n + m;
}

const total = soma(5, 9);
console.log('Total função clássica:', total);
console.log();

//função imediata
const result = (function (num1, num2){
    console.log('Olá, estou dentro de uma função imediata.')
    // console.log(a);
    let total = 0
    return total = num1 + num2;
})(10, 9);

console.log('Total função imediata:',result)
console.log();
console.log('Oi');


// função imediata em uma constante
const app = (function() {
    const nome = "Sistema XPTO";
    
    function iniciar() {
        console.log(`Iniciando ${nome}...`);
    }
    
    // executa automaticamente ao carregar
    iniciar();
    return 20;
})();

console.log();
console.log(app)