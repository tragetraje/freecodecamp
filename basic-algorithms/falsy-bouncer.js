//Remove all falsy values from an array
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN

function bouncer(arr) {
    // Don't show a false ID to this bouncer.

    var filtered = arr.filter(function(val) {
        //Statement is equal to Boolean(val) which is false, filteres out
        //falsy values
        return val;
    });
    return filtered;
}

bouncer([7, "ate", "", false, 9]);

//Another solution

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

//And yet another

function bouncer(arr) {
    return arr.filter(Boolean);
}
