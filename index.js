const fs = require('fs');
const util = require('util');

util.promisify(fs.readFile)('.git/refs/heads/master').then((hash) => {
    console.log(hash.toString().trim());
});
console.log('here');