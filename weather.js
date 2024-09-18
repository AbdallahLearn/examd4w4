const url = 'https://api.openweathermap.org/data/2.5/weather?q=riyadh&appid=34f622eb0b0de9763e8755b94c79c49a'


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
    console.log(data.coord.lon)
    let a = data.coord.lon
    let b = data.coord.lat
    let c = data.main.temp
    let d = data.main.humidity
    let r = data.main.temp


    one.textContent = a
    two.textContent = b
    thr.textContent = c
    four.textContent = d
    


    
  });