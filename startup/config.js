// const config = require('config');

// module.exports = function() {
//     if(!config.get('jwtPrivateKey')) {
//         throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
//     }
// }

require('dotenv').config();
const vidKey = process.env.vidly_jwtPrivateKey;

module.exports = function() {
    if(!vidKey) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
    }
}