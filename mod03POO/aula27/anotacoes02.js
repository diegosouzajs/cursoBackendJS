class Pessoa{
    // método da instância
    apresentar(){
        console.log('Olá, pessoal');
    }
    // método da classe
    static despedida(){
        return `Até logo`;
    }
}

// instância da classe
const p1 = new Pessoa();

p1.apresentar();
console.log(Pessoa.despedida());