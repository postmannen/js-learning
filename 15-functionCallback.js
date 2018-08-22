var firstFunction = function () {
    console.log("calling first function");
};

var secondFunction = function (someFunction) {
    console.log("calling second function");
    //Putting () after the function name will execute the function.
    return someFunction();
};

//Omitting () after firstFunction will pass the first function as a value,
//and the function will not be executed untill it's called upon later in
//the code
//If we had written firstFunction(), then firstFunction would have been
//called and excuted before we had entered the secondFunction.
secondFunction(firstFunction);