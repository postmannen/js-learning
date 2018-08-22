var someFunc = function (a, b, c) {
    console.log("arguments length : " + arguments.length);

    for (var index = 0; index < arguments.length; index++) {
        console.log("Arguments value at index " + index + " = " + arguments[index]);
    }
    console.log("-----------------------------------------------------------");
    console.log("arguments callee : \n" + arguments.callee);
};

someFunc(100, 200, 300);