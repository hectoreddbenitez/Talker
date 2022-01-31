const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./middlewares/getTalker');
const getTalkersById = require('./middlewares/getTalkerById');
const token = require('./middlewares/token');
const tokenValidator = require('./middlewares/tokenValidator');
const nameValidator = require('./middlewares/nameValidator');
const createTalker = require('./middlewares/createTalker');
const ageValidator = require('./middlewares/ageValidator');
const watchedAtValidator = require('./middlewares/watchedAtValidator');
const talkValidator = require('./middlewares/talkValidator');
const rateValidator = require('./middlewares/rateValidator');

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

app.post('/login', token);

app.use(tokenValidator, nameValidator, ageValidator, 
  talkValidator, watchedAtValidator, rateValidator);

app.post('/talker', createTalker);

// app.put('/talker', updateTalker);

app.listen(PORT, () => {
  console.log('Online');
});
