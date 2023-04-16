const express = require('express');
const app = express();
const port = 8000;

app.get('/api', (req, res) => {
  res.send('Hello from microservice1!');
});

app.listen(port, () => {
  console.log(`Microservice1 listening at http://localhost:${port}`);
});
