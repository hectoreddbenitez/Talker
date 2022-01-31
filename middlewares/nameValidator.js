module.exports = (req, res, next) => {
  const { name } = req.body;
  // caso o nome não exista ou seja uma string vazia
    const MINCARACTER = 3;
    if (!name || name === '') {
      return res.status(400).json({
        message: 'O campo "name" é obrigatório',
      });
    }
    // caso o nome tenha menhos de 3 caracteres
    if (name.length < MINCARACTER) {
      return res.status(400).json({
        message: 'O "name" deve ter pelo menos 3 caracteres',
      });
    }
  next();
};