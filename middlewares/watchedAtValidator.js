// https://medium.com/@LoretoVaquero/validar-fechas-con-javascript-fe1b1c7b6524
const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
const validateDate = (date) => {
  const testDate = DATE_REGEX.test(date);
  if (testDate) {
    return true;
  }
};

module.exports = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  // Caso a data não respeite o formato dd/mm/aaaa
  if (!validateDate(watchedAt)) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};