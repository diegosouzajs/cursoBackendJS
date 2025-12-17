
class Produto{
    #nome;
    #preco;
    // início constructor
    constructor(nome, preco, categoria, estoque){
        this.#nome = nome;
        this.#preco = preco;
        Object.defineProperty(this, "id",{
            value: Math.floor(Math.random()*(9999-1)+1),
            writable: false,
            enumerable: true,
            configurable: false
        });

        Object.defineProperties(this,{
            categoria:{
                get:() => categoria,
                set: (valor)=> {
                    if(typeof valor !== "string" || valor === ''){
                        throw new Error(`Categoria inválida!`);
                    }
                    return categoria = valor;
                },
                enumerable: true
            },
            estoque: {
                get: () => estoque,
                set: (valor) => {
                    if(typeof valor !== "number" || valor < 0){
                        throw new Error('Valor inválido');
                    }
                    return estoque += valor;                
                },
                enumerable: true,
                configurable: false
            }
        })
    }
    // fim do constructor
    
    get nomeCorreto(){
        return this.#nome;
    }

    set nomeCorreto(valor){
        if(typeof valor !== "string" || valor === ''){
            throw new Error(`Nome inválido`);
        }
        return this.#nome = valor
    }

    get precoCerto(){
        return this.#preco;
    }
    set precoCerto(valor){
        if(typeof valor !== "number" || valor <=0 ){
            throw new Error(`Valor inválido!`);
        }
        return this.#preco = valor;       
    }

    descricao(){
        return `Produto: ${this.#nome} | Preço: ${this.#preco} | Estoque: ${this.estoque } | Categoria: ${this.categoria}`
    }

}

const produto1 = new Produto('Notebook', 4000, 'Computadores', 10);
const produto2 = new Produto('Iphone', 7000, 'Smartphone', 15);
const produto3 = new Produto('Chuteira Adidas COPA', 400, 'Esportes', 100);
produto1.estoque = -1;
console.log('Produtos');
console.log(produto1);
console.log(produto2);
console.log(produto3);

console.log();
console.log('Descrição');
console.log(produto1.descricao());





// class Produto {
//     #nome;
//     #preco;

//     constructor(nome, preco, categoria, estoque) {
//         this.#nome = nome;
//         this.#preco = preco;

//         // Propriedade id imutável
//         Object.defineProperty(this, "id", {
//             value: Math.floor(Math.random() * 9999) + 1,
//             writable: false,
//             configurable: false,
//             enumerable: true
//         });

//         // Propriedades categoria e estoque
//         Object.defineProperties(this, {
//             categoria: {
//                 enumerable: true,
//                 configurable: false,
//                 get: () => categoria,
//                 set: (valor) => {
//                     if (typeof valor !== "string") {
//                         throw new TypeError("Categoria deve ser uma string.");
//                     }
//                     categoria = valor;
//                 }
//             },
//             estoque: {
//                 enumerable: true,
//                 configurable: false,
//                 get: () => estoque,
//                 set: (valor) => {
//                     if (!Number.isInteger(valor) || valor < 0) {
//                         throw new TypeError("Estoque deve ser um inteiro >= 0.");
//                     }
//                     estoque = valor;
//                 }
//             }
//         });
//     }

//     // getters e setters privados
//     get nome() {
//         return this.#nome;
//     }
//     set nome(valor) {
//         if (typeof valor !== "string" || valor.trim() === "") {
//             throw new TypeError("Nome deve ser uma string não vazia.");
//         }
//         this.#nome = valor.trim();
//     }

//     get preco() {
//         return this.#preco;
//     }
//     set preco(valor) {
//         if (typeof valor !== "number" || valor <= 0) {
//             throw new TypeError("Preço deve ser um número maior que zero.");
//         }
//         this.#preco = valor;
//     }

//     get descricao() {
//         return `Produto: ${this.nome} | Preço: R$ ${this.preco} | Categoria: ${this.categoria} | Estoque: ${this.estoque}`;
//     }
// }


// const produto1 = new Produto('Notebook', 4000, 'Computadores', 10);
// const produto2 = new Produto('Iphone', 7000, 'Smartphone', 15);
// const produto3 = new Produto('Chuteira Adidas COPA', 400, 'Esportes', 100);
// console.log('Produtos');
// console.log(produto1);
// console.log(produto2);
// console.log(produto3);

// console.log();
// console.log('Descrição');
// console.log(produto1.descricao);