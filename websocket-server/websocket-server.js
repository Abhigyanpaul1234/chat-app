require('dotenv').config();

const WebSocket = require('ws');

const port = process.env.WS_PORT || 8081;

const server = new WebSocket.Server({ port });

server.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received from client:', message.toString());
    ws.send(message.toString());
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});


