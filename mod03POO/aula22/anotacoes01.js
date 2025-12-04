// Função construtora
function Veiculos(modelo, ano, marca, cores, dono) {
    this.cor = cores
    this.modelo = modelo;
    this.ano = ano;
    this.marca = marca;
    this.dono = dono;
}

Veiculos.prototype.abrirPorta = function(){
    if (this.porta === 1) return 'Porta do motorista aberta';
        if (this.porta === 2) return 'Porta do passageiro aberta';
        return 'Porta-malas aberto';
};

// Função construtora
function Carro(modelo, ano, marca, cores, dono, portas) {
    Veiculos.call(this, modelo, ano, marca, cores, dono);
    this.portas = portas;
}

// herda do prototype de Veiculos
Carro.prototype = Object.create(Veiculos.prototype);

const dono1 = {
    nome: 'Diego',
    sobrenome: 'Souza'
}
const cores = ['Vermelho', 'Branco', 'Preto']

const celta = new Carro('Celta', 2007, 'Chevrolet', cores, dono1, 2);
console.log(celta.preco);
const uno = new Carro('Uno', 2007, 'Fiat', cores, dono1, 4);
// console.log(celta.abrirPorta(2));





// function Moto(modelo, ano, marca, cores, dono, cilindradas) {
//     Veiculos.call(this, modelo, ano, marca, cores, dono);
//     this.cilindradas = cilindradas;

//     this.acelerar = function () {
//         console.log('Vruuuuuuuuuuuummmmm')
//     }
// }
// const cg = new Moto('CG Titan', 2008, 'Honda', cores, 'Max', 150);
// const falcon = new Moto('Falcon', 2018, 'Honda', cores, 'Fulano', 400);

// console.log(celta);
// console.log(uno);
// console.log();
// // console.log(cg.abrirPorta(1));
// console.log(falcon);




