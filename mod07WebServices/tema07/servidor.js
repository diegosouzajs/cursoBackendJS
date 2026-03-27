// servidor.js
// Simulação de chat com o terminal
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// função simples de resposta (chatbot)
function gerarResposta(mensagem) {
    mensagem = mensagem.toLowerCase();

    if (mensagem.includes('oi')) return 'Olá! Como posso ajudar?';
    if (mensagem.includes('hora')) return `Agora são ${new Date().toLocaleTimeString()}`;
    if (mensagem.includes('nome')) return 'Sou um chatbot com WebSockets!';
    
    return 'Não entendi sua mensagem.';
}

wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    ws.send('Chatbot: Olá! Digite uma mensagem.');

    ws.on('message', (message) => {
        const texto = message.toString();
        console.log('Usuário:', texto);

        const resposta = gerarResposta(texto);

        ws.send(`Chatbot: ${resposta}`);
    });
});