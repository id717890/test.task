const test = '[{"a":1,"b":null,"price": null},{"a":1,"b":null,"price": null}]'
const testJson = [{ a: null, b: undefined }]

console.log("test json", JSON.stringify(testJson))
function printOrderTotal(responseString) {
  let total = 0
  var responseJSON = JSON.parse(responseString)
  console.log(responseJSON)
  responseJSON.forEach(function (item, index) {
    if (!item.price) {
      item.price = 0
    }
    total += item.price
  })
  console.log("result", responseJSON)
  console.log(`Стоимость заказа: ${total > 0 ? total + " руб." : "Бесплатно"}`)
}

printOrderTotal(test)

// let list = []

// for (var i = 0; i < 100000; i++) list[i] = i

// // let nextListItem = function () {
// //   let item = list.pop()
// //   if (item) {
// //     // ... обработка записи
// //     console.log(item)
// //     nextListItem()
// //   }
// // }

// let l = list.length

// while (l >= 1) {
//   let item = list.pop()
//   console.log(item)
//   l = list.length
// }

// console.log("finish")
// // nextListItem()
