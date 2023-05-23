const Z = {
  a: 5,
  b: { g: 8, y: 9, t: { q: 48 } },
  x: 47,
  l: { f: 85, p: { u: 89, m: 7 }, s: 71 },
  r: { h: 9, a: "test", s: "test2" },
}
console.log("Z object before cloning: ", Z)

const Y = deepClone(Z)
function deepClone(obj) {
  const clObj = {}
  for (const i in obj) {
    if (obj[i] instanceof Object) {
      clObj[i] = deepClone(obj[i])
      continue
    }
    clObj[i] = obj[i]
  }
  return clObj
}
Y.addnlProp = { fd: 45 }
console.log("Z object after cloning: ", Z)
console.log("Y object: ", Y)
