const express = require('express');

const app = express();

// Creating middleare
const logMiddleware = (req, res, next) => {
  console.log(`HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`);
  // Always call next to no block the req
  next();
};

// Configure middleware
app.use(logMiddleware);

// Send a message
app.get('/', (req, res) => res.send('Bem vindo'));

// Send a message with param
app.get('/nome/:name', (req, res) => res.send(`Oi ${req.params.name}`));

// Send a message with query param
app.get('/nome', (req, res) => res.send(`Oi ${req.query.name}`));

// Send a json as response
app.get('/json/:name', (req, res) => res.json({ name: req.params.name }));

app.listen(3000);
