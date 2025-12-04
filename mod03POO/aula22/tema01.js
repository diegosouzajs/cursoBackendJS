/* 
Funções construtoras (constructor function)

São similares as factories functions. Criam novos objetos
A única de diferença entre a função fabrica e a função construtora
é que a função fábrica é uma função normal que retorna um objeto voluntáriamente
Na função construtora, ela já faz muitas coisas automáticas, ela cria
objetos, retorna objetos.

Função construtora -> retorna objetos
Função fábrica -> retorna objetos

Na função construtora, mudamos a convenção de escrita da função
ela deve ser iniciada com letra maíuscula. Na função construtora
somos obrigados a usar o new na instância da função
construtora -> Pessoa (new)
fabrica -> criaPessoa
A função construtora não usa , mas sim ;
- Factory Function-> vírgula
- Função construtora -> ponto e vírgula

Ambas são um molde para gerar novos objetos

O corpo da função já será o objeto a ser criado

A palavra New
- cria um novo objeto vazio
- faz o this apontar para o objeto que está sendo utilizado

Podemos criar atributos privados (fábria de funções e funções contrutoras). 
- atributos que só estarão disponíveis dentro da minha função.

Adicionar método no prototype da função construtora

Pessoa.prototype.saudacao = function(){
    return `Olá ${this.nome}`;
}


*/

// função construtora -> começa com nome maíusculo
function Pessoa(nome, sobrenome){
    // const ou let -> atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){
        return('Alguma coisa interna')
    };

    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    };
}



// para criar um novo objeto precisamos usar new
const p1 = new Pessoa('diego','rodrigues');

// console.log(p1.metodoInterno()); // gera erro
console.log(p1.sobrenome);

console.log('\n',p1.saudacao());

