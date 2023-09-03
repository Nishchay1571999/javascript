function pattern(length) {
  for (var i = 0; i < length; i++) {
    var str = "";
    for (j = 1; j <= i + 1; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

pattern(10);
