console.log("------------------------------------------");
console.log(this);

var person = {
    name: "Ola",
    sayName: function () {
        //to get access to the name propery within the same object,
        //we need to use the this keyword to reference that we want
        //to use a propery within the same object we're in.
        console.log("------------------------------------------");
        console.log("Name of person = ", this.name);
    }
};
person.sayName();

