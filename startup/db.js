const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');
require('dotenv').config();

// module.exports = function() {
//     const db = config.get('db');
//     mongoose
//         .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => winston.info(`Connected to MongoDB: ${db}...`))
//         .catch(err => winston.info(`Something failed ${err}...`) );
// }

module.exports = function () {
    let db = config.get("db"); // use for local
    // cloud requires server credentials (.env)
    const envN = process.env.NODE_ENV;
    if (envN === "production") {
      const db_usr = process.env.db_usr;
      const db_key = process.env.db_key;
      db =
        "mongodb://" +
        db_usr +
        ":" +
        db_key +
        "@cluster0.f6os851.mongodb.net/test";
      console.log("db: ", db);
    }
  
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => winston.info(`Connected to Mongodb: ${db} ...`))
      .catch(err => winston.info(`Something failed ${err}...`) );
  }