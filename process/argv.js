console.log(process.argv);
// for this command in terminal
//node argv --user raj --mode dev --greeting "hello there!"
/*
Admin@rajender MINGW64 ~/Desktop/nodeNotes/process
$ node argv --user raj --mode dev --greeting "hello there!"
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Admin\\Desktop\\nodeNotes\\process\\argv',
  '--user',
  'raj',
  '--mode',
  'dev',
  '--greeting',
  'hello there!' ]

*/
function grab(flag) {
  let index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1];
}
let user = grab("--user");
let greeting = grab("--greeting");

if (!user || !greeting){
  console.log("You Blew it!")
} else {
  console.log(`Welcome ${user}, ${greeting}`)
}