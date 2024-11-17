const fs = require('fs'); 

module.exports = {
  privateKey: fs.readFileSync('./env/keys/jwtRS256.key'),
  publicKey: fs.readFileSync('./env/keys/jwtRS256.key.pub')
}