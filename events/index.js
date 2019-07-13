let EventEmitter = require('events').EventEmitter;
let util = require("util");

let Person = function (name) {
  this.name = name;
};
Person.prototype = Object.assign({}, Person.prototype, EventEmitter.prototype)
//util.inherits(Person, EventEmitter);
let ben  = new Person("Ben Franklin");
ben.on("speak", (said)=>{
  console.log(`ben says: ${said}`)
});

ben.emit("speak", "Hello world")