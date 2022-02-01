const fs = require('fs').promises;  

module.exports = async (req, res) => {
  const { q } = req.query;
  // leio o arquivo
  const file = await fs.readFile('./talker.json');
  const talkers = JSON.parse(file);
  // filtro procurando pelo parametro q
  const talkersFiltered = talkers.filter((talker) => talker.name.includes(q));
   res.status(200).json(talkersFiltered);
};
