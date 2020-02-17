document.addEventListener('DOMContentLoaded', function(){

var balls = document.querySelectorAll(".eyeball");
var hand = document.querySelector(".hand-left");

document.onmousemove = function () {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    balls.forEach(function (ball) {
        ball.style.left = x;
        ball.style.top = y;
        ball.style.transform = "translate(-"+x+",-"+y+")";
    });

}

});

