/*

Aula 24 - Programação Orientada a Objetos

A Programação Orientada a Objetos (POO) é um paradigma que organiza o código em
objetos, que representam entidades do mundo real.

Cada objeto combina dados (atributos) e comportamentos (métodos),
tornando o sistema mais intuitivo, modular e fácil de manter.

Em vez de pensar em “funções que manipulam dados”, a POO faz o programador 
pensar em “objetos que possuem dados e sabem o que fazer com eles”.


 */

// abordagem procedural

// Dados e funções separados
let nome = "João";
let saldo = 1000;

function depositar(valor) {
  saldo += valor;
}

function verSaldo() {
  console.log(`Saldo atual: R$ ${saldo}`);
}

depositar(200);
verSaldo(); // Saldo atual: R$ 1200


class Conta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  verSaldo() {
    console.log(`Saldo de ${this.titular}: R$ ${this.saldo}`);
  }
}

const contaJoao = new Conta("João", 1000);
contaJoao.depositar(200);
contaJoao.verSaldo(); // Saldo de João: R$ 1200
console.log(contaJoao);
console.log(Conta.prototype);