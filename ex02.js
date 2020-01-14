let str = process.argv[2] || false;

if (!str) {
	console.log("Please enter a valid string");
	return;
}

let newstring = "";

for (const chr of str) {
	newstring = chr + newstring;
}

console.log(newstring);