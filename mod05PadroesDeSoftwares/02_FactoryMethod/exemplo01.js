// Produto abstrato (Abstract Product)
// Define a interface comum que todos os produtos devem seguir
class Product {
    constructor() {
        // Validação para evitar instanciação direta da classe abstrata
        // new.target refere-se à classe que foi instanciada com 'new'
        if (new.target === Product) {
            throw new TypeError("Não é possível instanciar Product diretamente");
        }
    }

    // Método abstrato que deve ser implementado pelas subclasses
    // Define o contrato que todos os produtos concretos devem seguir
    sayHi() {
        throw new Error("Método sayHi() deve ser implementado");
    }
}

// Produto concreto (Concrete Product)
// Implementação específica da interface Product
class ConcreteProduct extends Product {
    // Implementação concreta do método abstrato
    sayHi() {
        console.log("Olá, como você está?");
    }
}

// Criador abstrato (Abstract Creator)
// Define o factory method que as subclasses implementarão
class Creator {
    constructor() {
        // Validação para evitar instanciação direta da classe abstrata
        if (new.target === Creator) {
            throw new TypeError("Não é possível instanciar Creator diretamente");
        }
    }

    // FACTORY METHOD - padrão central
    // Método abstrato que as subclasses implementarão para criar produtos
    // Este é o coração do padrão Factory Method
    factoryMethod() {
        throw new Error("factoryMethod() deve ser implementado");
    }

    // Template Method - padrão adicional
    // Método que usa o factoryMethod para criar um produto e executar ação
    // Demonstra como o Creator pode usar o produto sem conhecer sua classe concreta
    createAndShow() {
        // 1. Chama o factoryMethod (implementado pela subclasse)
        const product = this.factoryMethod();
        // 2. Usa o produto retornado (polimorfismo)
        product.sayHi();
    }
}



// Criador concreto (Concrete Creator)
// Implementa o factoryMethod para criar um produto específico
class ConcreteCreator extends Creator {
    // Implementação do Factory Method
    // Retorna uma instância de ConcreteProduct
    // Aqui ocorre a criação real do objeto
    factoryMethod() {
        return new ConcreteProduct(); // Instanciação concreta
    }
}

// ===== CÓDIGO CLIENTE =====
// O cliente usa as classes abstratas (Creator e Product)
// sem conhecer as implementações concretas

// Cria um criador concreto (mas usa tipo abstrato Creator por inferência)
const creator = new ConcreteCreator();

// Método 1: Cliente obtém produto diretamente via factoryMethod
// Note que o cliente não usa 'new ConcreteProduct()' diretamente
const product = creator.factoryMethod();

// Usa o produto (polimorfismo - não sabe que é ConcreteProduct)
product.sayHi(); // Output: "Olá, como você está?"

// Método 2: Cliente usa o Template Method do Creator
// O Creator cuida de criar e usar o produto internamente
creator.createAndShow(); // Output: "Olá, como você está?"

/*
RESUMO DO PADRÃO FACTORY METHOD:

1. DESACOPLAMENTO: Cliente não conhece ConcreteProduct
2. EXTENSIBILIDADE: Novos produtos = novas subclasses de Creator
3. POLIMORFISMO: Creator trabalha com interface Product
4. RESPONSABILIDADE: Delega criação para subclasses

VANTAGENS:
- Baixo acoplamento entre cliente e produtos concretos
- Fácil adição de novos tipos de produtos
- Código mais testável (mock de factories)
- Centralização da lógica de criação

EXEMPLO DE EXTENSÃO:
Para adicionar novo produto "SpecialProduct":
1. Criar class SpecialProduct extends Product
2. Criar class SpecialCreator extends Creator
3. SpecialCreator.factoryMethod() return new SpecialProduct()
*/