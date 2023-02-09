// SELECTEUR
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

// CLICK EVENT
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//--------------------------------------------------------------------
// MOUSE EVENTS
const mousemoove = document.querySelector(".mousemoove");

window.addEventListener("mousemove", (e) => {
  mousemoove.style.left = e.pageX + "px";
  mousemoove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemoove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemoove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemoove.style.border = "2px solid blue";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//-----------------------------------------------------
// KEYPRESS EVENT

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "k") {
    keypressContainer.style.background = "purple";
  } else {
    keypressContainer.style.background = "yellow";
  }
  if (e.key === "z") ring(e.key);
});

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

//----------------------------------------------------
//SCROLL EVENT

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------------------------------------------
// FORM EVENT
const inputeName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputeName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préférer : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-------------------------------------------------------------------
//LOAD EVENT
window.addEventListener("load", () => {
  console.log("doc chargé!");
});

//-------------------------------------------------------------------
//FOR EACH
// const boxes = document.getElementsByClassName("box");
// boxes = document.querySelectorAll(".box");
// console.log(boxes);

// boxes.forEach((box) => {
//   box.addEventListener("click", (e) => {
//     e.target.style.transform = "scale(0.7)";
//   });
// });

//----------------------------------------------------------------------
// addEvenListener Vs onClick

// document.body.onclick = function () {
//   console.log("Click");
// };

//BUBLING => fin (de base l'enventlistener est paramétré en mode Bubling)
document.body.addEventListener("click", () => {
  console.log("click 1 !");
});

//USECAPTURE
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//------------------------------------------------------------------
//STOP PROPAGATION
// questionContainer.addEventListener("click", (e) => {
//   alert("test");
//   e.stopPropagation();
// });

//REMOVE EVENT LISTENER

//------------------------------------------------------------------
//BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.com", "zebi", "height=600, width=800");
// window.close()

//Evenements adossé a window
// alert("hello");

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vrmt vous tromper?");
});

//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");

  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

//Compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class='box'>
//  <h2>Nouvelle boite !</h2>
//  </div>`;
// }, 1000);

// document.body.addEventListener("click", (e) => {
//   clearInterval(interval);
// });

// location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace('')

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// Navigator
// console.log(navigator.userAgent);

// History
// console.log(history);
// window.history.back();
// history.go(-2)

//----------------------------------------------------------------
// Set Property
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layery + "px");
  nav.style.setProperty("--x", e.layerX + "px");
});
