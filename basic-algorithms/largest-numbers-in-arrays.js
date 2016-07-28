//Return an array consisting of the largest number from each provided sub-array

function largestOfFour(arr) {
  var outputArr = [];
  for (var i=0; i < arr.length; i++) {
  	var largest = 0;
  	for (var j=0; j < arr[i].length; j++) {
  		if (arr[i][j] > largest) {
  			largest = arr[i][j];
  		}
  	}
  	outputArr[i] = largest;
  }
  return outputArr;
}
