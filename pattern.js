function starLine(length) {
  var str = "";
  for (var i = 0; i < length; i++) {
    str += "*";
  }
  return str;
}

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

function pattern3(length) {
  for (var i = 0; i < length; i++) {
    var str = "";
    if (i % 2 !== 0) {
      for (var j = 0; j < (length - i) / 2; j++) {
        str += " ";
      }
      str += starLine(i);
      console.log(str);
    }
  }
}

// pattern1(10);
// pattern2(10);
pattern3(10);
