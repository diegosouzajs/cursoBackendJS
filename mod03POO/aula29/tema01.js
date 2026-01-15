/* Promises

Usadas para controlar algo que não temos certeza de quando vão acabar.

Promises são promessas. Quando trabalha-se na internet é comum
fazer requisições e não ter dimensão do tempo que ela levará para retornar.
As promises são uma solução mais moderna ao antigo callbacks. É utilizada para 
fazer algo assincrono parecer que é executado sincronamente. 

Com as promises dizemos ao javascript a ordem em que queremos que nossa função seja executada
não importando o tempo de demora. Isso era resolvido com callbacks anteriormente. 
Contudo, com os callbacks o código fica confuso e podemos acabar elaborando um callback hell

Uma solução é envolver a chamada por uma Promise. Cada then chama uma função em cadeia

O reject é usado para quando ocorrer algum erro durante a execução. Ele recebea
a cláusula de rejeição da promise e o erro é tratado no catch

Criando a promise
1 - cria-se a promise usando seu contrutor: new Promise
2 - a promise recebe uma função de arrow que por sua vez recebe dois parâmetros
    resolve e reject;
3 - Sempre que quero resolver uma promessa em qualquer lugar do código chamo o then
4 - se dou um reject ele vai direto para o catch
*/

function esperaAi(msg, tempo){
    // chamada do construtor da promise que recebe uma função
    // que sempre resolve dois parâmetros - Resolve e reject.
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            // resolvo a promise após a execução do código anterior
            if (typeof msg !== 'string') reject(new Error('Erro'));
            resolve(msg);
            
        },tempo);
    })
}

function rand(min, max){
    min *= 1000;
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}
// sempre que chamamos resolve o then é executado e quando chamaos o reject o catch é executado
esperaAi('Conexão com a base de dados', 1000)
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da base', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Retornando os dados para o usuário', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibindo os dados na tela');
    })
    .catch( e => {
        console.log('ERRO: ', 'erro louco');
    })

console.log('Isso será exibido primeiro');


