/* 
Objeto Map()
Estrutura de dados map().

Exemplo de uso da estrutura de dados map()

new map -> cria o método
array.set(parametro) -> seta o valor do map
array.get(parametro) -> obtem o valor do parametro indicado

*/

// array de objetos
// suponha o seguinte. Tenho uma estrutura de dados (array de objetos)

const pessoas = [
    {id: 3, nome: 'Diego'},
    {id: 2, nome: 'Jose'},
    {id: 1, nome: 'Gumercindo'},
];

console.log(pessoas);
const novasPessoas = {};

// cria o método
// só que aí eu tenho um objeto e quero jogar o id no objeto e o restante
// seria o valor desse id

for (const pessoa of pessoas){
    const {id, nome} = pessoa;
    novasPessoas[id] = {id, nome};    
}

// contudo, observe que a ordem original do objeto foi desconsiderada
// vamos supor que precise que essa ordem seja mantida para algum fim lógico da
// aplicação
console.log(novasPessoas)


// para resolver esse problema, podemos usar o Objeto Map();
const novasPessoas2 = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    //setar valor
    novasPessoas2.set(id, {...pessoa});
}

console.log();
console.log(novasPessoas2);

// para obter um valor podemos usar o get
console.log();
console.log(novasPessoas2.get(2));
console.log();

console.log(novasPessoas2.get(1));

console.log(typeof novasPessoas2);
// destructor
for (const [identifier, {id, nome}] of novasPessoas2){
    console.log(identifier, id, nome);
}
console.log();


// posso pegar chaves ou valores e iterar sobre eles
// novasPessoas.keys() 
// novasPessoas.values()

// laço for para iterar sobre os valores
for (const valor of novasPessoas2.values()){
    const {id, nome} = valor;
    console.log('ID: ',id);
    console.log('Nome: ',nome);
}
console.log();

// laço for para iterar sobre as chaves
for (const chave of novasPessoas.keys()){
    console.log(chave);
}


//deleta item do map
novasPessoas2.delete(2);
console.log(novasPessoas2);

// De Map → Array:

const mapa = new Map([
  [ ()=> 'Oi', 'Diego'],
  ['idade', 28]
]);

console.log(mapa);
console.log([...mapa]); // [['nome', 'Diego'], ['idade', 28]]

for(let valor of mapa.values()){
    console.log(valor);
}