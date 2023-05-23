const testObj = {
  title: "topNode",
  children: [
    {
      title: "node1",
      children: [
        {
          title: "randomNode_1",
        },
        {
          title: "node2",
          children: [
            {
              title: "randomNode_2",
              children: [
                {
                  title: "node2",
                  children: [
                    {
                      title: "randomNode_3",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

function searchTree(element, matchingTitle) {
  if (element.title == matchingTitle) {
    return element
  } else if (element.children != null) {
    var i
    var result = null
    for (i = 0; result == null && i < element.children.length; i++) {
      result = searchTree(element.children[i], matchingTitle)
    }
    return result
  }
  return null
}

function searchTreeWhile(currentObj, title) {
  var stack = [],
    node,
    ii
  stack.push(currentObj)

  while (stack.length > 0) {
    node = stack.pop()
    if (node.title == title) {
      // Found it!
      return node
    } else if (node.children && node.children.length) {
      for (ii = 0; ii < node.children.length; ii += 1) {
        stack.push(node.children[ii])
      }
    }
  }
  // Didn't find it. Return null.
  return null
}

const startFor = performance.now()
var result = searchTree(testObj, "randomNode_3")
console.log(result)
const endFor = performance.now()
console.log(`Speed [for]: ${endFor - startFor} miliseconds`)

const startWhile = performance.now()
var result = searchTreeWhile(testObj, "randomNode_3")
console.log(result)
const endWhile = performance.now()
console.log(`Speed [while]: ${endWhile - startWhile} miliseconds`)
