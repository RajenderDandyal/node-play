let fs = require("fs");

let file = "files";
let mark = "markup";
fs.rename(`./lib/${file}.txt`, `./lib/${file.length === 4?"file":"files"}.txt`, (err)=>{
  if (err) throw err;

  console.log(" --rename done--")
});
fs.renameSync(`./lib/${mark}.md`, `./lib/${mark.length === 4 ? "markup":"mark"}.md`)
