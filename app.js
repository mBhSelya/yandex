let arr = [],
  // m = document.getElementById('mValue').value,
  // n = document.getElementById('nValue').value,
  // x = document.getElementById('xValue').value,
  m,
  n,
  x = 1,
  arr2 = [],
  sosedi = 0

const creat = function (m, n) {
  m = document.getElementById('mValue').value
  n = document.getElementById('nValue').value
  for (i = 0; i < m * n; i++) {
    arr2.push(Math.floor(Math.random() * 2))
  }
  return arr2
}


const func = function (arr2, sosedi, arr, m, n) {
  n = document.getElementById('nValue').value
  m = document.getElementById('mValue').value
  console.log('------------------------------')
  document.getElementById('inBorder').innerHTML = ""
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
      for (let i in arr) {
        document.getElementById("inBorder").innerHTML += '<span>' + '| ' + arr[i] + ' ' + '</span>'
      }
      document.getElementById("inBorder").innerHTML += '|' + '<br>'
      console.log(arr)
      arr = []
    }
  }
}


const timerFunc = function () {
  let timer = setInterval(() => func(arr2, sosedi, m, arr, n), 1000)
  setTimeout(() => { clearInterval(timer); console.log('------------------------------'); }, (x * 1000))

}