const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
const config = require('config');

module.exports = function() {
    winston.exceptions.handle(
      new winston.transports.File({filename: 'uncaughtExceptions.log'}),
        new winston.transports.Console({ 
          format: winston.format.simple(), 
          colorize: true, 
          prettyPrint: true 
        })    
      );
    
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    new winston.transports.File({ filename: 'error.log', level: 'error' });

    winston.add(
        new winston.transports.MongoDB({
          db: config.get('db'),
          level: 'info',
          options: {useUnifiedTopology: true},
        })
      );    
    winston.add(new winston.transports.File({filename: 'logfile.log'}));
}