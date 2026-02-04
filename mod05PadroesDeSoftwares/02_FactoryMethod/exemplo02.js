// Produto "abstrato" (representado por convenção)
// Em JavaScript não temos classes abstratas nativas, então simulamos
// lançando erro se alguém tentar usar métodos não implementados
class Product {
    constructor(){
        if(this.constructor === Product){
            throw new Error('Classe abstrata. Não pode ser instanciada')
        }
    }

    sayHi() {
        // Este método é "abstrato" - deve ser sobrescrito pelas subclasses
        throw new Error("Método sayHi() deve ser implementado");
    }
}

// Produto concreto - implementação real do produto
// Herda de Product e fornece implementação concreta do método sayHi()
class ConcreteProduct extends Product {
    sayHi() {
        // Implementação específica do método abstrato
        console.log("Oi");
    }
}

// Criador "abstrato" (simulado por convenção)
// Define a interface do Factory Method mas não implementa
class Creator {
    // FACTORY METHOD - método abstrato que as subclasses devem implementar
    factoryMethod() {
        // Lança erro para forçar implementação nas subclasses
        throw new Error("factoryMethod() deve ser implementado");
    }

    // Template Method - usa o Factory Method para criar um produto
    createAndShow() {
        // 1. Chama factoryMethod() (implementado pela subclasse)
        const product = this.factoryMethod();
        // 2. Faz algo com o produto criado
        console.log(product);
    }
}

// Criador concreto - implementa o Factory Method
class ConcreteCreator extends Creator {
    // Implementação concreta do Factory Method
    factoryMethod() {
        // Retorna uma instância específica de ConcreteProduct
        return new ConcreteProduct();
    }
}

// ====== USO DO PADRÃO FACTORY METHOD ======

// Cria uma instância do criador concreto
const creator = new ConcreteCreator();

// Uso 1: Cliente obtém produto diretamente usando o Factory Method
const product = creator.factoryMethod();

// Usa o produto criado (polimorfismo - não conhece ConcreteProduct)
product.sayHi();  // Output: "hi"

// Uso 2: Cliente usa o Template Method que internamente usa o Factory Method
creator.createAndShow();  // Output: exibe o objeto ConcreteProduct

// ====== PROBLEMAS NO CÓDIGO ======

// LINHA PROBLEMÁTICA - Viola o princípio do Factory Method
const p1 = new Product();  // ❌ ERRO: Tenta instanciar classe "abstrata"
console.log(p1.sayHi());   // ❌ Vai lançar erro: "Método sayHi() deve ser implementado"

/*
PROBLEMAS IDENTIFICADOS:

1. INSTANCIAÇÃO DIRETA DE CLASSE "ABSTRATA":
   - const p1 = new Product(); → Viola o conceito de classe abstrata
   - Em linguagens como Java/C#, isso seria erro de compilação
   - Em JS, só falha em runtime quando chama sayHi()

2. FALTA DE PROTEÇÃO CONTRA INSTANCIAÇÃO:
   - Deveria ter validação no construtor:
     class Product {
         constructor() {
             if (new.target === Product) {
                 throw new Error("Não pode instanciar classe abstrata");
             }
         }
     }

3. NOMENCLATURA GENÉRICA:
   - Nomes como Product, ConcreteProduct são muito genéricos
   - Em cenário real, deveria ter nomes mais descritivos
     (ex: Message, EmailMessage, MessageFactory)
*/

/*
COMO MELHORAR O CÓDIGO:

1. Adicionar proteção no construtor:
   class Product {
       constructor() {
           if (new.target === Product) {
               throw new TypeError("Product é classe abstrata");
           }
       }
       // ... restante do código
   }

2. Remover a linha problemática:
   // ❌ REMOVER: const p1 = new Product();

3. Adicionar exemplo de uso correto:
   // Criar apenas através do Factory Method
   const factory = new ConcreteCreator();
   const myProduct = factory.factoryMethod();
   myProduct.sayHi();

4. Demonstrar extensibilidade:
   class AnotherProduct extends Product {
       sayHi() { console.log("hello!"); }
   }
   
   class AnotherCreator extends Creator {
       factoryMethod() { return new AnotherProduct(); }
   }
*/

/*
RESUMO DO FACTORY METHOD IMPLEMENTADO:

✅ ELEMENTOS PRESENTES:
- Product: Interface abstrata dos produtos
- ConcreteProduct: Implementação concreta
- Creator: Define factoryMethod() abstrato
- ConcreteCreator: Implementa factoryMethod()

✅ PADRÃO SEGUIDO:
- Cliente usa creator.factoryMethod() em vez de new ConcreteProduct()
- Baixo acoplamento entre cliente e produtos concretos
- Fácil adicionar novos tipos de produtos

❌ PROBLEMAS:
- Falta proteção contra instanciação direta de "classe abstrata"
- Últimas linhas violam os princípios do padrão
*/

/*
EXECUÇÃO DO CÓDIGO PASSO A PASSO:

1. const creator = new ConcreteCreator(); → Cria criador concreto
2. const product = creator.factoryMethod(); → Chama Factory Method que retorna new ConcreteProduct()
3. product.sayHi(); → Output: "hi"
4. creator.createAndShow(); → Output: exibe objeto ConcreteProduct
5. const p1 = new Product(); → Instancia (errado) classe "abstrata"
6. console.log(p1.sayHi()); → Lança erro: "Método sayHi() deve ser implementado"
*/