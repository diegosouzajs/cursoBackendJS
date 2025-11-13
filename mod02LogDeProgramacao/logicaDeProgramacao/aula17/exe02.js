/*
Implemente um programa em JavaScript que simule o sistema de alerta de um sensor.
O comportamento esperado é o seguinte:

A cada 2 segundos, o sensor deve verificar o ambiente e exibir a mensagem
→ "🔄 Verificando ambiente..."
(utilize setInterval()).

Após 10 segundos, um alerta deve ser disparado:
→ "🚨 Alerta! Movimento detectado!"
(utilize setTimeout()).

Caso o usuário cancele o alerta antes dos 10 segundos, o setTimeout() 
deve ser interrompido com clearTimeout(), exibindo:
→ "❌ Alerta cancelado pelo operador."

O intervalo de verificação (setInterval()) continua ativo até que o programa finalize.
*/

// Função simulando o sistema de monitoramento
function iniciarMonitoramento() {
    console.log("🟢 Sistema de monitoramento ativado.");

    // Intervalo que verifica o ambiente a cada 2 segundos
    const verificacao = setInterval(() => {
        console.log("🔄 Verificando ambiente...");
    }, 2000);

    // Timeout que dispara o alerta após 5 segundos
    const alerta = setTimeout(() => {
        console.log("🚨 Alerta! Movimento detectado!");
    }, 5000);

    // Simula o operador cancelando o alerta antes dos 10s (aos 6s)
    setTimeout(() => {
        clearTimeout(alerta);
        console.log("❌ Alerta cancelado pelo operador.");
    }, 10000);

    // Opcional: encerrar o sistema após 15 segundos
    setTimeout(() => {
        clearInterval(verificacao);
        console.log("🟥 Sistema encerrado.");
    }, 15000);
}

// Iniciar o sistema
iniciarMonitoramento();
