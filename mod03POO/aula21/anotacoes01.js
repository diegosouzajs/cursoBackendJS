// Factory Function
// função que retorna um objeto.

function pessoa(nome, sobrenome, idade, altura, peso){
    let imc = peso/ (altura**2); // variavel privada só acessa dentro da função
    // não pode se reatribuida
    // retorna um objeto
    return {
        nome,
        sobrenome,
        idade,
        // método do objeto
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // método do objeto
        exibeIMC(){
            return imc.toFixed(2);
        }
    };
}


const pessoa1 = pessoa('Diego','Souza',39, 1.72, 80);
const pessoa2 = pessoa('Jonas','Oliveira',20, 1.72, 72);
// a função fábrica possui uma variavel privada chamada imc. Ao executar o código
// abaixo, ela não é sobrescrita pois ela não pode ser acessada fora da função
// desta forma, o javascript entende que queremos adicionar uma nova propriedade ao objeto
pessoa2.imc = 25;

// executa um método do objeto
console.log(pessoa2.exibeIMC());
console.log();


// adiciona uma nova propriedade ao objeto
pessoa1.endereco = {
    rua: 'Pandiá Calógeras',
    numero: 898,
    bairro: 'Bauxita',
    cidade: 'Ouro Preto'
}

// execução do for para visualizar as propriedades do meu objeto
for(let item in pessoa1){
    console.log(item, pessoa1[item]);
}
console.log();

function exibe(pessoa){
    // atribuição por desestruturação de objeto
    // observe que aqui levamos em consideração do nome da chave do objeto
    // não a posição dele
    const {nome, sobrenome, endereco} = pessoa
    console.log('Nome:', nome);
    console.log('Sobrenome:',sobrenome);
    console.log('Endereço:',endereco);
}
// instanciando a função exibe
exibe(pessoa1);
console.log()

// adicionando nova propriedade ao objeto
// observe que, apesar de usar a mesma função fábrica
// cada objeto pode ter propriedades distintas.
pessoa1.email = 'diego.souza@ifmg.edu.br';
pessoa2.curso = 'Backend JS';

console.log(pessoa1.nomeCompleto())
console.log(pessoa2.nomeCompleto())
console.log();
console.log(pessoa1);
console.log();
console.log(pessoa2);

const pessoa3 = pessoa('Nome','Sobrenome',20);