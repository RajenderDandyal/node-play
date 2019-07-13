let fs = require("fs");
let path = require("path");

// reading the content of all files inside lib directory

fs.readdir("./lib", function (err, files) {
  files.forEach(function (fileName) {
    let file = path.join(__dirname, "lib", fileName);
    let stats = fs.statSync(file);
    if (stats.isFile()){
      fs.readFile(file, "UTF-8", function (err, contents) {
        console.log(contents);
      })
    }
  })
})