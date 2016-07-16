//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
var splitStr = str.toLowerCase().split(' ');
for (var i=0; i < splitStr.length; i++) {
			 splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
}
return splitStr.join(' ');
}

titleCase("I'm a little tea pot");
