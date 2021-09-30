// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.CRYPTO_URl,
  databaseURL: process.env.DATABASE_URL,
  port: process.env.PORT
};
