const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./middlewares/getTalker');
const getTalkersById = require('./middlewares/getTalkerById');
const token = require('./middlewares/token');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkers);

app.get('/talker/:id', getTalkersById);

app.use(token);

app.post('/login');

app.listen(PORT, () => {
  console.log('Online');
});
