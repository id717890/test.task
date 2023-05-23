// const _sum3 = (x, y, z) => x + y + z

// const _sum4 = (p, q, r, s, d) => p + q + r + s + d

// function curry(fn) {
//   const N = fn.length
//   function innerFn(n, args) {
//     return function actualInnerFn(a) {
//       if (n <= 1) {
//         return fn(...args, a)
//       }
//       return innerFn(n - 1, [...args, a])
//     }
//   }
//   return innerFn(N, [])
// }

// const sum3 = curry(_sum3)
// const sum4 = curry(_sum4)

// console.log(sum3(1)(3)(2)) // 6
// console.log(sum4(1)(3)(1)(3)(1)) // 10

const add = (a) => {
  let sum = a
  const func = (b) => {
    if (b) {
      sum += b
      return func
    } else {
      return sum
    }
  }
  func.valueOf = () => sum
  return func
}

console.log(add(2)(3)(3))
// 5;
