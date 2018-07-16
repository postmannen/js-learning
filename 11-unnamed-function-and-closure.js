var myArray = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "now", "dec"];

var someVar = "some value";

//Wrapping a function in parentes will make the function execute immediatly.
//This will make a closure around the code and the variables used in the function,
//so this will not affect if any variable names are the same in the main
//part of the code.
(function loopArray() {
    var someVar = "another value";

    myArray.forEach(function (v) {
        console.log("content from foreach loop = ", v);
    });
})();

//the value of someVar is not changed, since all variables within the closure
//are local within the function.
console.log("The value of the variable someVar = ", someVar);