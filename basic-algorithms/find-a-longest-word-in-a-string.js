//Return the length of the longest word in the provided sentence

function findLongestWord(str) {
  var newStr = str.split(' ');
  var longestStr = 0;
  	for (var i=0; i < newStr.length; i++) {
  		if (newStr[i].length > longestStr) {
  			longestStr = newStr[i].length;
  		}
  	}
  return longestStr;
}

//findLongestWord("The quick brown fox jumped over the lazy dog");
