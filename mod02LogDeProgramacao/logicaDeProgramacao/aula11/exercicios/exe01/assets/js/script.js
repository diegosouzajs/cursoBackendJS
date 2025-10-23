/*
Criar uma função em JavaScript que permita ao usuário realizar operações 
matemáticas básicas (soma, subtração, multiplicação e divisão) entre dois 
números fornecidos pelo usuário.
Descrição:
Solicite ao usuário que digite dois números através da função prompt().
Pergunte ao usuário qual operação deseja realizar, apresentando as seguintes opções:
[1] Somar
[2] Subtrair
[3] Multiplicar
[4] Dividir
Utilize a estrutura switch para executar a operação escolhida.
Exiba o resultado da operação na tela, dentro de um elemento HTML (<div> ou <p>), 
usando innerHTML.
Caso o usuário digite uma opção inválida, exiba uma mensagem de opção inválida.
Para a divisão, utilize o método toLocaleString('pt-BR') para formatar o número 
conforme o padrão brasileiro.
*/
// usando o querySelector para pegar o elemento de id = resultado
const resultado = document.querySelector('#resultado');

// inialização das constantes que receberão os valores informados pelo usuário 
const num1 = Number(prompt('Informe o primeiro número'));
const num2 = Number(prompt('Informe o segundo número'));
const operador = Number(prompt("O que você deseja fazer?"+
    "\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir"));


// função que realiza as operações
function operacaoBasica(operacao){

    // por estar no escopo da função, utilizo o return no lugar do break
    // uma vez que, ao satisfazer um dos casos, a função é encerrada ao encontrar o
    // return
    switch(operacao){
        case 1:
           const soma = num1 + num2;
           return `${num1} + ${num2} = ${soma}`;
        case 2:
           const subtracao = num1 - num2;
           return `${num1} - ${num2} = ${subtracao}`;
        case 3:
            const multiplicacao = num1 * num2;
            return `${num1} x ${num2} = ${multiplicacao}`;
        case 4:
            const divisao = num1 / num2;
            return `${num1} / ${num2} = ${divisao.toFixed(2)}`;
        default:
            return 'Algo deu errado!'
    }
}

// escrevo o resultado na página html
// como não uso o += não faço a concatenção com o que já existe na página
// caso tenha alguma coisa, o innerHTML substituirá o conteúdo com os novos
// valores
resultado.innerHTML = `<p>${operacaoBasica(operador)}</p>`;