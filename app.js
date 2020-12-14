let arr = [],
  x = 1,
  arr2 = [],
  arr3 = [],
  sosedi = 0

const creat = function () {
  document.getElementById('inBorder').innerHTML = ""
  m = Number(document.getElementById('mValue').value)
  n = Number(document.getElementById('nValue').value)
  for (i = 0; i < m * n; i++) {
    arr.push(Math.floor(Math.random() * 2))
    if (i !== 0 && (i + 1) % m == 0) {
      Array.prototype.push.apply(arr2, arr)
      for (let i in arr) {
        document.getElementById("inBorder").innerHTML += '<span>' + '| ' + arr[i] + ' ' + '</span>'
      }
      document.getElementById("inBorder").innerHTML += '|' + '<br>'
      arr = []
    }
  }
  arr = []
}


const func = function () {
  console.log('------------------------------')
  document.getElementById('inBorder').innerHTML = ""
  arr = []
  for (let i = 0; i <= m * n - 1; i++) {
    if (arr2[i - 1]) { ++sosedi }
    if (arr2[i - 1]) { ++sosedi }
    if (arr2[i - m - 1]) { ++sosedi }
    if (arr2[i - m + 1]) { ++sosedi }
    if (arr2[i - m]) { ++sosedi }
    if (arr2[i + m]) { ++sosedi }
    if (arr2[i + m - 1]) { ++sosedi }
    if (arr2[i + m + 1]) { ++sosedi }

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
  x = Number(document.getElementById('xValue').value)
  let timer = setInterval(() => func(arr2, sosedi, m, arr, n), 1000)
  setTimeout(() => { clearInterval(timer); console.log('------------------------------'); }, (x * 1000))
}

const disDisabled = function () {
  document.getElementById('startButt').removeAttribute('disabled')
}

function readFile(input) {
  let file = input.files[0]
  let reader = new FileReader()
  reader.readAsText(file)
  reader.onload = function () {
    console.log(reader.result)
    arr2 = reader.result.split('')
    arr2.map((x, i) => { arr2[i] = Number(x) })
    console.log(arr2)
    for (i = 0; i < arr2.length; i++) {
      if (i !== 0 && (i + 1) % m == 0) {
        Array.prototype.push.apply(arr, arr2)
        for (let i in arr) {
          document.getElementById("inBorder").innerHTML += '<span>' + '| ' + arr[i] + ' ' + '</span>'
        }
        document.getElementById("inBorder").innerHTML += '|' + '<br>'
        arr = []
      }
    }
    arr = []
    console.log(arr2.length)
  }

  reader.onerror = function () {
    console.log(reader.error)
  }
}