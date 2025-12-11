

function Carro(nome, ano, cor){
    this.nome = nome;
    this.ano = ano;
    this.cor = cor;

    this.verCarro = function(){
        console.log('Nome: ', this.nome);
        console.log('Ano: ', this.ano);
        console.log('Cor: ', this.cor);
    }
}

const corolla = new Carro('Corolla',2025, 'Preta');
console.log(corolla.verCarro());