const fs = require('fs').promises;
// com ajuda do 'Jonathan Ferreira', aplicando baby steps para ver se vai...
module.exports = async (req, res) => {
  // desestructuro e pego o parámetro id, da requisição, para usar na linea 11
  const { id } = req.params;
  // leio o arquivo e guardo na const List a resposta 'stringuifeada'
  const List = await fs.readFile('./talker.json', 'utf-8');
  // 'desstringuifica' a const List com JSON.parse, para levar a formato Json'
  const response = JSON.parse(List);
  // console.log(response);
  // utilizo o método find para procurar pelo id
  const talkerById = response.find((talker) => talker.id === +id);
  // se o talker não existir, retorna 404, com msg do erro
  if (!talkerById) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    }); 
  }
  // se achar o talker, retorna 200, com o talker
  res.status(200).json(talkerById);
};
