const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
});

app.set('view engine', 'njk');

// Send a message
app.get('/', (req, res) => res.render('list-example2', { name: 'Wagner ' }));

app.listen(3000);
