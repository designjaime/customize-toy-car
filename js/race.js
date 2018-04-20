//Get all label
var wrap = document.querySelector(".wrap");
var car = document.querySelector(".car");
var gamestart = document.querySelector(".gameStart")
var gameOver = document.querySelector(".gameOver")
var startbtn = document.querySelector(".stratbtn")
var overbtn = document.querySelector(".overbtn")
var sc = document.querySelector(".sc")
var his = document.querySelector(".his")
var fs = document.querySelector(".fs")
    //race car form
car.innerHTML = "<img src='img/blue.png' width='150' height='220'>"
	//Car start point
var saicheArr = ['0px',
    '150px',
    '300px'
];
var speedTemp = 1; /*car moving distance*/
var score = 0; /*score*/
var timeraaaa = 2300; /*create car time*/
var Timer1 = null; /*car moving timer*/
var flag = true; /*keyboard switch flag*/

//random get car's position
function rand() {
    return Math.floor(Math.random() * 3);
}

//random create other cars
function createCar() {
    //  console.log(timer);
    var cars = document.createElement('div');
    cars.className = 'cars';
    cars.innerHTML = "<img src='img/red.png' width='150' height='220'>"
	

    cars.style.left = saicheArr[rand()];
    cars.style.top = '-200px';
    wrap.appendChild(cars);
    //car moving
    cars.speed = -200;
    cars.Timer = setInterval(function() {
        cars.speed += speedTemp;
        cars.style.top = cars.speed + 'px';
        if(cars.offsetTop > 800) {
            clearInterval(cars.Timer);
            wrap.removeChild(cars);
            score += 1;
            fs.innerHTML = score;
        }

        //determ the game over
        if(car.offsetTop <= (cars.offsetTop + 200) && car.offsetLeft == cars.offsetLeft) {
            console.log('Hit')
            gameover();
        }
    }, 5)

}
//GAME START
startbtn.onclick = function() {
        createCar();
        Timer1 = setInterval("createCar()", timeraaaa);
        gamestart.style.display = 'none';
    }
//RESTART
overbtn.onclick = function() {
        history.go('0');
    }
//KEYBOARD INPUT EVENT
document.onkeydown = function() {
        var event = event || window.event;
        var left = car.offsetLeft
        switch(event.keyCode) {
            case 37:
                if(left == 0) {
                    car.style.left = '0px';
                } else {

                    car.style.left = left - 150 + 'px';
                }
                break;
            case 39:
                if(left == 300) {
                    car.style.left = '300px';
                } else {
                    car.style.left = left + 150 + 'px';
                }
                break;
            case 38:
                speedTemp = 3;
                if(flag) {
                    clearInterval(Timer1);
                    timeraaaa = 850;
                    Timer1 = setInterval("createCar()", timeraaaa);
                    flag = false;
                }
                console.log(timeraaaa);

                break;
        }
    }
//RELEASE KEYBOARD EVENT
document.onkeyup = function() {
        var ev = event || window.event;
        if(ev.keyCode == 38) {
            speedTemp = 1;
            clearInterval(Timer1);
            timeraaaa = 2300;
            Timer1 = setInterval("createCar()", timeraaaa);
            flag = true;
        }
    }
//Game OVER
function gameover() {
    sc.innerHTML += score;
    gameOver.style.display = 'block';
    clearTimer();
//HISTORY
    var historyScore = localStorage.getItem('his');
    if(historyScore == null || historyScore < score) {
        localStorage.setItem('his', score);
        historyScore = score;
    }
    his.innerHTML = historyScore;
}
//CLEAR TIMER
function clearTimer() {
    var timer = setInterval(function() {}, 30);
    for(var i = 0; i < timer; i++) {
        clearInterval(i);
    }
}