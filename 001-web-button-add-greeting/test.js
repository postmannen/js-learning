var myDiv = document.getElementById("id1");
myDiv.innerHTML = "some text";

var btn = document.createElement("button");
var tn = document.createTextNode("This is my button");
btn.appendChild(tn);
myDiv.appendChild(btn);

btn.addEventListener("click", addAnotherButton);

function addAnotherButton() {
    var btn2 = document.createElement("button");
    var button2Text = ["Hello", "Good morning", "Good night"];
    var i = Math.floor(Math.random() * 3);
    var tn2 = document.createTextNode(button2Text[i]);
    btn2.appendChild(tn2);
    myDiv.appendChild(btn2);
}
