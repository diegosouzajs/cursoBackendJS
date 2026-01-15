/*
Aula 28 - Composição e Associação entre Objetos

Associação


Associação: 

Relação onde um objeto usa outro, mas ambos podem existir separadamente.
Dependência: Fraca (vida independente).	
Um Aluno está associado a um Curso.

Composição:
Relação mais forte, onde um objeto contém outro, e o objeto interno não 
existe sem o principal.
Dependência: Forte (vida dependente).	
Eemplo: "Um Carro é composto por um Motor. 
Se o carro deixar de existir, o motor também."

*/


// Associação tem uma relação com

class Curso {
    constructor(nome) {
        this.nome = nome;
    }
}

class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.curso = null;
    }

    inscrever(curso) {
        this.curso = curso;
    }
    // O operador ?. permite acessar uma propriedade somente se o objeto 
    // anterior existir. Caso contrário, a expressão retorna undefined sem lançar
    //  erro de execução.
    // O operador ?? define um valor padrão quando a expressão à esquerda é null ou undefined.
    // Nesse caso:
    // Se this.curso?.nome existir, ele será exibido.
    // Caso contrário, a string "nenhum curso" será utilizada.
    // É importante notar que ?? difere do operador ||, pois não trata valores
    //  falsy como "", 0 ou false como inválidos — apenas null e undefined.

    exibirDados() {
        console.log(`${this.nome} está matriculado em ${this.curso?.nome ?? "nenhum curso"}`);
    }
}

// Teste
const cursoJS = new Curso("JavaScript Avançado");
const aluno1 = new Aluno("Diego");
const curso2 = 'Banco de dados'

console.log('Associação')
aluno1.inscrever(cursoJS);
// aluno1.inscrever(curso2);
aluno1.exibirDados();
console.log();

// Composição: é composto de 

class Motor {
    constructor(potencia) {
        this.potencia = potencia;
    }
    
    ligar() {
        console.log(`Motor de ${this.potencia} cavalos ligado!`);
    }
}

// não uso o extends e não uso o super()
class Carro {
    constructor(modelo, potenciaMotor) {
        this.modelo = modelo;
        // composição: o motor é criado dentro do carro
        this.motor = new Motor(potenciaMotor);
    }
    
    iniciar() {
        console.log(`Iniciando ${this.modelo}...`);
        this.motor.ligar();
    }
}

// Teste
const carro = new Carro("Tesla Model 3", 450);
console.log('Composição')
carro.iniciar();
