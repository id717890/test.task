console.log(add(2, 5))
console.log(add(2)(5))

function add(a, b) {
  if (!b) {
    return (b) => {
      console.log(1)
      return a + b
    }
  }
  console.log(2)
  return a + b
}
