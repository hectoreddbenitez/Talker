// https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// caso o email não exista ou seja uma string vazia
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

// caso o password não exista ou seja uma string vazia
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
  // desestructuro email e password, do body da requisição
  const { email, password } = req.body;
  // utilizo email como parámetro da minha função de validação
  // se não passar na validação, retorna o status com o código do erro
  // se passar na validação, não retorna nada
  validEmail(email, res);
  // utilizo email como parámetro da minha função de validação
  // idem validação email
  validPasword(password, res);

  // caso email e password não retornem nada, retorna 200 com o token
  res.status(200).json({
    token: '7mqaVRXJSp886CGr',
  });
};