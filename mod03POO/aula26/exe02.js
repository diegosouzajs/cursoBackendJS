/*
Crie a classe Notificacao contendo as propriedades nome, enderecoEmail e mensagem, além do
método enviar(), que deverá apresentar um comportamento genérico. Em seguida, implemente as classes
Email, SMS e Whatsapp, todas herdando de Notificacao. Cada subclasse deve sobrescrever o método
enviar(), definindo sua própria forma de envio. Por fim, implemente a função
processarNotificacoes(lista), que deve receber um conjunto de objetos de diferentes tipos de
notificações e, para cada item, chamar o método enviar() de maneira polimórfica, respeitando o
comportamento específico de cada classe.

*/

class Notificacao{
    constructor(nome, enderecoEmail, mensagem){
        this.nome = nome;
        this.enderecoEmail = enderecoEmail;
        this.mensagem = mensagem;
    }
    enviar(){
        console.log(`Enviando uma mensagem genérica ...`);
    }
}

class Email extends Notificacao{
    // constructor(nome, enderecoEmail, mensagem){
    //     super(nome, enderecoEmail, mensagem);
    // }
    enviar(){
        console.log(`${this.nome} enviou um email para ${this.enderecoEmail}. Com a seguinte mensagem:\n${this.mensagem}`)
    }
}

class SMS extends Notificacao{
    // constructor(nome, enderecoEmail, mensagem, telefone){
    //     super(nome, enderecoEmail, mensagem);
    //     this.telefone = telefone;
    // }
    enviar(){
        console.log(`${this.nome} enviou um SMS para ${this.telefone}. Com a seguinte mensagem:\n${this.mensagem}`)
    }
}

class Whatsapp extends Notificacao{
    // constructor(nome, enderecoEmail, mensagem, telefone){
    //     super(nome, enderecoEmail, mensagem);
    //     this.telefone = telefone;
    // }
    enviar(){
        console.log(`${this.nome} enviou uma mensagem no WHATSAPP para ${this.telefone}. Com a seguinte texto:\n${this.mensagem}`)
    }
}



const notificacoes = [
    new Email("Diego", "diego@email.com", "Seu relatório está pronto."),
    new SMS("Maria", null, "Seu código é 1234." ),
    new Whatsapp("João", null, "Reunião às 14h.")
]

function processarNotificacoes(lista) {
    for (const notificacao of lista) {
        notificacao.enviar();
    }
}

processarNotificacoes(notificacoes);


// const email1 = new Email('Teste','teste@teste','Oi');
// const sms1 = new SMS ('Teste','teste@teste','Oi para você','11223344');
// const wta = new Whatsapp ('José','jose@teste','Oi, sumida!','11223355');
// console.log(email1.enviar());
// console.log();
// console.log(sms1.enviar());
// console.log();
// console.log(wta.enviar());





// class Notificacao {
//     constructor(nome, enderecoEmail, mensagem) {
//         this.nome = nome;
//         this.enderecoEmail = enderecoEmail;
//         this.mensagem = mensagem;
//     }

//     enviar() {
//         console.log("Enviando notificação genérica...");
//     }
// }

// class Email extends Notificacao {
//     enviar() {
//         console.log(
//             `Enviando EMAIL para ${this.nome} (${this.enderecoEmail}): ${this.mensagem}`
//         );
//     }
// }

// class SMS extends Notificacao {
//     enviar() {
//         console.log(
//             `Enviando SMS para ${this.nome}: ${this.mensagem}`
//         );
//     }
// }

// class Whatsapp extends Notificacao {
//     enviar() {
//         console.log(
//             `Enviando WHATSAPP para ${this.nome}: ${this.mensagem}`
//         );
//     }
// }

// function processarNotificacoes(lista) {
//     for (const notificacao of lista) {
//         notificacao.enviar();
//     }
// }

// const notificacoes = [
//     new Email("Diego", "diego@email.com", "Seu relatório está pronto."),
//     new SMS("Maria", null, "Seu código é 1234."),
//     new Whatsapp("João", null, "Reunião às 14h.")
// ];

// processarNotificacoes(notificacoes);
