let btns = document.querySelectorAll(".questions button");
let btnCont = document.querySelectorAll(".questions");
let $firstBtn = document.querySelectorAll(".btn");
let $secondtBtn = document.querySelectorAll(".btn2");
let $thirdtBtn = document.querySelectorAll(".btn3");
let $fourthtBtn = document.querySelectorAll(".btn4");
let $fifthtBtn = document.querySelectorAll(".btn5");
let scoreCont = document.querySelector(".score");
let btnSubmitCont1 = document.querySelector(".btnDiv");
let btnSubmitCont2 = document.querySelector(".btnDiv2");
let score = 0;
let ans1 = "adios",
  ans2 = "cabbage patch kids",
  ans3 = "venus",
  ans4 = "mexico",
  ans5 = "three";
btnSubmitCont1.classList.remove("clear");
function showChoosen(arr, n) {
  for (let index = 0; index < arr.length; index++) {
    arr[index].style.background = "#fff";
    arr[n].style.background = "rgba(9, 4, 49, 0.2)";
  }
}
let resultOne = [],
  resultTwo = [],
  resultThree = [],
  resultFour = [],
  resultFive = [];

function showResult(arr, a) {
  for (let index = 0; index < arr.length; index++) {
    arr[index].addEventListener("click", () => {
      c = arr[index];
      a.push(c);
    });
  }
}

showResult($firstBtn, resultOne);
showResult($secondtBtn, resultTwo);
showResult($thirdtBtn, resultThree);
showResult($fourthtBtn, resultFour);
showResult($fifthtBtn, resultFive);

function checkValue(newArrs, rightAns) {
  let element;
  for (let index = 0; index < newArrs.length; index++) {
    element = newArrs[newArrs.length - 1];
  }
  if (element.value === rightAns) {
    element.style.background = "rgb(9, 211, 9)";
    score += 1;
  } else {
    element.style.background = "rgb(231, 63, 119)";
  }
}
function showCorrect(arr, correct) {
  arr.forEach((e) => {
    if (e.value == correct) {
      e.style.background = "rgb(9, 211, 9)";
    }
  });
}
function submitItem() {
  if (
    resultOne.length == 0 ||
    resultTwo.length == 0 ||
    resultThree.length == 0 ||
    resultFour.length == 0 ||
    resultFive.length == 0
  ) {
    let notify = document.querySelector(".alert");
    notify.style.display = "block";
    setInterval(() => {
      notify.style.display = "none";
    }, 2000);
  } else {
    checkValue(resultOne, ans1);
    checkValue(resultTwo, ans2);
    checkValue(resultThree, ans3);
    checkValue(resultFour, ans4);
    checkValue(resultFive, ans5);
    // shows the correct ans
    showCorrect($firstBtn, ans1);
    showCorrect($secondtBtn, ans2);
    showCorrect($thirdtBtn, ans3);
    showCorrect($fourthtBtn, ans4);
    showCorrect($fifthtBtn, ans5);
    btnSubmitCont1.classList.add("clear");
    btnSubmitCont2.classList.add("open");
    scoreCont.innerHTML = `You scored ${score}/5 correct answers`;
    console.log(score);
  }
}
