// servidor.js
const WebSocket = require('ws');

// cria servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

// quando um cliente conecta
wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // recebe mensagem
    ws.on('message', (message) => {
        console.log('Mensagem recebida:', message.toString());

        // envia resposta
        ws.send('Servidor recebeu: ' + message);
    });

    // envia mensagem inicial
    ws.send('Bem-vindo ao servidor WebSocket!');
});