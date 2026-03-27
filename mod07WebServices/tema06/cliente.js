const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

// quando conectar
ws.on('open', () => {
    console.log('Conectado ao servidor');

    // envia mensagem
    ws.send('Olá servidor!');
});

// quando receber mensagem
ws.on('message', (data) => {
    console.log('Mensagem do servidor:', data.toString());
});