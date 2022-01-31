const fs = require('fs').promises;  

module.exports = (_req, res) => {
  // leio o arquivo
  fs.readFile('./talker.json')
  // retorno 200, com o conteudo do arquivo, 'parseado'
  .then((data) => res.status(200).json(JSON.parse(data)));
};