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