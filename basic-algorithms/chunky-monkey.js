//Write a function that splits an array (first argument) into groups the length //of size (second argument) and returns them as a two-dimensional array

function chunkArrayInGroups(arr, size) {
  var chunkArr = [];
  	for (var i = 0, len = arr.length; i < len; i+=size) {
  chunkArr.push(arr.slice(0, size));

  //After pushing the first chunk to chunkArr let arr equal
  //remaining part of the arr
  arr = arr.slice(size);
  }
  return chunkArr;
}

//Another solution
function chunkArrayInGroups(arr, size) {
  var chunkArr = [];
  	for (var i = 0; i < arr.length; i+=size) {
  chunkArr.push(arr.slice(i, i + size));
  }
  return chunkArr;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);
