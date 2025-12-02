/*
Isolamento de escopo e manipulação controlada de variáveis

Implemente uma IIFE que:
Crie duas variáveis internas:
    lista → um array vazio
    limite → um número inteiro fornecido como parâmetro da IIFE
Dentro da IIFE, crie três funções internas (não disponíveis globalmente):
    adicionar(item) → adiciona um item à lista apenas se o tamanho atual for menor que limite
    remover() → remove o último item da lista
    mostrar() → imprime no console o conteúdo atual da lista
Ao final da IIFE, execute automaticamente:
    Pelo menos duas inserções
    Uma remoção
    Uma exibição final do estado da lista
O código não deve expor nenhuma das funções ou variáveis para o escopo global.

*/

(function (limite) {
  const lista = [];

  function adicionar(item) {
    // caso o tamanho da lista seja inferior ao limite informado
    // adiciona o item
    if (lista.length < limite) {
      lista.push(item);
    } else {
      console.log("Limite atingido:", limite);
    }
  }

  // remove o último item da lista, após adicionar itens a lista
  function remover() {
    lista.pop();
  }

  // exibe o resultado
  function mostrar() {
    console.log("Estado atual:", lista);
  }

  // Execução automática
  adicionar("A");
  adicionar("B");
  adicionar("C"); // deve exibir mensagem de limite, se limite = 2
  adicionar("D"); // deve exibir mensagem de limite, se limite = 2
  adicionar("E"); // deve exibir mensagem de limite, se limite = 2
  remover();
  mostrar();

})(4); // <– parâmetro passado para a IIFE

