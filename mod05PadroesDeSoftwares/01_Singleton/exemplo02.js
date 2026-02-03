/* 
IIFE (Immediately Invoked Function Expression).
Criar um closure
Proteger o estado interno
Garantir que exista apenas uma referência compartilhada à instância

→ Na versão com class, o closure é substituído por
  propriedades estáticas privadas por convenção.
*/
class Singleton {

    // Armazena a única instância válida da classe Singleton
    static _instance = null;

    // Construtor protegido contra múltiplas instâncias
    constructor() {
        // Impede criação direta de múltiplas instâncias
        if (Singleton._instance) {
            throw new Error("Já existe uma instância singleton. Use o método instance.");
        }
        // Inicialização do código
        this.data = Math.random(); // Exemplo: inicialização com um dado aleatório
    }

    // Método estático
    // Ponto global de acesso à instância
    // Verifica se instance já existe
    // Se não existir → cria
    // Retorna sempre a mesma referência
    // Implementa lazy initialization
    static get instance() {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }

    // Prevenção de clonagem da instância
    // A clonagem pode ocorrer usando Object.create ou Object.assign
    clone() {
        throw new Error("Não é permitido clonar uma instância Singleton");
    }

    // Prevenção de desserialização indevida
    // Reconstruir o objeto a partir de dados serializados
    // viola o padrão Singleton
    customDeserialize() {
        throw new Error("A desserialização de instâncias singleton não é permitida.");
    }

    // A função revive é usada como reviver function do JSON.parse
    // Se detectar um objeto marcado como Singleton
    // Retorna a instância existente
    static revive(key, value) {
        if (key === '' && value && value.__isSingleton) {
            return Singleton.instance;
        }
        return value;
    }

    // Controle de serialização (toJSON)
    // O método não retorna o objeto diretamente
    // Retorna uma estrutura identificável (__isSingleton)
    // Essa marcação será usada no processo de revival
    toJSON() {
        return { __isSingleton: true, data: this.data };
    }
}


const s1 = Singleton.instance;
const s2 = Singleton.instance;

const s3 = Singleton.instance;
console.log(s1, s2);

console.log(s1 === s2);