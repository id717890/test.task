console.log(test("file.asd.asd.exe"))

function test(file) {
  const findIndex = file.lastIndexOf(".")
  return file.substring(findIndex + 1, file.length)
}
