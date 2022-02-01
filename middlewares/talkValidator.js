module.exports = (req, res, next) => {
  const { talk } = req.body;
  // Caso a nota não seja um inteiro de 1 à 5 retorne
    if (!talk || !talk.watchedAt || talk.rate === undefined) {
      return res.status(400).json({
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      });
    }
  next();
};