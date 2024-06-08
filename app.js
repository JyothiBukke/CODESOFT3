window.onload = function(){
    var input = document.getElementById("inputbox");
    var container = document.getElementById("container");
    container.addEventListener("click", function(e) {
        buttonClick(e.target.id);
    });
    var calc = document.getElementById("button=");
    calc.addEventListener("click",calculate);
    var c = document.getElementById("buttonC")
    c.addEventListener("click", erase);
    function buttonClick(buttonId) {
        if((buttonId != "buttonC") && (buttonId != "button=")) {
            var button = document.getElementById(buttonId);
            var s = buttonId;
            s= s.replace("button", "");
            entries (s);
        }
    }
    function entries (s) {
        input.value += s;
    }
    function calculate() {
        if(input.value == ".") {
            alert("Please Enter a Mathematical Expression");
        }
        input.value = eval(input.value);
    }
    function erase() {
        input.value = "";
    }
};