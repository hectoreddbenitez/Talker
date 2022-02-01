const fs = require('fs').promises;  

module.exports = async (req, res) => {
  const { id } = req.params;
  // leio o arquivo
  const file = await fs.readFile('./talker.json');
  const talkers = JSON.parse(file);
  // filtro tirando os talkers com id deiferente do id que vem do params
  const talkersFiltered = talkers.filter((talker) => talker.id !== +id);
  const newTalkers = JSON.stringify(talkersFiltered);
  await fs.writeFile('./talker.json', newTalkers);
  res.status(204).json(newTalkers);
};
