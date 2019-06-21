const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
});

// Tell express that we want to access the requisition body
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'njk');

const users = ['wagner', 'hudons', 'david'];

// Send a message
app.get('/', (req, res) => res.render('list-example3', { users }));

app.get('/new', (req, res) => res.render('new-example3'));

app.post('/create', (req, res) => {
  users.push(req.body.user);
  return res.redirect('/');
});

app.listen(3000);
