//Define a constructor, and first letter of name
//should start with a capital letter.
//No need to use return statement when using "this", since this directly
//changes the objects values.
//
var planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.func = function () {
        console.log("Printing from the method in the object : ", this);
    };
};

//new tells javascript that we want to assign an empty object to the variable
var myPlanet = new planet("mars", "somewhere", "big");
myPlanet.func();
console.log("Printing from outside of the method : ", myPlanet);