const randomvalue = document.getElementById("rgb_value");
const divArea = document.querySelectorAll(".c");
const reset_but = document.getElementById("again");
const easy_but = document.getElementById("easy");
const result_text = document.getElementById("result");
let area_Num = 6;
let colors = [];
let pickedColor;

//here i did this to make colors over and over again,so the better try is to write a function.
// const r = makeColor().r;
// const g = makeColor().g;
// const b = makeColor().b;

// const r1 = makeColor().r;
// const g1 = makeColor().g;
// const b1 = makeColor().b;

// const r2 = makeColor().r;
// const g2 = makeColor().g;
// const b2 = makeColor().b;

// const r3 = makeColor().r;
// const g3 = makeColor().g;
// const b3 = makeColor().b;

// const r4 = makeColor().r;
// const g4 = makeColor().g;
// const b4 = makeColor().b;

// const r5 = makeColor().r;
// const g5 = makeColor().g;
// const b5 = makeColor().b;

// I learned how to use variables wraped with text

// divArea[0].style.backgroundColor = `rgb(${r1},${g1},${b1})`;
// divArea[1].style.backgroundColor = `rgb(${r2},${g2},${b2})`;
// divArea[2].style.backgroundColor = `rgb(${r3},${g3},${b3})`;
// divArea[3].style.backgroundColor = `rgb(${r4},${g4},${b4})`;
// divArea[4].style.backgroundColor = `rgb(${r5},${g5},${b5})`;
// divArea[5].style.backgroundColor = `rgb(${r},${g},${b})`;

// randomvalue.innerHTML = `rgb(${r} , ${g} , ${b})`;
// randomvalue.style.fontSize = "2rem";

// for (let i = 0; i < divArea.length; i++) {
//   divArea[i].addEventListener("click", function () {
//     pickedColor = this.style.backgroundColor;
//     if (pickedColor === `rgb(${r}, ${g}, ${b})`) {
//       result_text.innerHTML = "Correct";
//       document.getElementById("cont_color").style.backgroundColor =
//         pickedcolors;
//       document.getElementById("cont_color").style.transition = "all 2s";
//     } else {
//       result_text.innerHTML = "Not correct";
//     }
//   });
// }
// reset_but.onclick = function () {
//   if (easy_play) {
//     location.reload();
//   }
// };

// const easy_play = (easy_but.onclick = function () {
//   divArea[
//     Math.floor(Math.random() * 6)
//   ].style.backgroundColor = `rgb(${r4},${g4},${b4})`;
//   divArea[
//     Math.floor(Math.random() * 6)
//   ].style.backgroundColor = `rgb(${r5},${g5},${b5})`;
//   divArea[
//     Math.floor(Math.random() * 6)
//   ].style.backgroundColor = `rgb(${r},${g},${b})`;
//   divArea[3].style.flex = "50";
//   divArea[4].style.flex = "50";
//   divArea[5].style.flex = "50";
//   for (i = 0; i < 3; i++) {
//     divArea[i].style.display = "none";
//     divArea[i].style.flex = "50";
//   }
// });
caller();
function caller() {
  randomvalue.innerHTML = pickedColor;
  setup_areas();
  setupmodes();
  reset_game();
}
reset_but.addEventListener("click", function () {
  reset_game();
});
function setup_areas() {
  for (let i = 0; i < divArea.length; i++) {
    divArea[i].style.backgroundColor = colors[i];
    divArea[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      console.log(pickedColor);
      console.log(clickedColor);
      if (clickedColor === pickedColor) {
        result_text.textContent = "Correct";
        document.getElementById("cont_color").style.backgroundColor =
          clickedColor;
      } else {
        result_text.textContent = "Not correct";
      }
    });
  }
}
function setupmodes() {
  easy_but.addEventListener("click", function () {
    if (this.textContent === "Make game easier!") {
      area_Num = 3;
      this.textContent = "Make game harder!";
    } else if (this.textContent === "Make game harder!") {
      area_Num = 6;
      this.textContent = "Make game easier!";
    }
    reset_game();
  });
}

// I had problem with button make game easier or harder, i was clicking on the button but it will always remained 3 color game. the problem was with the style.display property it was changing the display to none .so i removed that in reset button.every time the reset func it has called the style.display will reset now.
function reset_game() {
  document.getElementById("cont_color").style.backgroundColor = null;
  colors = genRandomColor(area_Num);
  pickedColor = chooseRancolor();
  randomvalue.innerHTML = pickedColor;
  randomvalue.style.fontSize = "1.5rem";
  result_text.innerHTML = "";
  for (let i = 0; i < divArea.length; i++) {
    if (colors[i]) {
      divArea[i].style.backgroundColor = colors[i];
      divArea[i].style.display = null;
    } else {
      divArea[i].style.display = "none";
    }
  }
}

function genRandomColor(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(makeColor());
  }
  return arr;
}

function chooseRancolor() {
  let rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}
//function that make colors
function makeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//test purposes
// console.log(`rgb(${r} , ${g} , ${b})`);
// console.log(typeof divArea[5].style.backgroundColor);
// console.log(area_Num);
