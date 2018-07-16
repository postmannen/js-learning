var myArray = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "now", "dec"];

//Wrapping a function in parentes will make the function execute immediatly.
//This will make a closure around the code and the variables used in the function,
//so this will not affect if any variable names are the same in the main
//part of the code.
var mainloop = (function loopArray() {
    function iterateForward() {
        myArray.forEach(function (v) {
            console.log("content from forward loop = ", v);
        });
    }

    function iterateBackwards() {
        for (var index = myArray.length - 1; index >= 0; index--) {
            console.log("content from backward loop = ", myArray[index]);

        }
    }

    //Since this is a closed function with parenteces surrounding the main function
    //we have to return the functions we want to show as methods for the main function.
    //Here we do that as an object.
    return {
        IterateForward: iterateForward,
        IterateBackwards: iterateBackwards,
    };
})();

mainloop.IterateForward();
mainloop.IterateBackwards();
