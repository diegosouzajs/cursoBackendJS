/* 
Aula 19 - Escopo lexico

O escopo léxico (ou escopo estático) é o contexto onde uma variável é 
declarada e define onde ela pode ser acessada no código.

Em outras palavras:
O JavaScript organiza e “lembra” onde as variáveis foram criadas, e as funções 
têm acesso às variáveis do local onde foram declaradas, não de onde são executadas.

Por que “léxico”?
O termo “léxico” vem de lexical, que se refere ao local físico no código fonte.
O escopo é determinado durante a escrita do código (tempo de compilação), não durante a execução.
Isso significa que o local onde você escreve a função define quais variáveis ela pode enxergar.



Dentro da função posso acessar variaveis vizinhas a ela
Se não encontra a variavel no escopo local, vai busca-la até encontrar
se não encontrar apresentará o ReferenceError

*/
const nome = 'Diego';
console.log('1')
function falaNome() {
    const sobrenome = 'José';
    console.log(nome, sobrenome);
}
falaNome();
// console.log(sobrenome);

console.log();
// console.log('Função falaNome()');
// falaNome()
// console.log();

function usaFalaNome() {
    const nome = 'Fernandes';
    falaNome(); // chamada da função
}

console.log('Função usaFalaNome()');
usaFalaNome();
console.log();
// console.log();
// // console.log(sobrenome);



// //factory function
// function pessoa(nome, sobrenome){
//     return{
//         nome, sobrenome
//     }
// }

// const p1 = pessoa('Carlos','Sanches');
// console.log(p1.nome);

// falaNome();

const numeros = [1, 2, 3, 4, 5, 6];

const listaPares = [];
for (let i of numeros) {
    if (i % 2 === 0) {
        listaPares.push(i);
    }
}

// console.log(listaPares)

// function externa() {
//     var curso = "Backend Javascript";
    
//     function interna() {
//         console.log(`Estudando ${curso}`);
//     }
//     interna();

// }

// externa(); // 👉 "Estudando Inteligência Computacional"

const val = "Global";

function externa() {
  const val = "Externa";

  function interna() {
    console.log(val);
  }

  return interna;
}

const func = externa();
func(); // 👉 "Externa"
console.log(func())

{
    let x = 10;
    let y = 20;
}

console.log(x, y);