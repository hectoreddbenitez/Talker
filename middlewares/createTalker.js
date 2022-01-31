const fs = require('fs').promises;  

module.exports = async (req, res) => {
  const { name, age, talk } = req.body;
  // leio o arquivo
  const file = await fs.readFile('./talker.json');
  const talkers = JSON.parse(file);
  const newTalker = {
    id: talkers.length + 1,
    name,
    age,
    talk,
  };
  const newTalkers = JSON.stringify([...talkers, newTalker]);
  await fs.writeFile('./talker.json', newTalkers);
  res.status(201).json(newTalker);
};
