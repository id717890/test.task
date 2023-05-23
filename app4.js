function isThreePassed() {
  // const args = Array.prototype.slice.call(arguments)
  return args.indexOf(3) != -1
}
console.log(isThreePassed(1, 2)) //false
console.log(isThreePassed(9, 3, 4, 9)) //true
