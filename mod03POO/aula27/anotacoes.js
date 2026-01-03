
class DispositivosEletronicos{
    constructor(nome){
        this.nome = nome;
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            return `O dispositivo está ligado`;
        }
        console.log('Estou aqui')
        this.ligado = true;
    }
}

class Smartphone extends DispositivosEletronicos{
    #nivelBateria = 0
    constructor(nome, marca, modelo){
        super(nome);
        this.marcar = marca;
        this.modelo = modelo;
    }
    carregarBateria(){
        if(this.#nivelBateria === 100){
            return `Aparelho já carregador`;
        }
        console.log('Carregando bateria');
        this.#nivelBateria = 100;
    }
};

const tel = new Smartphone('Galaxy','Samsung','Note');

class Tablet extends Smartphone{
    constructor(nome, marca, modelo, polegadas){
        super(nome, marca, modelo);
        this.polegadas = polegadas;
    }

}

const tablet1 = new Tablet();

console.log(tablet1.ligar())
console.log(tablet1.carregarBateria());


// Prototype
//     DispositivosEletronicos
//         Smartphone
//             Tablet


