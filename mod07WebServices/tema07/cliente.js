// cliente.js
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Conectado ao chatbot');

    process.stdin.on('data', (input) => {
        ws.send(input.toString().trim());
    });
});

ws.on('message', (data) => {
    console.log(data.toString());
});