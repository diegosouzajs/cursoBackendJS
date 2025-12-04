
// função construtora para Usuário
function Usuario(nome, sobrenome, senha) {
    let senhaPrivada = senha;
    this.nome = nome;
    this.sobrenome = sobrenome;

    // método interno da função Usuario
    this.verificarSenha = function (tentativa) {
        return tentativa === senhaPrivada;
    };
}


const user1 = new Usuario('Diego','Souza','4321');
const tentativa = user1.verificarSenha('1234') ? 'Usuário autenticado':'Falha no login';



console.log(user1);

console.log(tentativa)

// inclusão de método no prototype da função construtora Usuario
// Usuario.prototype.bemVindo = function () {
//     console.log(`Bem-vindo, ${this.nome}`);
// };

// Função construtora Aluno que herda de Usuario
function Aluno(nome, sobrenome, senha, ano, idade) {
    Usuario.call(this, nome, sobrenome, senha);
    this.ano = ano;
    this.idade = idade;
}

// // herda métodos do prototype
// Aluno.prototype = Object.create(Usuario.prototype);

// // ajusta o construtor(boa prática)
// Aluno.prototype.contructor = Aluno;

// // método exclusivo de Aluno
// Aluno.prototype.apresentar = function () {
//     console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
// }

// // criando Usuario
// const u1 = new Usuario("Diego", "1234");
// // console.log(u1.verificarSenha("4321")); // false
// console.log('------ Usuário ------');
// console.log(u1);

// // chamada do método interno verificarSenha
// const logar = u1.verificarSenha('4321') ? `Login efetuado com sucesso`:'Falha no login'
// console.log(logar); // false
// console.log()

// // criando Aluno
// const a1 = new Aluno('Henrique', 'Ferreira', '12345','terceiro', 17);
// console.log('------ Aluno ------')
// console.log(a1);
// a1.apresentar();




// function Pessoa(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.falar = function(){
//         console.log('Olá');
//     }

// }

// function Aluno(nome, sobrenome, idade, serie){
//     Pessoa.call(this, nome, sobrenome);
//     this.idade = idade;
//     this.serie = serie;
// }

// Aluno.prototype = Object.create(Pessoa);


// const aluno1 = new Aluno('Diego', 'Souza', 39, 'terceiro ano');
// console.log(aluno1);
// aluno1.falar();

const pessoa = {
    nome: 'Diego',
    sobrenome: 'Souza',
    fala(){
        console.log('Olá '+ this.nome +" "+this.sobrenome);
    }
}



const aluno = Object.create(pessoa);
aluno.fala();