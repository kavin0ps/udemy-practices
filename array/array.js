var name = prompt("Enter your name").toLowerCase();

var array = ["kavi", "shugash", "shyam", "mugu"];

function checkname(name) {
    if (array.includes(name)) {
        return "Welcome";
    } else {
        return "Not welcomed";
    }
}

alert(checkname(name));
