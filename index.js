let a = 1
function runPromise() {
  const p = new Promise((resolve, reject) => {
    a++
  })
  return p
}
console.log(1) // 1