module.exports = (req, res, next) => {
  const { age } = req.body;
  // console.log({ authorization });
  // caso o password não exista ou seja uma string vazia
    const MINAGE = 18;
    if (!age || age === '') {
      return res.status(400).json({
        message: 'O campo "age" é obrigatório',
      });
    }
    // console.log('estou em validate token', token);
    if (age < MINAGE) {
      return res.status(400).json({
        message: 'A pessoa palestrante deve ser maior de idade',
      });
    }
    
  next();
};