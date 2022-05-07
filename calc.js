const number = document.querySelectorAll("#number");
const operator = document.querySelectorAll("#operator");
let previousAns = document.getElementById("previousAns");
let currentAns = document.getElementById("currentAns");
const ac = document.getElementById("ac");
const ce = document.getElementById("ce");
const equal = document.getElementById("equal");
let isDot = false;
let selectedOperation;
ac.addEventListener("click", clear);
number.forEach((n) => {
  n.addEventListener("click", function () {
    if (isDot === true && n.innerText === ".") {
      return;
    } else if (n.innerText === "." && isDot !== true) {
      isDot = true;
      appendNumberFunction(n.innerText);
    } else if (n.innerText === "(-)") {
      appendNumberFunction("-");
    } else {
      appendNumberFunction(n.innerText);
    }
  });
});
ce.addEventListener("click", function () {
  let answer = currentAns.innerText;
  currentAns.innerText = answer.slice(0, -1);
});
equal.addEventListener("click", function () {
  compute();
});

operator.forEach((o) => {
  o.addEventListener("click", function () {
    if (
      currentAns.innerText.includes("+") ||
      currentAns.innerText.includes("-") ||
      currentAns.innerText.includes("÷") ||
      currentAns.innerText.includes("×")
    ) {
      compute();
      selectedOperation = o.innerText;
      appendNumberFunction(o.innerText);
    } else {
      isDot = false;
      selectedOperation = o.innerText;
      appendNumberFunction(o.innerText);
    }
  });
});
function clear() {
  isDot = false;
  previousAns.innerText = "";
  currentAns.innerText = "";
}

function appendNumberFunction(number) {
  currentAns.innerText += number;
}

function chooseOperation(operator) {
  selectedOperation = operator;

  if (currentAns.innerText === "") {
    return;
  }

  if (currentAns.innerText !== "") {
    compute();
  }
}

function compute() {
  if (selectedOperation === "+") {
    currentAns.innerText = eval(currentAns.innerText);
  } else if (selectedOperation === "-") {
    currentAns.innerText = eval(currentAns.innerText);
  } else if (selectedOperation === "×") {
    console.log(currentAns.innerText);
    let multiply = currentAns.innerText.split("×");
    let total = 1;
    for (let index = 0; index < multiply.length; index++) {
      total *= Number(multiply[index]);
    }
    currentAns.innerText = total;
  } else if (selectedOperation === "÷") {
    let divide = currentAns.innerText.split("÷");
    let firstDivider = 1;
    let total1;
    let answer;
    for (let index = 0; index < divide.length; index++) {
      if (index === 0) {
        total1 = divide[index] / firstDivider;
      } else {
        answer = total1 /= divide[index];
      }
    }
    currentAns.innerText = answer;
  }
}
