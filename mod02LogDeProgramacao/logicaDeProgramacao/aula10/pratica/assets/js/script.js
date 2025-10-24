// Todas as variáveis declaradas aqui em cima - fora das funções - são consideradas 
// GLOBAIS e funcionam dentro de qualquer outra função!

// utilizo o seletor querySelector para buscar no meu html o objeto de id = resultado
let resposta = document.querySelector('#resultado');
let computador = 0;
let jogador = 0;

// função para gerar número aleatório entre 1 e 100
function sortear() {
    computador = parseInt(Math.random() * (100 - 1) + 1);
    // computador = parseInt(Math.random() * 100);  

}

// função que compara o valor informado pelo usuário com o valor sorteado 
// não função sortear()
function jogar() {
    // variavel jogador recebe o valor informado pelo usuário e o converte para o tipo
    // Number
    jogador = Number(prompt('Qual é o seu palpite?'))

    if (jogador < computador) {
        // utilização do innerHTML para escrever o resultado na tela html
        // o += concatena o resultado com o que já tem dentro do elemento html
        // de id = resultado
        resposta.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        resposta.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else {
        resposta.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        // utilizando style.visibility = 'hidden' para ocultar o botão de id= botao
        document.querySelector('#botao').style.visibility = 'hidden'
    }
}

// chamada da função sortear para que ao abrir a página html, o número sorteado
// já esteja definido
sortear()