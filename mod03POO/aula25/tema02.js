/* 
Aula 25 - Object.defineProperty() e Object.defineProperties()

Esses dois métodos são fundamentais quando queremos criar ou modificar 
propriedades de objetos de maneira mais controlada em JavaScript. Eles
permitem trabalhar não só com o valor da propriedade, mas também com seus 
atributos internos (também chamados de property descriptors).
*/

/*
Object.defineProperty()

Permite definir ou modificar uma única propriedade em um objeto.
A sintaxe é
*/

//Exemplo básico:



class Pessoa {
    #sobrenome // privada
    constructor(nome, sobrenome, idade) {
        Object.defineProperty(this, "nome", {
            value: nome,
            writable: false,   // impede reatribuição
            enumerable: true,  // aparece em loops ou em impressões
            configurable: false // não pode ser deletada ou redefinida
        });
        this.#sobrenome = sobrenome;
        this.idade = idade;

        // também podemos utilizar getters e setters com o Object.defineProperties e 
        Object.defineProperties(this,{
            nomeCompleto: {
                get: () => `${this.nome} ${this.#sobrenome}`,                
                // Propriedades com getter não podem ter writable.
                // Descritores em JavaScript têm dois tipos distintos:

                // Data descriptors
                // value, writable, enumerable, configurable

                // Accessor descriptors
                // get, set, enumerable, configurable
                enumerable: true,
                configurable: false
            }
        });
        
    }
    get sobrenome(){
        return this.#sobrenome
    }
    set sobrenome(valor){
        if(typeof valor !== 'string'){
            throw new TypeError('O nome deve ser uma string!');
        }
        this.#sobrenome = valor;
    }
    
}

// instância -> invocação da minha classe
const p1 = new Pessoa('Diego','Souza', 39);
p1.nome = 'Silva'; // reatribui o valor para #sobrenome

delete p1.nome;
console.log(p1);

console.log('Objeto original');
console.log(p1);
console.log(p1.nomeCompleto);
console.log();

p1.nome = 'José';
console.log('Objeto Após tentar mudar o valor do nome');
console.log(p1);

delete p1.nome // deleta a propriedade do objeto
console.log();
console.log('Objeto após tentar excluir')
console.log(p1);


// redefinindo a propriedade da instância do meu objeto
Object.defineProperty(p1, "nome", {
    value: 'Gumercindo',
    writable: false,   // impede reatribuição
    enumerable: true,  // aparece em loops
    configurable: false // não pode ser deletada ou redefinida
});
    
//     console.log();
// console.log('Objeto após tentar redefinir suas propriedades')
console.log(p1);


