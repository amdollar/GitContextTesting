const nodegit = require("nodegit");
const path = require("path");

// This example opens a certain file, `README.md`, at a particular commit,
// and prints the first 10 lines as well as some metadata.

(async () => {
  const repo = await nodegit.Repository.open(path.resolve(__dirname, "https://github.com/amdollar/GitContextTesting.git"));
  console.log(__dirname);
  console.log('repo : '+ repo)
  const commit = await repo.getCommit("528cebde981ae1a08c1f14e3c4fcf67d5ce5ba1e");
  console.log('commit : ' +commit);
  const entry = await commit.getEntry("index.js");
  console.log('entry: ' +entry);
  const blob = await entry.getBlob();
  
  console.log(entry.name(), entry.sha(), blob.rawsize() + "b");
  console.log("========================================================\n\n");
  const firstTenLines = blob.toString().split("\n").slice(0, 10).join("\n");
  console.log(firstTenLines);
  console.log("...");
})();


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