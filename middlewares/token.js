function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validEmail(email, res) {
  if (!email || email === '') {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }
  if (validateEmail(email) === false) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
}

function validPasword(password, res) {
  const MINCARACTER = 6;
  if (!password || password === '') {
    return res.status(400).json({
      message: 'O campo "password" é obrigatório',
    });
  }
  if (password.length < MINCARACTER) {
    return res.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }
}

module.exports = (req, res) => {
  const { email, password } = req.body;
  validEmail(email, res);
  validPasword(password, res);

  res.status(200).json({
    token: '7mqaVRXJSp886CGr',
  });
};