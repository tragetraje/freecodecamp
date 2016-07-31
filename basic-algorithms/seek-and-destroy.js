function destroyer(arr) {

  var args = Array.from(arguments);
  for (var i = 0; i < args[0].length; i++) {
    for (var j = 1; j < args.length; j++ ) {
      if (args[0][i] === args[j]) {
        delete args[0][i];
      }
    }
  }
  return args[0].filter(function(num) {
    return num;
  });

}

destroyer(["tree", "hamburger", 53], "tree", 53);
