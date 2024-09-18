const url = 'https://api.aladhan.com/v1/timingsByAddress/09-03-2024?address=Dubai,UAE&method=8'

let one = document.getElementById('1')
let two = document.getElementById('2')
let thr = document.getElementById('3')
let four = document.getElementById('4')
let five = document.getElementById('5')
let six = document.getElementById('6')
let seven = document.getElementById('7')





fetch(url)
  .then((response) => response.json())
  .then((data) =>{
    console.log(data.data.date.gregorian.date)

    let fajr = data.data.timings.Fajr
    let dhr = data.data.timings.Dhuhr
    let asr = data.data.timings.Asr
    let mgr = data.data.timings.Maghrib
    let ash = data.data.timings.Isha
    let meldy = data.data.date.gregorian.date
    let hjr = data.data.date.hijri.date



    one.textContent = fajr
    two.textContent =dhr
    thr.textContent = asr
    four.textContent = mgr
    five.textContent = ash
    six.textContent = meldy
    seven.textContent = hjr
  });