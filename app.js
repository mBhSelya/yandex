let m = 10,
  n = 10,
  arr = [],
  arr2 = [],
  sosedi = 0
for (i = 0; i < m * n; i++) {
  arr2.push(Math.round(Math.random() * 1))
}
//console.log(arr2)
console.log('------------------------------')
const func = function (arr2, sosedi, m, arr, n) {
  arr = []
  for (let i = 0; i <= m * n - 1; i++) {
    if (arr2[i - 1]) { sosedi++ }
    if (arr2[i - 1]) { sosedi++ }
    if (arr2[i - m - 1]) { sosedi++ }
    if (arr2[i - m + 1]) { sosedi++ }
    if (arr2[i - m]) { sosedi++ }
    if (arr2[i + m]) { sosedi++ }
    if (arr2[i + m - 1]) { sosedi++ }
    if (arr2[i + m + 1]) { sosedi++ }

    if (arr2[i] === 1) {
      if (sosedi === 2 || sosedi === 3) {
        arr2[i] = 1
      } else {
        arr2[i] = 0
      }
    } else {
      if (sosedi === 3) {
        arr2[i] = 1
      }
    }
    sosedi = 0
    arr.push(arr2[i])
    if (i !== 0 && (i + 1) % m == 0) {
      console.log(arr)
      arr = []
    }
  }
  console.log('------------------------------')
}

let timer = setInterval(() => func(arr2, sosedi, m, arr, n), 1000)
setTimeout(() => { clearInterval(timer); console.log('stop'); }, 2000)