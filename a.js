function a() {
  var b = 0;
  return function () {
    b = b + 1;
    console.log(b);
  }()
}
a();
a();