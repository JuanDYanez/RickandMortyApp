require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const modelFavorite = require('./models/Favorite')
const modelUser = require('./models/User')

const dbConnection = process.env.DB_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`
const sequelize = new Sequelize(dbConnection,
  { logging: false, native: false }
);

sequelize.authenticate()
  .then((res) => console.log("Connection stablished succesfully"))
  .catch((error) => console.log("Connection fail: " + error.message))

modelFavorite(sequelize);
modelUser(sequelize);

const { User, Favorite } = sequelize.models;
Favorite.belongsToMany(User, {through: 'user_favorite'})
User.belongsToMany(Favorite, {through: 'user_favorite'})

module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
