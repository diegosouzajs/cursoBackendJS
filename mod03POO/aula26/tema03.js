/*
Aula 26 - Factory Function + prototype

As factory functions e o uso combinado com prototypes representam um 
padrão essencial para estruturar código reutilizável e eficiente em JavaScript. 
Esse modelo é particularmente útil quando buscamos criar múltiplas instâncias 
de objetos sem o custo de duplicar métodos na memória, e ao mesmo tempo manter 
uma sintaxe mais flexível que a de funções construtoras.
*/

function criarPessoa(nome, idade) {
    return {
        nome,
        idade,
        apresentar() {
            return `Olá, eu sou ${this.nome}.`;
        }
    };
}

const p1 = criarPessoa("Ana", 30);
const p4 = criarPessoa("Diego", 30);
const p5 = criarPessoa("Carlos", 23);
console.log(p1);
console.log(p4);
console.log(p5);

// O JavaScript permite associar manualmente um prototype a objetos criados por 
// factories usando Object.create(). Assim, objetos compartilham métodos em comum,
// reduzindo o consumo de memória e mantendo o ganho de flexibilidade das factories.

const pessoaProto = {
    apresentar() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    },
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }

};

function criarPessoa2(nome, sobrenome, idade){
    const obj = Object.create(pessoaProto);
    obj.nome = nome;
    obj.idade = idade;
    obj.sobrenome = sobrenome
    return obj;
}

const p2 = criarPessoa2("José",'Maria', 35);
const p3 = criarPessoa2("Maria",'José', 32);

console.log(p2);
console.log(p2.apresentar());
console.log(p2.nomeCompleto());
console.log(p3);
console.log(p3.apresentar());
console.log(p3.nomeCompleto());