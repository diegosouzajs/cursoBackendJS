/*IIFE (Immediately Invoked Function Expression).
    Criar um closure
    Proteger o estado interno
    Garantir que exista apenas uma referência compartilhada à instância
*/
const Singleton = (function () {
    //armazena a única instância válida da classe Singleton.
    let instance;

    // Construtor protegido contra múltiplas instâncias
    function Singleton() {
        if (instance) {
            throw new Error("Já existe uma instância singleton. Use o método getInstance.");
        }
        // Inicialização do código
        this.data = Math.random(); // Exemplo: inicialização com um dado aleatório
    }

    // Método estático
    // ponto global de acesso à instância.
    // Verifica se instance já existe
    // Se não existir → cria
    // Retorna sempre a mesma referência
    // Implementa lazy initialization, ou seja, a instância só é criada quando necessária.
    Singleton.getInstance = function () {
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    };

    // Prevenção de clonagem da instância
    // a clonagem pode ocorrer usando Object.create ou Object.assign
    Singleton.prototype.clone = function () {
        throw new Error("Nâo é permitido clonar uma Instância Singleton")
    };

    // Prevenção de desserialização indevida
    // Esse método reforça conceitualmente que reconstruir o objeto a partir 
    // de dados serializados viola o padrão Singleton, pois poderia gerar uma 
    // nova instância logicamente distinta.
    Singleton.prototype.customDeserialize = function () {
        throw new Error("A desserialização de instâncias singleton não é permitida.");
    };

    // A função revive é usada como reviver function do JSON.parse.
    // Se detectar um objeto marcado como Singleton
    // Retorna a instância existente (instance)
    // Impede a criação de um novo objeto
    Singleton.revive = function (key, value) {
        if (key === '' && value && value.__isSingleton) {
            return instance;
        }
        return value;
    };

    // Controle de serialização (toJSON)
    // Aqui ocorre o seguinte:
    // O método não retorna o objeto diretamente
    // Retorna uma estrutura identificável (__isSingleton)
    // Essa marcação será usada no processo de revival

    //evita que JSON.stringify gere um estado que permita recriar uma nova instância válida.
    Singleton.prototype.toJSON = function () {
        return { 
            __isSingleton: true, 
            data: this.data 
        };
    };

    return Singleton;
})();

// Utilização

let singletonInstance1;
try {
    // console.log(s1);
    singletonInstance1 = Singleton.getInstance();
    console.log(singletonInstance1);

    // A tentativa de criar outra instância deve gerar um erro.
    const singletonInstance2 = Singleton.getInstance();
    const singletonInstance3 = Singleton.getInstance();
    console.log(singletonInstance1 === singletonInstance3)
    console.log();
} catch (error) {
    console.error(error.message); // Já existe uma instância singleton. Use o método getInstance.
}

// Prevenção de clonagem
try {
    const clonedInstance = Object.create(singletonInstance1);
    console.log(clonedInstance); // Demonstra tentativa de clonagem
} catch (error) {
    console.error(error.message); // A clonagem de instâncias singleton não é permitida.
}

// Prevenção de serialização
try {
    const serializedInstance = JSON.stringify(singletonInstance1);
    console.log(serializedInstance);
} catch (error) {
    console.error(error.message);
}

// Prevenção de desserialização

const jsonString = JSON.stringify(singletonInstance1);
const deserializedInstance = JSON.parse(jsonString, Singleton.revive);
console.log(deserializedInstance); // Será a mesma instância que singletonInstance1


