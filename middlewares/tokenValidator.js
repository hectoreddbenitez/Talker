module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  // caso o password não exista ou seja uma string vazia
    const MINCARACTER = 16;
    if (!authorization || authorization === '') {
      return res.status(401).json({
        message: 'Token não encontrado',
      });
    }
    // console.log('estou em validate token', token);
    if (authorization.length !== MINCARACTER) {
      return res.status(401).json({
        message: 'Token inválido',
      });
    }
  next();
};