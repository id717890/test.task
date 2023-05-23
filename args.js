function test(a, b, c) {
  ;[...arguments].forEach((x) => console.log(x))
}

test(1, 2, 3)
