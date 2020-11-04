/*console.log("Hi")
function fibonacci(numero) {
    let sequenza = [0,1];
    for (let i = 2; i <= numero; i++) {
      sequenza.push(sequenza[i-1] + sequenza[i-2]);
    }
    return sequenza;
  }
console.log(fibonacci(5))

function recursive_fibonacci_at_index(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return (
    recursive_fibonacci_at_index(num - 1) +
    recursive_fibonacci_at_index(num - 2)
  );
}

console.log(recursive_fibonacci_at_index(3));
let day = new Date();
let daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = document.getElementById('currentDay');
currentDay.innerHTML = daysWeek[day.getDay()];

let times = document.getElementById('currentTime');
//time.innerHTML = getHours().getMinutes.getSeconds();
var format = day.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute:'numeric', second:'numeric' });
times.innerHTML = 'Time is '+ format;*/ 


var countDownDate = new Date("Dec 03, 2020 ").getTime();
//Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("birthday").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TODAY";
  }
}, 1000);
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
