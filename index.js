const fs = require('fs');
const util = require('util');

util.promisify(fs.readFile)('README.md').then((hash) => {
    console.log(hash.toString().trim());
});
console.log('here');