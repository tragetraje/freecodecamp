//Reverse the provided string.

//Using built-in methods
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

//Using for-loop
function reverseString(str) {
  var reversedStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversedStr += str.charAt(i);
    }
  return reversedStr;
}
