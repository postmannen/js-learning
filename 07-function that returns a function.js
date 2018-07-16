function printSome() {
    var a = 10;
    return function () {
        console.log(a++);
    };
}

//first we assign a1 to the funcion printSome.
var a1 = printSome();
//When we now run the function a1 becomes the new function that is returned
//from the printSome() function.
//a1 is now the new function that is returned with access to the variables
//living locally within that function from when it was first initalized.
a1();
a1();
a1();