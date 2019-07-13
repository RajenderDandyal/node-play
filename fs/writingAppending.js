let fs = require("fs");
var os = require("os");
let md = `
This is some content 
====================
* first
* second
* third
`;
let mdAppend = `
* more to come \n
`;

// Create file
// if file dos'nt exists it will be created
// writeFile dos'nt append to file, .. it create from scratch
fs.writeFile("sample.md", md, (err) => {
  if (err) throw err;
  console.log("done writing")
});


// append File
fs.appendFile("sample.md", md,{encoding:"UTF-8"}, (err)=>{
  if (err) throw err;
  console.log("done apending")
})