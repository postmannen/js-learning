var myFunc1 = function () {
    console.log("logging from myFunc1");
};
myFunc1();

//declaring a function as a variable
var myFunc2 = function (v1) {
    console.log("The variable passed to function = " + v1);
};
var myVar1 = "This is some text";
myFunc2(myVar1);

//declaring a function without the use of var
function myFunc3(v3) {
    console.log(v3);
}
myFunc3("this is test 3");


function myFunc4(num1, num2) {
    return num1 + num2;
}
var answer = myFunc4(100, 200);
console.log("The answer in test 4 = ", answer);

var var5 = {
    key1: "some name",
    key2: "some other name",
};
function myFunc5(v) {
    v.some = "some value";
    v.someMore = "some more value";

}
myFunc5(var5);
console.log("object after running myFunc5 : " + var5);