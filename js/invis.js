//get which to show
let general = document.getElementById("general");
let ifElse = document.getElementById("ifElse");
let switchStatement = document.getElementById("switch");
let ternary = document.getElementById("ternary");

function generalShow() {
    general.style.display = "flex";
    switchStatement.style.display = "none";
    ternary.style.display = "none";
    ifElse.style.display = "none";
}

function getIfElse() {
    ifElse.style.display = "flex";
    switchStatement.style.display = "none";
    ternary.style.display = "none";
    general.style.display = "none";
}

function getSwitch() {
    switchStatement.style.display = "flex";
    ifElse.style.display = "none";
    ternary.style.display = "none";
    general.style.display = "none";
}

function getTernary() {
    ternary.style.display = "flex";
    switchStatement.style.display = "none";
    ifElse.style.display = "none";
    general.style.display = "none";
}