const jsonServer = require('json-server');
const path = require('path');

// Criar o servidor JSON
// const router = jsonServer.router('./api/db.json');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

// Criando a função handler do Vercel (no lugar de "listen")
module.exports = (req, res) => {
  const server = jsonServer.create();
  server.use(middlewares);
  server.use(router);
  server(req, res);  // A função handler serveriza a resposta
};

