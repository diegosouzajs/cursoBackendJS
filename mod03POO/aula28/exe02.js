/*
Simule um sistema de pedidos online.

Relações:
- Cliente ↔ Pedido: associação (o cliente pode existir sem pedidos)
- Pedido ↔ Item: composição (itens não existem fora do pedido)
*/

class Item {
  // Representa um produto do sistema
  // Não possui dependência com Pedido ou Cliente
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Pedido {
  // Pedido mantém e controla seus itens (composição)
  constructor() {
    // Estrutura interna que armazena itens e suas quantidades
    this.itens = [];
  }

  // Adiciona um item ao pedido com validação de regra de negócio
  adicionarItem(item, quantidade) {
    if (quantidade <= 0) {
      throw new Error("A quantidade deve ser maior que zero.");
    }

    // O pedido decide como os itens são armazenados
    this.itens.push({
      item: item,
      quantidade: quantidade
    });
  }

  // Calcula o valor total do pedido
  // Responsabilidade exclusiva do Pedido
  calcularTotal() {
    return this.itens.reduce((total, registro) => {
      return total + registro.item.preco * registro.quantidade;
    }, 0);
  }

  // Soma todas as quantidades dos itens
  // Não confundir com quantidade de produtos distintos
  quantidadeTotalItens() {
    return this.itens.reduce((total, registro) => {
      return total + registro.quantidade;
    }, 0);
  }
}

class Cliente {
  // Cliente mantém associação com vários pedidos
  constructor(nome) {
    this.nome = nome;
    this.pedidos = [];
  }

  // Associa um pedido já existente ao cliente
  adicionarPedido(pedido) {
    this.pedidos.push(pedido);
  }

  // Exibe um resumo consolidado de todos os pedidos do cliente
  exibirResumo() {
    console.log(`Cliente: ${this.nome}`);
    console.log(`Total de pedidos: ${this.pedidos.length}`);

    // Itera sobre todos os pedidos realizados pelo cliente
    this.pedidos.forEach((pedido, index) => {
      console.log(`Pedido ${index + 1}:`);
      console.log(`  Quantidade de itens: ${pedido.quantidadeTotalItens()}`);
      console.log(`  Valor total: R$ ${pedido.calcularTotal().toFixed(2)}`);
    });
  }
}

// Itens são criados de forma independente e reutilizáveis
const item1 = new Item("Notebook", 3500);
const item2 = new Item("Mouse", 150);
const item3 = new Item("Teclado", 300);

// Cliente pode existir mesmo sem pedidos
const cliente = new Cliente("Diego");

// Primeiro pedido associado ao cliente
const pedido1 = new Pedido();
pedido1.adicionarItem(item1, 1);
pedido1.adicionarItem(item2, 2);
cliente.adicionarPedido(pedido1);

// Segundo pedido do mesmo cliente (desafio atendido)
const pedido2 = new Pedido();
pedido2.adicionarItem(item3, 1);
pedido2.adicionarItem(item2, 1);
cliente.adicionarPedido(pedido2);

// Exibe o resumo de todos os pedidos do cliente
cliente.exibirResumo();
