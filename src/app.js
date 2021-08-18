/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/pica.jpg";
import "./assets/img/corazon.jpg";
import "./assets/img/trebol.jpg";
import "./assets/img/diamante.jpg";
let aleatoria = function() {
  //numeros aleatorios
  let num = Math.floor(Math.random() * 13 + 1);
  let td = document.querySelector(".tdnum");
  if (num == 1) {
    td.innerHTML = "<h1>A</h1>";
  } else if (num == 11) {
    td.innerHTML = "<h1>J</h1>";
  } else if (num == 12) {
    td.innerHTML = "<h1>Q</h1>";
  } else if (num == 13) {
    td.innerHTML = "<h1>K</h1>";
  } else {
    td.innerHTML = "<h1>" + num + "</h1>";
  }
  //img aleatorias
  let num2 = Math.floor(Math.random() * 4 + 1);
  let tdimg = document.querySelectorAll(".tdpinta");
  if (num2 == 1) {
    tdimg[0].innerHTML = "<img src='./pica.jpg' />";
    tdimg[1].innerHTML = "<img src='./pica.jpg' />";
  }
  if (num2 == 2) {
    tdimg[0].innerHTML = "<img src='./corazon.jpg' />";
    tdimg[1].innerHTML = "<img src='./corazon.jpg' />";
  }
  if (num2 == 3) {
    tdimg[0].innerHTML = "<img src='./trebol.jpg' />";
    tdimg[1].innerHTML = "<img src='./trebol.jpg' />";
  }
  if (num2 == 4) {
    tdimg[0].innerHTML = "<img src='./diamante.jpg' />";
    tdimg[1].innerHTML = "<img src='./diamante.jpg' />";
  }
};
window.onload = function() {
  aleatoria();
};
let button = document.querySelector("#generate");
button.addEventListener("click", function() {
  aleatoria();
});
setTimeout(aleatoria, 10000);
