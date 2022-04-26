
var input = document.getElementById("input");
var button = document.getElementById("button");
var display = document.getElementById("display");
// var newInfo = document.createTextNode(input.value);

button.addEventListener("click", function () {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    var newInfo = document.createTextNode(input.value);
    li.appendChild(newInfo);
    display.appendChild(li);
    li.innerHTML += '<button onclick="this.parentNode.remove();"> Done</button >'
    input.value = "";
  }
});

input.addEventListener("keypress", function(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement("li")
    var newInfo = document.createTextNode(input.value);
    li.appendChild(newInfo)
    display.appendChild(li);
    li.innerHTML += '<button onclick="this.parentNode.remove();"> Done</button >'
    input.value = "";
  };
});