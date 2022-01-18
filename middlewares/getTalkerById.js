const fs = require('fs').promises;
// com ajuda do Jonathan Ferreira'
module.exports = async (req, res) => {
  const { id } = req.params;
  // guardo na const List a resposta 'stringuifeada'
  const List = await fs.readFile('./talker.json', 'utf-8');
  // 'desstringuifica' a const List com JSON.parse'
  const response = JSON.parse(List);
  // console.log(response);
  const talkerById = response.find((talker) => talker.id === +id);
  if (!talkerById) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    }); 
  }
  // console.log({ talkerById });
  res.status(200).json(talkerById);
};
