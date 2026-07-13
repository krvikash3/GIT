function add(a, b) {
  return a + b;
}

function sub(a, b) {
  if (!(a > b)) throw new Error("A must be greater than B");
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
add(2, 5);
add(5, 8);
sub(2, 9);
multiply(10, 20);
multiply(40, 30);
multiply(20.2);
