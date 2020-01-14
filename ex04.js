const LinkedList = require("./linkedList");

let test = new LinkedList();
test.appendToTail("titi");
test.appendToTail("tutu");
test.appendToTail("tata");
console.log(test);
test.deleteNode(1);
console.log(test);
