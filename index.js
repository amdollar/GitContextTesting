// var fs = require('fs');
const fs = fsWithCallbacks.promises;

const getGitId = async () => {
  const gitId = await fs.readFile('.git/HEAD', 'utf8');
  if (gitId.indexOf(':') === -1) {
    return gitId;
  }
  const refPath = '.git/' + gitId.substring(5).trim();
  return await fs.readFile(refPath, 'utf8');
};
async function test(){
const gitId = await getGitId();
}

test();
console.log(gitId)
console.log('here');


// var Git = require( 'nodegit' );

// Git.Repository.open('https://github.com/amdollar/GitContextTesting.git').then( function( repository ) {
//   return repository.getHeadCommit( );
// } ).then( function ( commit ) {
//   return commit.sha();
// } ).then( function ( hash ) {
//   // use `hash` here
// } );











// const fs = require('fs');
// const util = require('util');

// util.promisify(fs.readFile)('README.md').then((hash) => {
//     console.log(hash.toString().trim());
// });
// console.log('here');

// var sys = require('sys');
// var Git = require('git');
// // Git("/Users/tim/git/howtonode.org.git");
// Git("/Users/tim/Code/howtonode.org");
// Git.log("articles/what-is-this.markdown", function (err, data) {
//   if (err) throw err;
//   sys.p(data);
//   process.exit();
// });

// var sys = require('sys'),
//     Git = require('git');


// // Test it!
// Git("/Users/tim/code/howtonode.org");
// Git.exists("articles/control-flow-part-ii.markdown", function (err, tags) {
//   if (err) { throw(err); }
//   sys.p(tags);
// });
// Git.getTags(function (err, tags) {
//   if (err) { throw(err); }
//   Object.keys(tags).forEach(function (tag) {
//     Git.readDir("articles", tags[tag], function (err, contents) {
//       if (err) { throw(err); }
//       contents.files.forEach(function (file) {
//         file = Path.join("articles", file);
//         Git.readFile(file, tags[tag], function (err, text) {
//           if (err) { throw(err); }
//           sys.error("tag: " + tag + " sha1: " + tags[tag] + " file: " + file + " length: " + text.length);
//         });
//       });
//     });
//   });
// });