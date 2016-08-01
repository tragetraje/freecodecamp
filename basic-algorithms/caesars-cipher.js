//Write a function which takes a ROT13 encoded string as input and returns a decoded string

function rot13(str) { // LBH QVQ VG!
    str.split('');
    var unicodeArray = [];
    for (var i = 0; i < str.length; i++) {
        unicodeArray.push(str.charCodeAt(i));
    }
    for (var j = 0; j < unicodeArray.length; j++) {
        if (unicodeArray[j] > 64 && unicodeArray[j] < 78) {
            unicodeArray[j] = unicodeArray[j] + 13;
        } else if (unicodeArray[j] > 77 && unicodeArray[j] < 91) {
            unicodeArray[j] = unicodeArray[j] - 13;
        }
        unicodeArray[j] = String.fromCharCode(unicodeArray[j]);
    }

    return unicodeArray.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); // FREE CODE CAMP
