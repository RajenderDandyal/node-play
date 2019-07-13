// console.log() uses the stdout to log msg

//process.stdout.write("hello ");

//process.stdout.write("world \n\n\n");
// hello world  ---- will be printed in same line ... then 3 line space

let questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];
let answers = [];
let index = 0;

function ask(i) {
  process.stdout.write(`\n\n ${questions[i]}`);
  process.stdout.write(' > ');
}

process.stdin.on('data', (data) => {
  //console.log(data.toString()) // data is buffer .. so use toString to get string and trim to remove new lines
  //process.stdout.write('\n'+data.toString().trim()+"\n")
  answers[index] = data.toString().trim();
  index++;
  if (questions.length < index + 1) {
    process.exit()
  }
  ask(index)
});

process.on("exit",()=>{
  process.stdout.write("\n\n")
  questions.forEach((item, i) => {
    process.stdout.write(`\n ${questions[i]}: ${answers[i]}`)
  });
  process.stdout.write("\n\n")
})
ask(index)