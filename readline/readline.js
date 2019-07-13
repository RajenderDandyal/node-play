let readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

let realPerson = {
  name: "",
  sayings: []
};
rl.question("What is the name of real person?", (ans) => {
  realPerson.name = ans;

  rl.setPrompt(`What would ${realPerson.name} say? `);
  rl.prompt()
  rl.on('line', (answer) => {
    if (answer.toString().trim() === "exit") {
      console.log(realPerson)
     return rl.close()
    }
      realPerson.sayings.push(answer)
      rl.setPrompt(`What else ${realPerson.name} say? ("exit" to leave)`);
      rl.prompt()


  })
});