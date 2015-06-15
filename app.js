var timerActive = false;
var timerStart;
var start = document.getElementById("start");
var time = document.getElementById("time");
var clear = document.getElementById("clear");

start.addEventListener("click", function(e){
	e.preventDefault();
	doToggleTimer();
});
start.addEventListener("touchstart", function(e){
	e.preventDefault();
	doToggleTimer();
});
clear.addEventListener("click", function(e){
	e.preventDefault();
	clearTimer();
});

window.setInterval(function(){
	procTimer();
}, 10);

function doToggleTimer() {
	
	if ( timerActive === false ) {
		timerActive = true;
		start.className = "stop";
		start.innerHTML = "Stop timer";
		timerStart = new Date().getTime();
	} else {
		start.className = "start";
		start.innerHTML = "Start timer";
		timerActive = false;
		procTimer();
	}
	
}

function procTimer() {
	
	if ( timerActive === true ) {
		var currentTime = new Date().getTime();
		var newTime = currentTime - timerStart;
		time.innerHTML = msToTime(newTime);
	}
	
}

function clearTimer() {
	if ( timerActive === false ) {
		timerStart = null;
		time.innerHTML = "00:00:00.00";
	}
}

function msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/10)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
		milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}