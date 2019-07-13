let fs = require("fs");

/*fs.readdir("./lib",{encoding:"UTF-8"}, (err,files)=>{
  console.log(files)
})*/
if (fs.existsSync("lib2")){
  console.log("lib2 already exists")
  fs.readdir("./lib2", {encoding:"UTF-8"}, (err, files)=>{
    files.forEach(file=>{
      fs.unlinkSync(__dirname+`/lib2/${file}`)
    })
    fs.rmdirSync("./lib2")
    console.log("lib2 already exists .. hence removed")
  })
}else {
  fs.mkdir("lib2",(err)=>{
    if (err) throw err;
    console.log("lib2 created")
    fs.writeFile("./lib2/index.js", `console.log("hi there")`,(err)=>{
      if (err) throw err
      console.log("index.js created inside lib2")
    })
  })
}