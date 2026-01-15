
/*
Uma empresa deseja criar uma plataforma que aceite diferentes formas 
de pagamento: cartão, Pix, boleto, etc.

Todas compartilham o mesmo conceito de pagamento, mas cada uma tem sua 
forma específica de processamento.

Além disso, o sistema deve poder processar qualquer objeto que tenha um método
processar(), mesmo que não herde da classe base (exemplo de duck typing).

Instruções:
    Crie uma classe base chamada Pagamento, que será abstrata:
    O construtor deve lançar um erro se alguém tentar instanciá-la diretamente.
    Ela deve ter um método processar(valor) que lança um erro, indicando que deve
    ser implementado pela subclasse.
    Crie três classes filhas:
        PagamentoCartao
        PagamentoPix
        PagamentoBoleto
    Cada uma deve sobrescrever o método processar(valor) com uma implementação específica.
    Crie uma função chamada executarPagamento(objeto, valor) que:
    Aceita qualquer objeto que possua o método processar().
    Verifica, antes de chamar o método, se o objeto realmente “sabe processar 
    pagamentos” (duck typing).
    Se não souber, exibe uma mensagem de erro.
    Teste o sistema com diferentes instâncias — inclusive um objeto literal que 
    não herda da classe base, mas possui o método processar().
*/

class Pagamento {
    constructor(){
        if (new.target === Pagamento){
            throw new Error ("A classe Pagamento é abstrata e não deve ser diretamente instanciada");
        }
    }
    processar(valor){
        throw new Error ("O método processar deve ser implementado na subclasse");
    }
}
// classe PagamentoCartão herda de Pagamento
class PagamentoCartao extends Pagamento {
   processar(valor){
    console.log(`Processando pagamento de R$ ${valor.toFixed(2)} no cartão de crédito.`)
   }
}


// classe PagamentoCartão herda de Pagamento
class PagamentoPix extends Pagamento {
   processar(valor){
    console.log(`Processando pagamento de R$ ${valor.toFixed(2)} no pix.`)
   }
}

// classe PagamentoCartão herda de Pagamento
class PagamentoBoleto extends Pagamento {
   processar(valor){
    console.log(`Gerando boleto no valor de R$ ${valor.toFixed(2)} para execução do pagamento.`)
   }
}

// Duck typing
// Aceita qualquer objeto que possua o método processar().
// Verifica, antes de chamar o método, se o objeto realmente “sabe processar 
// pagamentos” (duck typing).
// Se não souber, exibe uma mensagem de erro.
function executarPagamento(objeto, valor){
    if(objeto && typeof objeto.processar === "function"){
        objeto.processar(valor);
    } else{
        console.log("Error: o Objeto informado não possui o método processar")
    }
}

const objErrado = {
    processar: true,
    valor: 15
}

executarPagamento(objErrado, 300);

// testando a aplicação
const pagCartao = new PagamentoCartao();
const pagPix= new PagamentoPix();
const pagBoleto = new PagamentoBoleto();



executarPagamento(pagCartao, 300);
executarPagamento(pagPix, 250);
executarPagamento(pagBoleto, 160);

// const pg1 = new Pagamento();
// console.log(pg1.processar(500));

const pagamentoCash = {
    processar(valor){
        console.log(`O pagamento ${valor.toFixed(2)}, foi feito em dinheiro`)
    }
}

executarPagamento(pagamentoCash, 500);










// Classe abstrata

// Em JavaScript não há classes abstratas nativas, portanto a abstração é 
// simulada por meio de verificações no construtor e nos métodos.


// class Pagamento {
//     constructor() {
//         //new.target permite identificar se a classe base está sendo instanciada diretamente.
//         if (new.target === Pagamento) {
//             throw new Error("A classe Pagamento é abstrata e não pode ser instanciada diretamente.");
//         }
//     }

//     // O método processar() atua como um contrato, forçando sua implementação nas subclasses.
//     processar(valor) {
//         throw new Error("O método processar(valor) deve ser implementado pela subclasse.");
//     }
// }

// // as subclasses herdam da classe pai e dentro de cada uma delas 
// // sobrescrevemos o método processar


// class PagamentoCartao extends Pagamento {
//     processar(valor) {
//         console.log(`Processando pagamento de R$ ${valor.toFixed(2)} no cartão de crédito.`);
//     }
// }

// class PagamentoPix extends Pagamento {
//     processar(valor) {
//         console.log(`Processando pagamento de R$ ${valor.toFixed(2)} via Pix.`);
//     }
// }

// class PagamentoBoleto extends Pagamento {
//     processar(valor) {
//         console.log(`Gerando boleto no valor de R$ ${valor.toFixed(2)}.`);
//     }
// }

// // Função executarPagamento com duck typing
// // A função não verifica herança, apenas se o objeto possui o comportamento esperado.

// function executarPagamento(objeto, valor) {
//     if (objeto && typeof objeto.processar === "function") {
//         objeto.processar(valor);
//     } else {
//         console.error("Erro: o objeto informado não sabe processar pagamentos.");
//     }
// }

// // testando

// const pagamentoCartao = new PagamentoCartao();
// const pagamentoPix = new PagamentoPix();
// const pagamentoBoleto = new PagamentoBoleto();

// executarPagamento(pagamentoCartao, 150.00);
// executarPagamento(pagamentoPix, 75.50);
// executarPagamento(pagamentoBoleto, 220.90);
// console.log();


// // objeto literal com o método processar
// const pagamentoCustomizado = {
//   processar(valor) {
//     console.log(`Processamento alternativo de R$ ${valor.toFixed(2)} realizado com sucesso.`);
//   }
// };

// executarPagamento(pagamentoCustomizado, 99.99);
// console.log();


// // objeto literal sem o método processar
// const objetoInvalido = {
//   pagar(valor) {
//     console.log(valor);
//   }
// };

// executarPagamento(objetoInvalido, 50);
