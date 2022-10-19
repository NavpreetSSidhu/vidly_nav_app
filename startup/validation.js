const Joi  = require('joi');

module.exports = function() {
    Joi.objId = require('joi-objectid')(Joi);
}