const fs = require("fs");

// by default with nodejs encoding will be binary
// this methods copies all data into memory/buffer
// then we put that buffer into new file/place
// always prefer stream over these method

//1
/*
let file = fs.readFileSync("./lib/files.txt");
fs.writeFileSync("./fileCopy.txt",file,{encoding:"utf8"});
*/

//2
fs.readFile("./lib/files.txt", (err,data)=>{
  if (err) throw err;
  console.log("data into buffer")
  fs.writeFile("./fileCopy2.txt",data, (err)=>{
    if (err)throw err;
    console.log("Buffer to fileCopy2.txt")
  })
})