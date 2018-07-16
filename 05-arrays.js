//push more elements into the array
var myArray1 = ["one", "two", "three", "four", "five"];
myArray1.push("six", "seven");
console.log("test1 : ", myArray1);

//join all the elements in the array into a string
var myString1 = myArray1.join();
console.log("The result of joining all the elements of the array : ", myString1);

//get out only parts of the array
var myArray2 = myArray1.slice(1, 3);
console.log("slicing from 1 to 3 on myArray1 = ", myArray2);

//testing splice to change the content of the array
myArray1.splice(1, 3, "to", "tre");
console.log("The array after doing a splice = ", myArray1);

//<array>.forEach returns 3 arguments,The value, index, and the array v,i,a,
//and wants a function as input parameter between ().
//
//First with all the variables that foreach gives to the function.
myArray1.forEach(function (v, i, a) {
    console.log("first test with three arguments, v = " + v + ", i = " + i + ", a = " + a);
});
//
//Second with just the value of the array element.
myArray1.forEach(function (v) {
    console.log("second test with single argument, v = " + v);
});
//
//Third, with two arguments to the function
myArray1.forEach(function (v, i) {
    console.log("second test with single argument, v = " + v + ", and index = " + i);
});