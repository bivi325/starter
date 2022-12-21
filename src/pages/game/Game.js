// import React from "react";

function toSquare(x) {
    return x * x;
}

let x = 4;
let y = toSquare(x);

function printHello(msg) {
    console.log(`Привіт ${msg}`);
}

function printHello2(msg) {
    const resultMsg = `Привіт ${msg}`;
    console.log(resultMsg);
}

function printHello3(msg) {
    const resultMsg = "Привіт" + " " + msg;
    console.log(resultMsg);
}


printHello("Денис");
printHello2("Денис");
printHello3("Марічка");