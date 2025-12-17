class Carro {
    #anoPrivado; // campo privado

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.#anoPrivado = ano;
        
        // defineProperty: cria uma propriedade "ano" com get/set        
        Object.defineProperty(this, "ano", {
            get: () => this.#anoPrivado,
            set: (valor) => {
                if (typeof valor !== "number" || valor < 1886) {
                    throw new Error("Ano inválido.");
                }
                this.#anoPrivado = valor;
            },
            enumerable: true,
            configurable: false
        });

        // defineProperties: cria propriedades calculadas no PRÓPRIO objeto       
        Object.defineProperties(this, {
            // descricao: {
            //     get: () => `${this.marca} ${this.modelo} (${this.#anoPrivado})`,
            //     enumerable: true,
            //     configurable: false
            // },
    
            idade: {
                get: () => new Date().getFullYear() - this.#anoPrivado,
                enumerable: true,
                configurable: false
            },
            portas:{
                value: 4,
                writable: false,
                enumerable: true,
                configurable: true
            }
        });
    }

    // GET/SET no PROTOTYPE (sintaxe clássica de classe)    
    get modeloCarro() {
        return this.modelo.toUpperCase();
    }

    set modeloCarro(valor) {
        if (typeof valor !== "string") {
            // lançar um erro 
            throw new Error("O modelo deve ser uma string.");
        }
        this.modelo = valor.trim();
    }

    get descricao(){
        return `Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`
    }

    set descricao(objeto){
        const {marca, modelo, ano} = objeto;
        this.marca = marca;
        this.modelo = modelo;
        this.#anoPrivado =  ano;

    }
}

// testando
const c = new Carro("Honda", "Civic", 2018);

// console.log(c.idade);          // Idade baseada no ano atual
// console.log(c.portas);          // Idade baseada no ano atual
// console.log(c.modeloCarro);    // CIVIC
console.log(c.descricao);    // CIVIC

const uno = {
    modelo: 'Fiat Uno',
    marca: 'Fiat',
    ano: 1997
}
console.log('Honda')
console.log(c)

c.descricao = uno;

console.log(c)

// c.modeloCarro = "      Accord ";
// console.log(c);         // "Accord"

// c.ano = 1882;
// console.log(c.ano);            // 2020
