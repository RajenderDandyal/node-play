const fs = require("fs");

let readStream = fs.createReadStream("./lib/files.txt")
let writeStream = fs.createWriteStream("./copy.txt");

// 1
readStream.pipe(writeStream) //-- best solution

// 2
/*
readStream.on("data", (chunk)=>{
  writeStream.write(chunk)
  console.log("chunk write\n")
})*/
