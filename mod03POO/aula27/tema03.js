/*
Aula 27 - Encapsulamento e Modificadores de Acesso

Conceito:

Encapsulamento é o princípio da POO que consiste em proteger os dados internos
de um objeto, restringindo o acesso direto a seus atributos e expondo apenas 
o necessário através de métodos controlados.

Objetivo principal:

Garantir a integridade e consistência dos dados, evitando que partes externas 
do código alterem o estado interno de um objeto de forma incorreta ou insegura.


*/

class ContaBancaria {   
    // Atributos privados
    #saldo = 0;
 
    // Atributos protegidos (convenção)
    _ativa = false;

    constructor(tipo, numero, agencia) {
        this.tipo = tipo;       // 'cc' ou 'cp'
        this.numero = numero;
        this.agencia = agencia;
        this._ativa = true;
    }

    // Métodos públicos
    depositar(valor) {
        this.#validarConta();
        this.#validarValor(valor);

        this.#saldo += valor;
        return `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`;
    }

    sacar(valor) {
        this.#validarConta();
        this.#validarValor(valor);

        const limite = this.#obterLimite();

        if (valor > this.#saldo + limite) {
            throw new Error("Saldo insuficiente.");
        }

        this.#saldo -= valor;
        return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`;
    }

    verSaldo() {
        this.#validarConta();
        return this.#saldo;
    }

    encerrarConta() {
        if (this.#saldo !== 0) {
            throw new Error("A conta só pode ser encerrada com saldo zero.");
        }
        this._ativa = false;
    }
    // Métodos privados

    #validarValor(valor) {
        if (valor <= 0) {
            throw new Error("O valor deve ser maior que zero.");
        }
    }

    #validarConta() {
        if (!this._ativa) {
            throw new Error("Conta inativa.");
        }
    }

    #obterLimite() {
        return this.tipo === 'cc' ? 1000 : 0;
    }
}


const cc = new ContaBancaria('cc', '123-4', '321-4');
cc._ativa = 'OI, meu nome é fulano';
cc.depositar(50000);

// cc.saldo = 1000000;
// console.log(cc.verSaldo());
console.log(cc);