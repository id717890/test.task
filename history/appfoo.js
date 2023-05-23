class Foo {
  constructor() {
    // console.log("foo ctr1")
    this.id = "foo"
    this.print()
  }

  print() {
    console.log("foo " + this.id, this)
  }
}

class Bar extends Foo {
  constructor() {
    // console.log("bar ctr1")
    super()
    // console.log("bar ctr2")
    this.id = "bar"
    this.print()
    super.print()
  }
  print() {
    console.log("bar " + this.id, this)
  }
}

new Bar()
