/* 
alert, confirm e prompt

Alert
 - Exibe uma caixa de diálogo com uma mensagem e um botão "OK".
 - Serve para mostrar informações, avisos ou mensagens ao usuário.
    alert("Bem-vindo ao site!");

Confirm
 - Exibe uma caixa de diálogo com uma mensagem e dois botões: "OK" e "Cancelar".
 - Permite que o usuário confirme ou cancele uma ação. Retorna true se o usuário
  clicar em "OK" e false se clicar em "Cancelar".

    let resposta = confirm("Deseja realmente excluir este arquivo?");
    if (resposta) {
        alert("Arquivo excluído com sucesso!");
    } else {
        alert("Ação cancelada.");
    }

Prompt
 - Exibe uma caixa de diálogo que solicita ao usuário inserir um valor em um campo de texto.
 - Captura uma entrada do usuário como string. Se o usuário clicar em "Cancelar", o retorno será null.

    let nome = prompt("Qual é o seu nome?");
    if (nome) {
        alert("Olá, " + nome + "!");
    } else {
        alert("Você não informou um nome.");
    }

*/

const nome = prompt('Informe seu nome:');
alert(`Olá, ${nome}. Seja bem-vindo(a)!`)
const confirmar = confirm('Você tem 16 anos ou mais?');


if (confirmar) {
    console.log('Você pode votar');
}else{
    console.log('Você não pode votar');
}

const numero = prompt('Informe um número:');
const numero2 = prompt('Informe um novo número:');

const soma = Number(numero) + Number(numero2)

alert(`Soma dos números ${soma}`);