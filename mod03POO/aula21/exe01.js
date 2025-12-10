/*
Implemente uma factory function responsável por criar objetos que representem 
contas bancárias. Cada conta deverá armazenar informações do cliente 
(nome e sobrenome), dados bancários (agência, número e tipo de conta) e 
ainda manter o controle interno de saldo através de variáveis privadas, 
protegidas por closure.
A função deve retornar um objeto que contenha:
  Método de depósito, que aumenta o saldo interno.
  Método de saque, que permita retirar valores considerando o limite do cheque 
  especial apenas quando o tipo da conta for “cc” (conta corrente). O método 
  deve validar se o valor solicitado pode ser sacado com base no saldo + limite disponível.
  Getter verSaldo, que retorne o saldo atual sem permitir modificações externas.
  Getter nomeCompleto, que concatene nome e sobrenome do titular.
Após criar uma conta, realize depósitos, tente diferentes valores de saque e, 
por fim, implemente uma função imprimir() para exibir os dados principais da 
conta, incluindo o nome completo, informações bancárias e o saldo atual.

*/

function criarConta (nome, sobrenome, agencia, numero, tipo){
  let saldoInicial = 0; // variavel privada
  let limiteDisponivel = tipo === 'cc'?1000: 0;
  const conta = {
    nome,
    sobrenome,
    agencia,
    numero,
    tipo,

    deposito(valor){
      return saldoInicial += valor;
    },

    saque(valor){
      if(valor >= (saldoInicial + limiteDisponivel)){
        return `Saque inválido. Saldo insuficiente`
      }
      return saldoInicial -= valor;
    },

    get verSaldo(){
      return saldoInicial;
    },

    get nomeCompleto(){
      return `Cliente: ${nome} ${sobrenome}`;
    },

    imprimir(){
      const tipoConta = tipo === 'cc'?'Conta Corrente':'Poupança';
      console.log('Nome do cliente:', this.nomeCompleto);
      console.log('Conta tipo: ', tipoConta);
      console.log('Número da conta', numero, 'Agência: ',agencia);
      console.log('Disponível para saque:', saldoInicial + limiteDisponivel);
    }
  }
  return conta;
}

const conta1 = criarConta('Diego','Souza','222-2','10111-1','cc');
conta1.deposito(10000);
conta1.saque(9000);
conta1.saque(1100);
// console.log(conta1.saque(910));

conta1.imprimir();


conta1.verSaldo;












// function conta(nome, sobrenome, agencia, numero, tipo) {
//   let saldo = 0;
//   let limiteChequeEspecial = 1000;

//   const contaObj = {
//     nome,
//     sobrenome,
//     agencia,
//     numero,
//     tipo,

//     deposito(valor) {
//       saldo += valor;
//     },

//     sacar(valor) {
//       const limite = tipo === 'cc' ? limiteChequeEspecial : 0;
//       const limiteTotal = saldo + limite;

//       if (valor <= limiteTotal) {
//         saldo -= valor;
//         return `Você sacou R$ ${valor}. Saldo atual R$ ${saldo}`;
//       }
//       return `Você tentou sacar R$ ${valor}. Seu saldo é insuficiente: Saldo atual R$ ${saldo}`;
//     },

//     get verSaldo() {
//       return saldo;
//     },
//     get nomeCompleto() {
//       return `${nome} ${sobrenome}`;
//     }
//   };

//   return contaObj;
// }

// const c1 = conta('Diego', 'Souza', 27, 10, 'cc');

// c1.deposito(2000);
// c1.deposito(1000);
// console.log(c1.sacar(5000));
// console.log(c1.sacar(500));

// function imprimir(conta) {
//   const { agencia, numero, tipo, verSaldo, nomeCompleto } = conta;
//   console.log('Nome:', nomeCompleto);
//   console.log(`Agência: ${agencia} - Conta: ${numero} - Tipo: ${tipo}`);
//   console.log('Saldo atual: R$', verSaldo)
// }

// imprimir(c1);

// console.log(c1.saudacao());
