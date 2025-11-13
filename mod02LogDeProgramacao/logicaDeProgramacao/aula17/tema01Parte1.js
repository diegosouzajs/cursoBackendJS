/*
Aula 16 - Tratando e lançando erros (try, catch, finally, throw)

Saber identificar um erro é um dos pilares de um bom desenvolvedor assim como 
saber trata-lo. Como bom programador não devemos deixar que o usuário veja um 
erro sem o devido tratamento pois isso acarreta riscos uma vez que expõe detalhes
do nosso código o que pode comprometer a segurança da aplicação. Quando vamos 
executar um código que potencialmente, pode resultar um erro, utilizamos o bloco 
try... catch. O try significa tentar e é exatamente o que é feito.
O javascript tenta executar o código presente no bloco try e, caso ocorra 
algum tipo de erro, o catch apresenta uma mensagem mais amigavel para meu usuário
Logar o erro em si, não é recomendado.

Um erro apresentará
    o arquivo
    o trecho onde o erro ocorreu
    a linha e a coluna
    e o stack trace (é um registro da sequência de chamadas de função que 
    um programa fez até o momento em que um erro ocorreu)

O bloco try.. catch é muito similar ao if... else
*/


console.log();
console.log("---------- Erro padrão ----------");
console.log();

// Gerar um erro
try{
    console.log(naoExisto);
}catch(e){ // pode ser qualquer nome e, error, err
    console.log('naoExisto não existe');
    console.log(e); // para ver o erro completo
    console.log(e.name); // para ver o nome do erro
    console.log(e.message); // para ver a mensagem de descrição do erro
}

console.log();
console.log("---------- Lançando nosso próprio erro ----------");
console.log();

// Além disso, podemos lançar nosso próprios erros
// isso é util para logar oerro, apresentar para outros desenvolvedore 
// ou até capturar o erro para salvar em um log, por exemplo
// podemos tratar o próprio erro e para isso, voltamos para o try
// desta forma, teremos apenas a mensagem do erro que criamos.
// Para ter as demais informações, podemos lançar um erro completo.
// usando a função construtora podemos criar nosso erro e até especificar o tipo de 
// error que queremos tratar

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        // throw('x e y precisam ser números'); // lançar a mensagem de erro
        throw new TypeError('x e y precisam ser números'); // lançar o erro podemos criar as classes de erro
        // esses erros são para desenvolvedores entenderem o que aconteceu
    }
    return x + y;
}

try{
    console.log(soma(3,5));
    console.log(soma('3',5));
}catch(error){
    console.log(error.name);
    console.log(error.message);
}

// Finally
// O finally é um um bloco opcional, porém tem sua utilidade.
// Ele sempre será executado, independentemente de acontecer um erro ou não


try{
    // javascript tenta executar esse código
    // se o código der erro, executa o catch
} catch(e){
    // executado quando há erros no bloco try
} finally{
    // sempre é executado
}

console.log();
console.log("---------- Finally ----------");
console.log();



// simulando a utilização do finally
// no exemplo, faço a simulação da abertura, manipulação e fechamento do arquivo
// caso dê erro, o arquivo permanecerá aberto e o finally fica encarregado
// de fecha-lo.
try{
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log(a);
    console.log('Fechei o arquivo');
    try{
        console.log('b');
    }catch(e){
        console.log('Deu erro');
    }finally{
        console.log('FINALLY INTERNO')
    }
}catch(e){
    console.log('Tratando o erro')
}finally{
    console.log('FINALLY: Eu sempre sou executado')
    console.log('fecha o arquivo');
}


console.log();
console.log("---------- Finally ----------");
console.log();


// a função retornará qualquer data
// quero que ela retorne uma instância de date
// new Date()
function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('O valor não é uma instância de Date')
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

try{
    const data = new Date('01-01-1971 12:58:12')
    const tempo = new Date()
    tempo.setHours(1,5,9);
    const hora = retornaHora(11);
    console.log(hora);
    console.log(retornaHora(data));
}catch(e){
    console.log(e.message);
}finally{
    console.log('Tenha um bom dia')
}