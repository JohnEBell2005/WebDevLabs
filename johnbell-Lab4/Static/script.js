/*
var x = 5;
var y = 7;
var z = x + y;
console.log(z)

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C)

function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
    return x3;
}
SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
    array.forEach(function(item) {
        if (item === "Banana") {
            alert("Found Banana!");
        }
    });
}
findTheBanana(L1);
findTheBanana(L2); */

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    var greetingMessage = "";

    if (h < 12) {
        greetingMessage = "Good morning";
    } else if (h >= 12 && h < 18) {
        greetingMessage = "Good afternoon";
    } else if (h >= 18 && h < 20) {
        greetingMessage = "Good evening";
    }  else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        greetingMessage = "Good night";
    }
    E.innerHTML = `${greetingMessage}, I am John`;
}
if (window.location.href.includes("index.html")) {
    greetingFunc();
}

function addYear() {
    var currentYear = new Date().getFullYear();
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.innerText = currentYear;
    }
}
addYear();

function showList() {
    var funList = document.getElementById("funList");
    var button = document.querySelector("button");
    funList.style.display = "block";
    button.style.display = "none";
}

$(document).ready(function () {
    $("#readMore").click(function () {
        $("#shortBio").hide();
        $("#fullBio").show();
        $("#readMore").hide();
        $("#readLess").show();
    });

    $("#readLess").click(function () {
        $("#fullBio").hide();
        $("#shortBio").show();
        $("#readMore").show();
        $("#readLess").hide();
    });
});

