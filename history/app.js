const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: function () {
    return 2 * this.radius
  },
}

console.log(shape.diameter())
console.log(shape.perimeter())
