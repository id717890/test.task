const debounce = (fn, ms) => {
  let timeout
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments)
    }
    clearTimeout(timeout)
    timeout = setTimeout(fnCall, ms)
  }
}

function onChange(e) {
  console.log(e.target.value)
}

// onChange2 = debounce(onChange, 2000)
// onChange = throttle(onChange, 2000)

document.getElementById("search").addEventListener("keyup", onChange2)

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments) // (1)

    isThrottled = true

    setTimeout(() => {
      isThrottled = false // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper
}

//onChange = debounce(onChange, 500);

// onChange = debounce(onChange, 1000);

// const debounce = (fn, time) => {
//   let timeout;

//   return function() {
//     const functionCall = () => fn.apply(this, arguments);

//     clearTimeout(timeout);
//     timeout = setTimeout(functionCall, time);
//   }
// }

const myAwesomeArray = [1, 2, 3, 4, 5]

const startForEach = performance.now()
myAwesomeArray.forEach((x) => (x + x) * 10000000000)
const endForEach = performance.now()
console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)

const startMap = performance.now()
myAwesomeArray.map((x) => (x + x) * 10000000000)
const endMap = performance.now()
console.log(`Speed [map]: ${endMap - startMap} miliseconds`)
