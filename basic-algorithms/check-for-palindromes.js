//Check for palindromes

function palindrome(str) {
  // Good luck!
  var newStr = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();

      if (newStr == newStr.split('').reverse().join('')) {
        return true;
      } else {
          return false;
      }
}



palindrome("eye");
