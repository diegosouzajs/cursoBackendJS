class ConectionDatabase{
    static _conexao = null;
    // Construtor
    constructor(){
        if(ConectionDatabase._conexao){
            throw new Error('Não é possível criar uma nova instância. Use o método getConexao')
        }
        this.data = Math.random();
    }
    // método estático para criar instância
    static get getConexao(){
        if(!ConectionDatabase._conexao){
            ConectionDatabase._conexao = new ConectionDatabase();
        }
        return ConectionDatabase._conexao;
    }

}

const s1 = ConectionDatabase.getConexao;
const s2 = ConectionDatabase.getConexao;
// const s3 = new ConectionDatabase();
console.log(s1);
console.log(s2);





// class Singleton {

//     // Propriedade estática que armazenará a instância única
//     static _instance = null;

//     // Construtor
//     // Em JavaScript não existe "private constructor" nativo,
//     // então usamos uma verificação para impedir múltiplas instâncias
//     constructor() {
//         if (Singleton._instance) {
//             throw new Error("Use Singleton.instance para obter a instância.");
//         }
//         this.data = Math.random();
//     }

//     // Getter estático que fornece acesso à instância única
//     static get instance() {
//         if (Singleton._instance === null) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }
// }

// // Uso do Singleton
// const instance1 = Singleton.instance;
// const instance2 = Singleton.instance;

// const i1 = new Singleton();
// console.lot(i1);

// console.log(instance1);
// console.log(instance2);

// console.log(instance1 === instance2); // true

