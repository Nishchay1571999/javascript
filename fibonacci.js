function fib() {
  var i = 1;
  var j = 0;
  for (var k = 0; k < 50; k++) {
    console.log(`================================`);
    console.log(j);
    console.log(`================================`);
    var temp = i + j;
    j = i;
    i = temp;
  }
}

fib();
