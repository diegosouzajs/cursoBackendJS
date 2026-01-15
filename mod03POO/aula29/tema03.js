/*

Async / Await

Utilizado para ser executado de forma sequencial como se fosse de forma síncrona
Semelhante as promises.

as promises tem 3 estados

pending -> está sendo executada e ainda não retornou o valor
full filed -> a promise foi executada e retornou o valor (resolvida). Ocorre quando não usamos o 
    await  ou o then
rejected -> a promise tentou executar mas retornou erro.


*/

function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 3000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve('Passei na promise - ' + msg.toUpperCase());
            return;
        }, tempo);
    });
}

async function executa(){
    try{
        const fase1 = await esperaAi('Conexão com o banco de dados', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Buscando os dados', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Retornando os dados para o usuário', rand());
        console.log(fase3);
        const fase4 = await esperaAi('Listando os dados na tela', rand());
        console.log(fase4);
        console.log('Requisição encerrada');
    } catch(e){
        console.log(e, 'Error encontrado no código');
    }
}

executa();

// Promise mesmo melhorando os callbacks são bastante verbosas

esperaAi('Fase 1', rand())
    .then((valor) => {
        console.log(valor);
        return esperaAi('Fase 2', rand())
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fim das promises', rand())
    })
    .then(fase => {
        console.log(fase)
    })
    .catch( e =>{
        console.log(e)
    })

// console.log('Código encerrado')
// a solução mais moderna seria usar async / Await
// usamos promises dentro de uma função de uma forma mais intuitiva 
// para tratar o erro das promises na função async / await podemos colocar
// um catch em cada await ou podemos englobar todas elas com um try catch

// esperaAi().then().then().then().then().catch(e)




// console.log();
// async function executa() {
//     try{
//         const fase1 = await esperaAi('Fase 1', rand());
//         console.log(fase1);
//         const fase2 = await esperaAi(500, rand());        
//         console.log(fase2);
//         const fase3 = await esperaAi('Fase 3', rand());
//         console.log(fase3);
//         console.log('Terminamos na fase: ', fase3)
//     }catch(e){
//         console.log(e)
//     }
// }

