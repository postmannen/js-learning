//Wrap the function in parenteces makes it an expression.
//Following it with () executes it.
var car = (function vehicle() {
    console.log("you're thinking about buying a vehicle ?");

    function doors() {
        console.log("show the doors of the vehicle..........");
    }

    //Theese inne functions will not be exposed to the outside...
    //unless we return at the end as methods to the main function
    function windows() {
        console.log("show the windows of the vehicle.........");
    }

    //return the private functions, and exposed them as methods on
    //vehicle function.
    return {
        publicDoors: doors,
        publicWindows: windows,
    };

    //The parenteces () at the end of main function expression is needed 
    //to expose the inner functions 
}());

car.publicWindows();
car.publicDoors();
