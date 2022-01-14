const fs = require('fs').promises;  

module.exports = (_req, res) => {
  fs.readFile('./talker.json')
  .then((data) => res.status(200).json(JSON.parse(data)));
};