/* 
Funções fábrica (Factoy Functions)

Funções que retornam objetos
Quando há uma função dentro de um objeto, chamaos ela de 
método.

É semelhante ao constructor function
A palavra reservada this

This é uma palavra reservada que sempre refere-se ao que estou
executando. no caso abaixo, seria uma fala. No exemplo abaixo, this
seria no caso, o p1, ou seja, o que está instanciando a função.
This pode ser o objeto, a função, ou a instância.

Quando usamos a palavra reservada get antes do nome do método
podemos utiliza-la como atributo

Qual as vantagens de usar uma factory function ou uma constructor function?
Ambas farão a mesma coisa, só preciso escolher a favorita. No entanto
uma 

*/

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        altura,
        peso,
        // getter
        get nomeCompleto(){
            return `${nome} ${sobrenome}`;
        },

        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift() // remove o primeiro falor do array
            this.sobrenome = valor.join(' '); //insere um caractere especifico entre os valores


        },
        fala(assunto = 'falando sobre NADA'){
            return `${this.nome} - ${this.peso}kg está falando ${assunto}.`
        },
        // "transforma" o método em atributo (getter)
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

    };
}

// const p1 = criaPessoa('Diego','Rodrigues', 1.72, 80);
// const p2 = criaPessoa('Bruno',' Perdinati Mezenga',1.95, 60);
const p1 = criaPessoa('diego', 'souza rodrigues', 1.72, 80)
p1.nomeCompleto = 'Saul Viana de Souza Rodrigues'
console.log(p1.fala());
console.log(p1.imc);
console.log(p1.nome);
console.log();
console.log('Nome Completo:')
console.log(p1.nomeCompleto);
console.log(p1.sobrenome);

// console.log(p2.fala('sobre CSS'));
// console.log(p2.imc());

