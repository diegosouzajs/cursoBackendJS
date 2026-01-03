/*

Aula 27 - Herança com classes em Javascript

A herança é um dos principais conceitos da Programação Orientada a Objetos (POO).
Ela permite reutilizar código e compartilhar comportamentos entre diferentes 
lasses, criando relações hierárquicas entre elas.
Em JavaScript, a herança é implementada por meio da herança prototipal, e 
as classes (ES6) fornecem uma sintaxe mais simples e legível para esse mecanismo.

A herança ocorre quando uma classe (classe filha ou subclasse) estende outra 
classe (classe pai ou superclasse), herdando seus atributos e métodos.

Palavra-chave: extends
Chamada do construtor da superclasse: super()


*/

// Herança em níveis (cadeia de subclasses)
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.status = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
        return `${this.nome} foi ligado`;
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já está desligado');
            return;
        }
        this.ligado = false;
        return `${this.nome} foi desligado`;
    }
}


class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, marca, modelo){
        super(nome);
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
    }
}


const s1 = new Smartphone('Galaxy', 'Prata','Samsung', 'Note');

// console.log(s1);


class Tablet extends Smartphone{
    constructor(nome, cor, marca, modelo, polegadas){
        super(nome, cor, marca, modelo);
        this.polegadas = polegadas;
    }
}

const t1 = new Tablet('Tablet 1', 'Preta', 'Samsung','Tipo 1', 14);

console.log(t1.ligar());


// Herança múltipla e limitação

// O JavaScript não suporta herança múltipla direta (uma classe não pode 
// estender mais de uma classe ao mesmo tempo).
// No entanto, é possível simular herança múltipla por meio de mixins — funções 
// que “injetam” comportamentos em uma classe.

// Define-se uma função arrow chamada Voar.
// Essa função recebe um parâmetro Base, que representa uma classe base.
// A função retorna dinamicamente uma nova classe que estende (extends) a classe Base.
// Esse padrão é conhecido como mixin baseado em funções, permitindo adicionar 
// comportamentos a classes sem recorrer à herança múltipla direta.

const Voar = Base => class extends Base {
  voar() {
    console.log(`${this.nome} está voando! 🕊️`);
  }
};

class Animal {
  constructor(nome) {
    this.nome = nome;
  }
}

// Declara a classe Passaro.
// Em vez de estender diretamente Animal, ela estende o resultado da chamada Voar(Animal).
// O JavaScript avalia Voar(Animal) primeiro, produzindo uma nova classe que:
// herda de Animal;
// inclui o método voar.
// Assim, Passaro herda estado (nome) de Animal e comportamento (voar) do mixin.

class Passaro extends Voar(Animal) {}
const p = new Passaro("Papagaio");
p.voar(); // "Papagaio está voando! 🕊️" 