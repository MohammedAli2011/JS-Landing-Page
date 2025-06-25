let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountain3");
let mountain4 = document.getElementById("mountain4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let memo = document.getElementById("memo");

window.onscroll = function () {
    let value = window.scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 5 + "px";
    mountain3.style.top = value * 2 + "px";
    mountain4.style.top = value + "px";
    river.style.top = value * 2 + "px";
    boat.style.top = value * 2 + "px";
    boat.style.left = value * 5 + "px";
    memo.style.fontSize = value + "px";
    if(value >= 87) {
        memo.style.fontSize = 87 + "px";
        memo.style.position = "fixed";
        if(value >= 561) {
            memo.style.display = "none";
        }else {
            memo.style.display = "block";
        };
    };
};