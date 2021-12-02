var name = document.getElementById("name");
var body = document.body;

function navTiles() {
  var x = HTMLElement.offsetWidth(document.getElementById("tile1"));
  document.getElementById("tile1").style.width = x + "10px";
}

function aboutUs() {
  var name = document.getElementById("name");
  var body = document.body;
  body.innerHTML="About Us";
  name.style.fontSize="50px";
  body.style.backgroundColor="blue";
}

setTimeout(function(){ reload(); }, 3000);

function helloWorld() {
  let name = document.getElementById("name");
  let body = document.body;
  var firstName = prompt("What is your name?");

  if(firstName.includes("Anish")) {
    body.innerHTML=("Sup" + " " + firstName);
  } else if (firstName.includes("anish")) {
    body.innerHTML=("You are also awesome" + " " + firstName);
  } else
  body.innerHTML=("You are awesome" + " " + firstName);
}