// [1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]

function arrayFlat(arr) {
  // let result = []
  // console.log(arr.length)
  // for (let i = 0; i < arr.length; i++) {
  //   console.log("iter", i)
  //   // console.log(arr[i])
  //   if (Array.isArray(arr[i])) {
  //     // let res2 = arrayFlat(arr[i])
  //     // result.push(res2)
  //     // result = result.concat(arrayFlat(arr[i]))
  //   } else {
  //     result.push(arr[i])
  //   }
  // }
  // return result
  return arr.reduce((current, item) => {
    return current.concat(Array.isArray(item) ? arrayFlat(item) : item)
  }, [])
}

function arrayFlat2(arr) {
  var result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(arrayFlat2(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// console.log(arrayFlat([1, [1, 2, [3, 4]], [2, 4]]))
console.log(arrayFlat2([1, [1, 2, [3, 4]], [2, 4]]))
