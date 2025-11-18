/*
Implemente um programa em JavaScript que simule uma contagem regressiva 
(por exemplo, de 10 até 0), exibindo no console o tempo restante a cada segundo.
Quando o contador chegar a zero, deve ser exibida a mensagem “Tempo esgotado!” 
e o intervalo deve ser interrompido.

Além disso:

Use setInterval() para realizar a contagem a cada segundo.
Utilize setTimeout() para exibir uma mensagem adicional após 3 segundos do 
término da contagem, simulando uma ação posterior (por exemplo, “Reiniciando contagem...”).
O código deve conter comentários explicativos e tratar o controle do tempo de forma clara.
*/

// // Tempo inicial em segundos
let tempo = 10; // tempo --

// // Constante que recebe minha função setInterval executada a cada 1 segundo
// const intervalo = setInterval(function(){
//     console.log('⏲️ Tempo restante:', tempo--);
// }, 1000);


// // Ação a ser executada após 3 segundos
// setTimeout(function(){
//     console.log('🚨 Movimento detectado');
// }, 3000);


// // Encerramento da execução do intervalo apos 12 segundos
// setTimeout(() => {
//     console.log('Contagem encerrada!');
//     clearInterval(intervalo);    
// }, 12000);

// Cria o intervalo que executa a função a cada 1 segundo (1000 ms)
const intervalo = setInterval(() => {
    console.log(`⏰ Tempo restante: ${tempo}s`);

    // Quando chegar a zero, interrompe o intervalo
    if (tempo === 0) {
        console.log("🚨Tempo esgotado!");
        clearInterval(intervalo);

        // Após 3 segundos do início, executa uma nova ação
        setTimeout(() => {
            console.log("🔁 Reiniciando contagem...");
            // Aqui poderia reiniciar o processo ou chamar outra função
        }, 3000);
    }

    tempo--; // Decrementa o tempo a cada execução
}, 1000);