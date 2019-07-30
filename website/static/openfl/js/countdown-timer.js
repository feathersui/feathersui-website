const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let intervalID = null;
let targetDate = new Date("Jul 25, 2019 18:00:00 GMT-7").getTime();
function updateTimer() {

	let now = new Date().getTime();
	let distance = targetDate - now;

	if(distance <= 0) {
		clearInterval(intervalID);
		targetDate = null;
	}
	else {
		document.getElementById("kickstarter").style.display = "block";
		document.getElementById("countdown-days").innerText = Math.floor(distance / (day));
		document.getElementById("countdown-hours").innerText = Math.floor((distance % (day)) / (hour));
		document.getElementById("countdown-minutes").innerText = Math.floor((distance % (hour)) / (minute));
		document.getElementById("countdown-seconds").innerText = Math.floor((distance % (minute)) / second);
	}
}
updateTimer();
if(targetDate)
{
	intervalID = setInterval(updateTimer, second);
}