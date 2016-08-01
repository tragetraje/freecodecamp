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

//Another solution

function findLongestWord(str) {
  str = str.split(" ");
  str = str.sort(function(shortest, longest){
    return shortest.length - longest.length;
  });

   return str[str.length - 1].length;
}


//findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
