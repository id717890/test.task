const el = document.querySelectorAll(".test > li")

// el.addEventListener("click", (e) => {
//   console.log(e)
// })

el.forEach((element) => {
  element.addEventListener("click", (event) => {
    const text = event.target.innerHTML
    const div = document.querySelector("#content")
    if (div) {
      div.innerHTML = text
    }
  })
})
