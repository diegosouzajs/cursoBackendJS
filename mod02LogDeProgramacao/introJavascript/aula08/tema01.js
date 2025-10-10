/* 
Aula 08 - Objetos

O que é um Objeto em Javascript

Um objeto é uma estrutura de dados que permite agrupar vários valores 
relacionados em uma única entidade.
Cada valor dentro do objeto é associado a uma chave (key), que funciona como 
um identificador único.
Os valores podem ser de qualquer tipo: primitivos (como números e strings), 
arrays, outros objetos ou funções (quando funções dentro de objetos são chamadas de métodos).

Características importantes

Agrupa dados relacionados de forma organizada.
Valores podem ser modificados se forem mutáveis, mesmo se o objeto for declarado com const.
Pode conter métodos (funções internas) e usar this para referenciar o próprio objeto.

Por que usar?

Com objetos, podemos agrupar dados relacionados em uma única estrutura, 
sem precisar declarar cada variável separadamente:
const pessoa1 = {
  nome: 'Diego',
  sobrenome: 'Souza',
  idade: 39
};

Para acessar os atributos, usamos a notação de ponto:
console.log(pessoa1.nome); // Diego

Métodos em Javascript

Métodos são funções que pertencem a objetos.
Eles permitem que o objeto execute ações ou manipule seus próprios dados.
Diferente de funções comuns, métodos estão associados diretamente a um objeto.
const pessoa = {
  nome: "Diego",
  idade: 39,
// saudacao é um método pertencente ao objeto pessoa
  saudacao: function() {
    console.log("Olá, " + this.nome + "!");
  }
};
pessoa.saudacao(); // Olá, Diego!

O que é this

this é uma palavra-chave especial que dentro de um método refere-se ao próprio objeto.
Permite acessar ou alterar os atributos do objeto sem precisar repetir o nome do objeto.
ex:
    // com o this, não precisamos mencionar o nome do objeto
    imc: (peso, altura) => {
        return this.peso/(this.altura**2)
    },

    // sem usar o this fazemos referência ao próprio objeto
    nomeCompleto: function (){
        return pessoa2.nome +" "+ pessoa2.sobrenome
    }
*/

const pessoa1 = {
    nome: 'Diego',
    sobrenome: 'Souza Rodrigues',
    idade: 39,
    altura: 1.72,
    peso: 80,
    // método de objeto
    imc: (peso, altura) => {
        return this.peso/(this.altura**2)
    },
    nomeCompleto: function (){
        return pessoa2.nome +" "+ pessoa2.sobrenome
    }
}

const pessoa2 = {
    nome: 'José',
    sobrenome: 'Souza Rodrigues',
    idade: 28,
    altura: 1.82,
    peso: 90,
    nomeCompleto: function (){
        return pessoa2.nome +" "+ pessoa2.sobrenome
    }
}


console.log(pessoa1);
console.log(pessoa1.imc());
console.log(pessoa1.nomeCompleto());
console.log();
console.log(pessoa2);
console.log(pessoa2.nomeCompleto());