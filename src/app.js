/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let rand1 = Math.floor(Math.random() * who.length);
  let rand2 = Math.floor(Math.random() * action.length);
  let rand3 = Math.floor(Math.random() * what.length);
  let rand4 = Math.floor(Math.random() * when.length);

  //Aca insertar las excusas aleatorias
  this.document.querySelector("#excusa").innerHTML =
    who[rand1] + " " + action[rand2] + " " + what[rand3] + " " + when[rand4];

  //probando
  //this.document.querySelector("#cambiante").innerHTML = "<p>Holi ql</p>";
};
