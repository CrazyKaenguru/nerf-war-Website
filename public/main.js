const timer1 = document.getElementById('stopwatch');
const bluebutton = document.getElementById('captureteambluebutton');
const redbutton = document.getElementById('captureteamredbutton');
var hr1 = 0;
var min1 = 0;
var sec1 = 0;
var stoptime1 = true;

function startTimer1() {
  if (stoptime1 == true) {
        stoptime1 = false;
        timerCycle();
    }
}
function stopTimer1() {
  if (stoptime1 == false) {
    stoptime1 = true;
  }
}

function timerCycle() {
    if (stoptime1 == false) {
    sec1 = parseInt(sec1);
    min1 = parseInt(min1);
    hr1 = parseInt(hr1);

    sec1 = sec1 + 1;

    if (sec1 == 60) {
      min1 = min1 + 1;
      sec1 = 0;
    }
    if (min1 == 60) {
      hr1 = hr1 + 1;
      min1 = 0;
      sec1 = 0;
    }

    if (sec1 < 10 || sec1 == 0) {
      sec1 = '0' + sec1;
    }
    if (min1 < 10 || min1 == 0) {
      min1 = '0' + min1;
    }
    if (hr1 < 10 || hr1 == 0) {
      hr1 = '0' + hr1;
    }

    timer1.innerHTML = hr1 + ':' + min1 + ':' + sec1;
    document.getElementById("redtimeinput").value =timer1.innerHTML;
    document.getElementById("bluetime2input").value=timer2.innerHTML;
    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer1() {
    timer1.innerHTML = '00:00:00';
}






const timer2 = document.getElementById('stopwatch2');

var hr2 = 0;
var min2 = 0;
var sec2 = 0;
var stoptime2 = true;

function startTimer2() {
  if (stoptime2 == true) {
        stoptime2 = false;
        timerCycle2();
    }
}
function stopTimer2() {
  if (stoptime2 == false) {
    stoptime2 = true;
  }
}

function timerCycle2() {
    if (stoptime2 == false) {
    sec2 = parseInt(sec2);
    min2 = parseInt(min2);
    hr2 = parseInt(hr2);

    sec2 = sec2 + 1;

    if (sec2 == 60) {
      min2 = min2 + 1;
      sec2 = 0;
    }
    if (min2 == 60) {
      hr2 = hr2 + 1;
      min2 = 0;
      sec2 = 0;
    }

    if (sec2 < 10 || sec2 == 0) {
      sec2 = '0' + sec2;
    }
    if (min2 < 10 || min2 == 0) {
      min2 = '0' + min2;
    }
    if (hr2 < 10 || hr2 == 0) {
      hr2 = '0' + hr2;
    }
    document.getElementById("bluetimeinput").value =timer2.innerHTML;
    document.getElementById("redtime2input").value =timer1.innerHTML;
    timer2.innerHTML = hr2 + ':' + min2 + ':' + sec2;

    setTimeout("timerCycle2()", 1000);
  }
}

function resetTimer2() {
    timer2.innerHTML = '00:00:00';
}
function disableblueButton()
{
  bluebutton.interactable =false;
  redbutton.interactable = true;
}
function disableredButton()
{
  redbutton.interactable = false;
  bluebutton.interactable =true;
}

