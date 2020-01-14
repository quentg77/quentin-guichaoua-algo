let str1 = process.argv[2] || false;
let str2 = process.argv[3] || false;

if (!str1 || !str2) {
	console.log("Please enter a valid string");
	return;
}

console.log(isAnagrams(str1, str2));

function isAnagrams(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	for (const chr of str1) {
		if ((str2 = deleteChar(chr, str2)) === false) {
			return false;
		}
		// console.log(str2);
	}

	return true;
}

function deleteChar(charToDel, str) {
	let result = false;
	let newstr = "";
	// console.log("deletchar", charToDel, str);
	for (const chr of str) {
		if (chr === charToDel && result === false) {
			result = true;
			continue;
		}

		newstr += chr;
	}

	if (result === false) {
		return false;
	}
	// console.log("deletchar result", newstr)
	return newstr;
}
