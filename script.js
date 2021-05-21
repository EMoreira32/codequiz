// from https://stackoverflow.com/a/18121901

var secondsLabel = document.getElementById('seconds'),
minutesLabel = document.getElementById('minutes'),
//hoursLabel = document.getElementById('hours'),
totalSeconds = 240,
startButton = document.getElementById('start'),
stopButton = document.getElementById('stop'),
resetButton = document.getElementById('reset'),
timer = null;

function start() {
    if (!timer) {
        timer = setInterval(setTime, 1000);
    } else {
        // timer reaches 0
        document.querySelector('section.start').style.display = 'none';
        document.querySelector('section.q1').style.display = 'none';
        document.querySelector('section.q2').style.display = 'none';
        document.querySelector('section.q3').style.display = 'none';
        document.querySelector('section.q4').style.display = 'none';
        document.querySelector('section.end').style.display = 'block';
    }
}

function stop() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function reset() {
    if (timer) {
        totalSeconds = 240;
        stop();
    }
}

function setTime() {
    totalSeconds--;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    //hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600))
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

// custom

var score = 0;

// output result
function save() {
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.name').style.display = 'none';

    document.querySelector('.result').style.display = 'block';
    document.querySelector('.result > h1').textContent = "Hi " + document.querySelector('input[name="name"]').value + " you scored " + Math.floor((score/4)*100) + "%";
}

// check answer
function check(q) {
    console.log(q);
    switch(q) {
        case 'q1':
            if (document.querySelector('input[name="q1"]:checked').value == 'B') {
                document.querySelector('input[name="q1"]:checked+label').style.color = "green";
                setTimeout(function() {
                    document.querySelector('.q1').style.display = 'none';
                    document.querySelector('.q2').style.display = 'block';
                }, 1600);
                score++;
            } else {
                document.querySelector('input[name="q1"]:checked+label').style.color = "red";
                setTimeout(function() {
                    document.querySelector('.q1').style.display = 'none';
                    document.querySelector('.q2').style.display = 'block';
                }, 1600);
                totalSeconds -= 30;
            }
            break;
        case 'q2':
            if (document.querySelector('input[name="q2"]:checked').value == 'A') {
                document.querySelector('input[name="q2"]:checked+label').style.color = "green";
                setTimeout(function() {
                    document.querySelector('.q2').style.display = 'none';
                    document.querySelector('.q3').style.display = 'block';
                }, 1600);
                score++;
            } else {
                document.querySelector('input[name="q2"]:checked+label').style.color = "red";
                setTimeout(function() {
                    document.querySelector('.q2').style.display = 'none';
                    document.querySelector('.q3').style.display = 'block';
                }, 1600);
                totalSeconds -= 30;
            }
            break;
        case 'q3':
            if (document.querySelector('input[name="q3"]:checked').value == 'C') {
                document.querySelector('input[name="q3"]:checked+label').style.color = "green";
                setTimeout(function() {
                    document.querySelector('.q3').style.display = 'none';
                    document.querySelector('.q4').style.display = 'block';
                }, 1600);
                score++;
            } else {
                document.querySelector('input[name="q3"]:checked+label').style.color = "red";
                setTimeout(function() {
                    document.querySelector('.q3').style.display = 'none';
                    document.querySelector('.q4').style.display = 'block';
                }, 1600);
                totalSeconds -= 30;
            }
            break;
        case 'q4':
            if (document.querySelector('input[name="q4"]:checked').value == 'B') {
                document.querySelector('input[name="q4"]:checked+label').style.color = "green";
                setTimeout(function() {
                    document.querySelector('.q4').style.display = 'none';
                    document.querySelector('.end').style.display = 'block';
                }, 1600);
                score++;
            } else {
                document.querySelector('input[name="q4"]:checked+label').style.color = "red";
                setTimeout(function() {
                    document.querySelector('.q4').style.display = 'none';
                    document.querySelector('.end').style.display = 'block';
                }, 1600);
                stop();
            }
            break;
        default:
            //
            break;
    }
}
