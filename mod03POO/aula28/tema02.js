// /*

// Abstração e Interfaces Implícitas 

// Conceito:

// A abstração é um dos pilares da Programação Orientada a Objetos (POO).
// Ela consiste em representar entidades do mundo real destacando apenas 
// seus aspectos essenciais, ocultando os detalhes de implementação.

// Em resumo: abstração é o processo de focar no “o que” o objeto faz, 
// e não em “como” ele faz.

// Conceito:

// Diferente de linguagens como Java ou C#, o JavaScript não possui classes abstratas nativas.
// Entretanto, podemos simular o comportamento de uma classe abstrata de duas formas principais:
//     1. Evitando a instanciação direta (lançando um erro no construtor).
//     2. Definindo métodos que devem ser sobrescritos nas subclasses.


// */

// class Pagamento {
//     processar(valor) {
//         throw new Error("Método deve ser implementado pela subclasse.");
//     }
//     troco(){

//     }
// }

// class PagamentoCartao extends Pagamento {
//     processar(valor) {
//         console.log(`Processando pagamento de R$${valor} no cartão...`);
//     }
// }

// class PagamentoPix extends Pagamento {
//     processar(valor) {
//         console.log(`Enviando R$${valor} via Pix...`);
//     }
// }


// const pag = new Pagamento();
// pag.processar(500);

// const pix = new PagamentoPix();
// pix.processar(200);

// const cartao = new PagamentoCartao();
// cartao.processar(250);


// console.log()

// Classes Abstratas (simulação em JavaScript)

class FormaGeometrica {
    constructor() {
        if (new.target === FormaGeometrica) {
            throw new Error('Forma geométrica é uma classe abstrata que não ' +
                'pode ser instanciada diretamente')
        }
    }

    calcularArea() {
        throw new Error('Este método deve ser sobrescrito na subclasse');
    }
}

//const f1 = new FormaGeometrica();

// console.log(f1.calcularArea());

class Retangulo extends FormaGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return `A área do retângulo é ${this.base * this.altura}`
    }
}


class Quadrado extends FormaGeometrica {
    constructor(lado){
        super();
        this.lado = lado
    }

    calcularArea(){
        return `A área do QUADRADO é ${this.lado * this.lado}`; 
    }
}

const r1 = new Retangulo(5, 3);
console.log(r1.calcularArea());

const q1 = new Quadrado(3);
console.log(q1.calcularArea());











// class FormaGeometrica {
//     constructor() {
//         if (new.target === FormaGeometrica) {
//             throw new Error("FormaGeometrica é uma classe abstrata e não pode ser instanciada diretamente.");
//         }
//     }

//     calcularArea() {
//         throw new Error("Método abstrato! Deve ser implementado pela subclasse.");
//     }
// }

// class Retangulo extends FormaGeometrica {
//     constructor(largura, altura) {
//         super();
//         this.largura = largura;
//         this.altura = altura;
//     }

//     calcularArea() {
//         return this.largura * this.altura;
//     }
// }


// class Quadrado extends FormaGeometrica{
//     constructor(lado){
//         super();
//         this.lado = lado;
//     }
//     calcularArea(){
//         return (this.lado * this.lado).toFixed(2);
//     }
// }
// const r = new Retangulo(5, 10);
// console.log(r.calcularArea()); // 50

// const q = new Quadrado(4);
// console.log(q.calcularArea());


// Interfaces “implícitas” e Duck Typing

function iniciarVoo(veiculo) {
  // Espera-se que o objeto tenha o método "voar"
  veiculo.voar();
}

const aviao = {
  voar: () => console.log("✈️  - Avião decolando..."),
  tipo: 'carga',
  capacidadeCarga: 30,

};

const drone = {
  voar: () => console.log("🚁 - Drone subindo..."),
  tamanhoEmCm: 75,
  cor: 'Verde'
};

const carro = {
    portas: 4,
    combustivel: "gasolina", 
    cor: 'Preta',
    voar: () => console.log("🚗 - Carro pulando ...")
}

console.log();
// Ambos "cumpriram o contrato"
iniciarVoo(aviao);
iniciarVoo(drone);
iniciarVoo(carro);