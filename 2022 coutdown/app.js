var time = new Date('jan 1, 2022 00:00:00'). getTime();

function coutDown(){
    var timePresent = new Date().getTime();
    var difent = time - timePresent;

    var sec = 1000; 
    var min = sec * 60;
    var hour = min * 60;
    var day = hour * 24;

    var d = Math.floor(difent/day);
    var h = Math.floor((difent%day)/hour);
    var m = Math.floor((difent%hour)/min);
    var s  = Math.floor((difent%min)/sec);

    document.querySelector('.day').innerHTML = d;
    document.querySelector('.hour').innerHTML = h;
    document.querySelector('.minutes').innerHTML = m;
    document.querySelector('.second').innerHTML = s;
}

setInterval(() =>{
    coutDown();
}, 1000)