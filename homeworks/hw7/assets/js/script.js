function averageThreeNumbers (a, b, c) {
    let sum = a + b + c;
    let average = sum/3;
    return average;
}

function createSentence (num, noun) {
    let sent = "On average, a Berkeley student has " + num + " " + noun + "s.";
    return sent;
}

function getRandomNum (max) {
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
var avg = averageThreeNumbers (x, y, z);
var sentence = createSentence(avg, "quokka");
console.log(sentence);