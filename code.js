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