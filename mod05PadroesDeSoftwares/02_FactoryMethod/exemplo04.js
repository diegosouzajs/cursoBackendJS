class Eletronico {
    constructor(nome, marca, preco) {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
        // CORREÇÃO: usar === em vez de = (atribuição)
        if (this.constructor === Eletronico) {
            throw new Error('Classe abstrata não pode ser instanciada');
        }
    }
}

class Smartphone extends Eletronico {
    constructor(nome, marca, preco, quantidade, polegadas) {
        // CORREÇÃO: passar preco para o super()
        super(nome, marca, preco);
        this.quantidade = quantidade;
        this.polegadas = polegadas;
    }
}

class EletronicoCreator {
    // FACTORY METHOD - deve ser implementado pelas subclasses
    criarEletronico(info) {
        throw new Error('Método criarEletronico() deve ser implementado');
    }

    // Template Method que usa o Factory Method
    venda(item) {
        const eletronico = this.criarEletronico(item);
        console.log(`Vendendo: ${eletronico.nome} - R$${eletronico.preco}`);
        return eletronico;
    }

    apresentacao() {
        throw new Error('Método apresentacao() deve ser implementado');
    }
}

// IMPLEMENTAÇÃO DA SmartphoneFactory seguindo o padrão Factory Method
class SmartphoneFactory extends EletronicoCreator {
    
    // Implementação do Factory Method específico para Smartphones
    criarEletronico(info) {
        // Validação dos dados necessários
        if (!info.nome || !info.marca || !info.preco || !info.quantidade || !info.polegadas) {
            throw new Error('Dados incompletos para criar smartphone');
        }
        
        // Cria e retorna uma instância específica de Smartphone
        return new Smartphone(
            info.nome,
            info.marca,
            info.preco,
            info.quantidade,
            info.polegadas
        );
    }
    
    // Implementação específica do método apresentacao para smartphones
    apresentacao() {
        console.log("Fábrica especializada em smartphones");
    }
    
    // Método adicional específico para a fábrica de smartphones
    verificarEstoque(info) {
        const smartphone = this.criarEletronico(info);
        console.log(`Estoque de ${smartphone.nome}: ${smartphone.quantidade} unidades`);
        return smartphone.quantidade;
    }
}

// ====== CÓDIGO DE TESTE ======

// Criação da fábrica de smartphones
const smartphoneFactory = new SmartphoneFactory();

// Uso 1: Venda usando o Template Method (que internamente usa o Factory Method)
const iphoneVendido = smartphoneFactory.venda({
    nome: "iPhone 15",
    marca: "Apple",
    preco: 7999.99,
    quantidade: 10,
    polegadas: 6.1
});

// Uso 2: Criação direta usando o Factory Method
const samsungPhone = smartphoneFactory.criarEletronico({
    nome: "Galaxy S23",
    marca: "Samsung",
    preco: 4999.99,
    quantidade: 15,
    polegadas: 6.8
});

// Uso 3: Método específico da fábrica de smartphones
smartphoneFactory.verificarEstoque({
    nome: "Xiaomi 13",
    marca: "Xiaomi",
    preco: 3999.99,
    quantidade: 8,
    polegadas: 6.7
});

// Apresentação da fábrica
smartphoneFactory.apresentacao();

// Exibição dos objetos criados
console.log('\nSmartphones criados:');
console.log('1. iPhone vendido:', iphoneVendido);
console.log('2. Samsung em estoque:', samsungPhone);

// ====== EXEMPLO DE EXTENSÃO DO SISTEMA ======

// Para demonstrar a extensibilidade do padrão:
class Notebook extends Eletronico {
    constructor(nome, marca, preco, ram, processador) {
        super(nome, marca, preco);
        this.ram = ram;
        this.processador = processador;
    }
}

class NotebookFactory extends EletronicoCreator {
    criarEletronico(info) {
        return new Notebook(
            info.nome,
            info.marca,
            info.preco,
            info.ram,
            info.processador
        );
    }
    
    apresentacao() {
        console.log("Fábrica especializada em notebooks");
    }
}

// Uso da nova fábrica
const notebookFactory = new NotebookFactory();
const macbook = notebookFactory.venda({
    nome: "MacBook Pro",
    marca: "Apple",
    preco: 12999.99,
    ram: "16GB",
    processador: "M2 Pro"
});

console.log('\nNotebook criado:', macbook);