
const dado = 'Ativo';
// clousure
function funcionario(nome){
    return function(sobrenome){
        return `${nome} ${sobrenome}`;
    }
}

// instância da função com clousure
const p1 = funcionario('Diego');
const p2 = funcionario('Wanda');
const p3 = funcionario('José');

// chamada da instância passando o parâmetro para a função anônima
console.log(p1('Souza'));
const c1 = p2('Almeida');
console.log(p3('Moura'));

// console.dir exibe no navegador o escopo do parâmetro informado
console.dir(p1);
console.dir(p2);
console.dir(p3);

function contador() {
  let count = 0;
//   console.log('Valor atual do count', 0)

  return function() {
    count++;
    console.log(count);
  };
}

const incrementar = contador();

incrementar(); // 👉 1
incrementar(); // 👉 2
incrementar(); // 👉 3
incrementar(); // 👉 4
incrementar(); // 👉 5
incrementar(); // 👉 6
incrementar(); // 👉 7
incrementar(); // 👉 8
incrementar(); // 👉 9
incrementar(); // 👉 10
incrementar(); // 👉 11
incrementar(); // 👉 12

function banco(){
    let saldo = 100;
    return {
        depositar(valor){
            saldo += valor
        },
        consultar(){
            console.log('Saldo da conta: R$',saldo);
        },
        sacar(valor){
            saldo -= valor;
        }
    };
}


const conta = banco();
conta.depositar(5000);
conta.depositar(200);
conta.consultar();
conta.sacar(500);
conta.consultar();