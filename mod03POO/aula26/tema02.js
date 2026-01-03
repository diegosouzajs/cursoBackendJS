/*
Aula 26 - Polimorfismo

O termo polimorfismo vem do grego e significa “muitas formas”.
Na POO, ele se refere à capacidade de um mesmo método ter comportamentos 
diferentes, dependendo do contexto, do objeto que o chama ou da forma como 
é implementado.


*/


// Polimorfismo por Sobrescrita (Overriding)
// É o mais comum em JavaScript.
// Um objeto ou classe filha reescreve (ou sobrescreve) um método herdado da classe pai.


// class Animal{
//     falar(){
//         console.log('Eu estou falando');
//     }
// }

// const a1 = new Animal();
// a1.falar();

// class Gato extends Animal{
//     falar(){
//         console.log('Miau');
//     }
// }

// const gatinho = new Gato();
// gatinho.falar();

// class Cao extends Animal{
//     falar(){
//         console.log('Au au');
//     }
// }


// const cachorro = new Cao();
// cachorro.falar();


// class Calculadora{
//     soma(a, b, c){
//         if(arguments.length > 3){
//             let somaNum = 0
//             console.log('Primeiro')
//             for(let i of arguments){
//                 somaNum += i;
//             }
//             return somaNum;
//         }
//         if(c !== undefined){
//             console.log('Cheguei aqui')
//             return a + b + c;
//         } 
//         console.log('Final')
//         return a + b
//     }
// }

// const somarNumeros = new Calculadora();
// console.log(somarNumeros.soma(10,15));
// console.log(somarNumeros.soma(10,15,12,20));
// console.log(somarNumeros.soma(10,15,5));


// class Animal{
//     falar(){
//         console.log('O Animal emite um som');
//     }
// }

// class Gato extends Animal{
//     falar(){
//         console.log('Miauuuu');
//     }
// }

// class Cao extends Animal{
//     falar(){
//         console.log('Auauau');
//     }
// }


// const gatinho = new Gato();
// gatinho.falar();

// const cachorrinho = new Cao();
// cachorrinho.falar();


// // Polimorfismo por Sobrecarga (Overloading)
// // Diferente de linguagens como Java e C#, o JavaScript não possui sobrecarga de 
// // métodos de forma nativa (mesmo nome de método com diferentes parâmetros).
// // Mas conseguimos simular sobrecarga usando parâmetros opcionais, arguments 
// // ou rest operator:

// // Nesse caso, o mesmo método adapta seu comportamento conforme a quantidade de argumentos.
// function soma(a, b, c) {
//   if (c !== undefined) {
//     return a + b + c;
//   }
//   return a + b;
// }

// console.log(soma(2, 3));      // 5
// console.log(soma(2, 3, 4));   // 9

// // Polimorfismo Ad-hoc (Duck Typing)

// // Em JavaScript, por ser fracamente tipado e dinâmico, podemos ter polimorfismo 
// // baseado no princípio do “se anda como um pato e grasna como um pato, então é um pato”.
// // Ou seja, não importa a classe do objeto, mas sim se ele tem o método necessário.

function fazerSom(animal){
    if(animal.status === true){
        animal.apresentar();
        return;
    }
    animal.falar();
}

const pato = {
    falar: () => console.log('Quack'),
};

const gato = {
    falar: () => console.log('Miau'),
};

const cachorro = {
    falar: () => console.log('Au au'),
};

const homem = {
    status: true,
    apresentar: () => console.log('E ai!'),

};

fazerSom(pato);
fazerSom(gato);
fazerSom(cachorro);
fazerSom(homem);