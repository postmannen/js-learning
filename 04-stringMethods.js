var string1 = "some text";
console.log(string1.toUpperCase());

//get the index of where the word appears, and print the
//number characters wanted appearing after it
var string2 = "this is some more text that was entered into the variable";
var idx = string2.indexOf("more");
var v = string2.substr(idx, 10);
console.log("The part got with .indexOf, and .substr = " + v);

//get the end index of where the word appears, and print the
//number characters wanted appearing after it
//since this is a word it appears both test2 and 3 are the same
var string3 = "this is some more text that was entered into the variable";
var idx3 = string2.lastIndexOf("more");
var v3 = string2.substr(idx3, 10);
console.log("The part got with .indexOf, and .substr = " + v3);

//find the lengt of a string
console.log("The length of string2 = " + string2.length);