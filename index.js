// server.mjs
const express = require('express'); 
const app = express();
app.use(express.static('public'));

app.get('/hello-word', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
