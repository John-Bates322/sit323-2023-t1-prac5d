const express = require('express');
const app = express();
const port = 9000;

app.get('/api', (req, res) => {
  res.send('Hello from microservice2!');
});

app.listen(port, () => {
  console.log(`Microservice2 listening at http://localhost:${port}`);
});
