//Create a self executing function,
//surround a function by (...), and end it with () to exexute it.
(function () {
    var btn = document.createElement("button");
    var btnT = document.createTextNode("a button");
    btn.appendChild(btnT);

    var div1 = document.getElementById("div1");
    div1.appendChild(btn);
})();