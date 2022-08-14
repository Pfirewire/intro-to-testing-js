// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name) {
    if (typeof name !== "string" || name.length === 0){
        return "Hello, World.";
    } else {
        return `Hello, ${name}.`;
    }
}

function isFive(number) {
    if (typeof number !== "number" || number !== 5) {
        return false;
    } else if (number === 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(number) {
    if(number % 2 === 0 && typeof number !== "boolean") {
        return true;
    } else {
        return false;
    }
}

function isVowel(char) {
    if (typeof char !== "string") {
        return false;
    } else if(char.toLowerCase() === "a" || char.toLowerCase() === "e" || char.toLowerCase() === "i" || char.toLowerCase() === "o" || char.toLowerCase() === "u"){
        return true;
    } else {
        return false;
    }
}

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}