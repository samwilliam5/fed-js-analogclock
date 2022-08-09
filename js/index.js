const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('#minute-hand');
const secondHand = document.querySelector('#second-hand');

console.log(hourHand);
console.log(minuteHand);
console.log(secondHand);

setInterval(updateTime, 1000)

function updateTime(params) {
	let currentTime = new Date();
	let sec = currentTime.getSeconds() / 60;
	let min = (currentTime.getMinutes() + sec) / 60;
	let hour = (currentTime.getHours() + min) / 12;

	secondHand.style.transform = "rotate(" + (sec * 360) + "deg)";
	minuteHand.style.transform = "rotate(" + (min * 360) + "deg)";
	hourHand.style.transform = "rotate(" + (hour * 360) + "deg)";
}



















