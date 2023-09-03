function pattern1(length) {
  for (var i = 0; i < length; i++) {
    var str = "";
    for (j = 1; j <= i + 1; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

function pattern2(length) {
  for (var i = 0; i < length; i++) {
    var str = "";
    for (var j = 1; j < length - i; j = j + 1) {
      str += "  ";
    }
    for (var j = 1; j <= i + 1; j++) {
      str += "* ";
    }
    for (var j = 1; j < length - i; j = j + 1) {
      str += "  ";
    }
    console.log(str);
  }
}

pattern1(10);
pattern2(10);
