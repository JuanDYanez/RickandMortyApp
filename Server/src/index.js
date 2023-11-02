const http = require('http')
const PORT = 3001
const {getCharById} = require('./controllers/getCharById')

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url.includes("/rickandmorty/character")) {
    let id = Number(req.url.split("/").at(-1));

    getCharById(res, +id);
  }

}).listen(PORT, 'localhost')