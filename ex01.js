let str = process.argv[2] || false;

if (!str) {
	console.log("Please enter a valid string");
	return;
}

let savedchr = "";

for (const chr of str) {
	for (const usedchr of savedchr) {
		if (chr === usedchr) {
			console.log("This string contain not only unique characters");
			return;
		}
	}
	savedchr += chr;
}

console.log("Tis string contain only unique characters");