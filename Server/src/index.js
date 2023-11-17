const { conn } = require('./DB_connection')
const server = require('./app')
const PORT = 3001;

conn
  .sync({})
  .then(() => {
    server.listen(PORT, '0.0.0.0', () => {
      console.log(`Server raised in port: ${PORT}`);
    });
  })
  .catch((err) => err);