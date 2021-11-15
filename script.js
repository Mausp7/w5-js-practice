window.addEventListener('load', function () {
    console.log("Az oldal betöltődött.");
});

var myFirstString = 'Ez "egy" string.';
var mySecondString = "Ez 'is' egy string.";
var myThirdString = `Ez 'meg' a 
többsoros "string".`;

var myFirstNumber = 0;
var mySecondNumber = 35;
var myThirdNumber = 6478999;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = ["1984", "Lord of the rings", "Mester és Margarita", "Vita Brevis", "Galaktikus utikalauz stopposoknak"];
var mySecondArray = [1984, "Lord of the rings", "Mester és Margarita", "Vita Brevis", "Galaktikus utikalauz stopposoknak"];

var myFirstObject = {
    title : "Lord of the rings", 
    publicationDate : 1954, 
    translations: ["hu", "de", "fr", "jp"],
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

function add (firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
};

add(1,2);
add(17948, 18773);

var subtraction = function (a, b) {
    if (a > b) {
        console.log(a - b);    
    } else if (a === b) {
        console.log("A végeredmény nulla lesz");    
    } else {
        console.log(b - a);    
    };
};

subtraction(3, 6);
subtraction("15", 15);
add("15", 15);
add("nyitva", "tartás");
subtraction("nyitva","tartás");

function ifElseCheck (text) {
    if (text === "hello") {
        console.log("text az volt, hogy hello");
    } else if (text === "hello") {
        console.log("text megint az volt, hogy hello");
    };

    if (text === "hello") {
        console.log("text már megint az volt, hogy hello");
    };
};

ifElseCheck("hello");

function compare (a, b) {
    console.log("== ", a==b);
    console.log("=== ", a===b);
    var c = a + b;
    console.log(typeof c );
    console.log(c );
};

compare(1984, "1984");
compare("15", "15");

var myFirstFunctionVariable = function() {
    console.log("Ez egy függvány változóban tárolva.");
}
myFirstFunctionVariable();

(function () {
    console.log("?");
}()); //immediately invoced function expression

var anotherVar = myFirstFunctionVariable();
console.log(typeof anotherVar);
console.log(anotherVar);

var anotherVar2 = myFirstFunctionVariable;
anotherVar2();
console.log(typeof anotherVar2);

function theLastFunction (obj1, obj2) {
    console.log("obj1 értéke: ", obj1);
    console.log("obj1 típusa: ", typeof obj1);

    console.log("obj2 értéke: ", obj2);
    console.log("obj1 típusa: ", typeof obj2);

    console.log(obj2());
}

theLastFunction("hello", function () {
    return "I'm calling the last function!";
});

/*
var window = {
    addEventListener : function (eventName, eventFunction) {
        ...itt történik a varázslat
    }
}
*/

