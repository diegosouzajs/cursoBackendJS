/* 
Aula 27 - Tratamento de Exceções em POO 
*/


// Classe base de erro
class ErroAplicacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = this.constructor.name;
  }
}

// Exceção específica
class SaldoInsuficienteError extends ErroAplicacao {
  constructor(saldo, valor) {
    super(`Saldo insuficiente! Saldo atual: R$${saldo}, tentativa de saque: R$${valor}`);
  }
}

class SaqueErrorString extends ErroAplicacao{
  constructor(saldo, valor){
    super(`O valor informado não é um número válido: ${valor}`);
  }
}

class ContaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  sacar(valor) {
    try {
      if (valor <= 0) throw new Error("Valor de saque inválido!");
      if (valor > this.saldo) throw new SaldoInsuficienteError(this.saldo, valor);
      if(typeof valor !== "number") throw new SaqueErrorString(this.saldo, valor);
      
      this.saldo -= valor;
      console.log(`💰 Saque de R$${valor} realizado com sucesso.`);
    } catch (erro) {
      if (erro instanceof SaldoInsuficienteError) {
        console.error(`🚫 Erro financeiro: ${erro.message}`);
      } else if (erro instanceof SaqueErrorString) {
        console.error(`🚫 Erro Valor Inválido: ${erro.message}`);
      } else {
        console.error(`⚠️ Erro inesperado: ${erro.message}`);
      }
    } finally {
      console.log(`Saldo atual: R$${this.saldo}`);
    }
  }
}

// Teste
const conta = new ContaBancaria("Diego", 500);
conta.sacar(100);   // saque normal
conta.sacar(700);   // exceção customizada
conta.sacar(-50);   // erro genérico
conta.sacar('fasdfasf');   // erro genérico