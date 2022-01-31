module.exports = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;
  console.log({ rate });
  // Caso a nota não seja um inteiro de 1 à 5 
    if (rate < 1 || rate > 5 || rate % 1 !== 0) {
      return res.status(400).json({
        message: 'O campo "rate" deve ser um inteiro de 1 à 5',
      });
    }
  next();
};