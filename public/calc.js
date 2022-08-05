// const number, operator (those two get queryselectorall),currentans, ac ,ce ,equal
// let selectedoperation,and isdot be false
const number = document.querySelectorAll("#number");
const operator = document.querySelectorAll("#operator");
const currentAns = document.getElementById("currentAns");
const ac = document.getElementById("ac");
const ce = document.getElementById("ce");
const equal = document.getElementById("equal");
let selectedOperation;
let isDot = false;
let isNegative = false;
let answer;
// let memory = "0";
currentAns.innerText = "0";
// let maxLength = 25;
// let operation = 0;

ac.addEventListener("click", () => {
  currentAns.innerText = "0";
});
ce.addEventListener("click", function () {
  //   let answer = currentAns.innerText;

  currentAns.innerText = currentAns.innerText.slice(0, -1);
});
// function AddDigit(number) {
//   //ADD A DIGIT TO DISPLAY (kept as 'Current')
//   if (currentAns.innerText.length > maxLength) {
//     currentAns.innerText = "Aargh! Too long"; //limit length
//   } else {
//     if (
//       eval(currentAns.innerText) == 0 &&
//       currentAns.innerText.indexOf(".") == -1
//     ) {
//       number += currentAns.innerText;
//     } else {
//       currentAns.innerText += number;
//     }
//   }
//   console.log(currentAns.innerText);
// }

// * all n, o, and currentAns are followed by innertext
// *for if statements in parentheses, theres three equal signs
// *compute and clear take empty parentheses
// it goes ac, number, ce, equal, operator,f clear, f appendNumberFunction, f chooseOperation, f compute

// Add event listeners:
// ac -> click clear
// equal-> click emptyfunction compute
// ce-> click emptyfunction and inside function let answer be equal to currentans, currentans equals answer slice 0,-1
ac.addEventListener("click", clear);

number.forEach((n) => {
  n.addEventListener("click", function () {
    if (isDot === true && n.innerText === ".") {
      return;
    } else if (isNegative === true && n.innerText === "(-)") {
      return;
    } else if (n.innerText === "." && isDot !== true) {
      isDot = true;
      appendNumberFunction(n.innerText);
    } else if (n.innerText === "(-)" && isNegative !== true) {
      isNegative = true;
      appendNumberFunction("-");
    } else {
      appendNumberFunction(n.innerText);
    }
  });
});
equal.addEventListener("click", function () {
  if (currentAns.innerText !== 0) {
    compute();
  }
});

operator.forEach((o) => {
  o.addEventListener("click", function () {
    if (
      currentAns.innerText.includes("+") ||
      currentAns.innerText.includes("-") ||
      currentAns.innerText.includes("×") ||
      currentAns.innerText.includes("÷")
    ) {
      compute();
      selectedOperation = o.innerText;
      appendNumberFunction(o.innerText);
    } else {
      isNegative = false;
      isDot = false;
      selectedOperation = o.innerText;
      appendNumberFunction(o.innerText);
    }
  });
});

// number for each takes n:
// use => for the function
// then do n AEL and do click then empty function, inside function:
// if, is dot is true and n equal . just return
// else if n has . and is dot is not true make isdot true and appendNumberFunction and inside that, n innertext
// else if n has - appendNumberFunction "-"
// else appendNumberFunction n innerText

// do operator foreach and take o
// o AEL empty function
// if current ans includes + - * /: compute ;selectedOperation equals o innerText ;appendNumberFunction o innerText;
// else, isDot is false; selectedOperation equals o innerText; appendNumberFunction o innerText;

// function clear takes nothing/empty parentheses : isDot is false; currentAns equals empty string;

function clear() {
  isDot = false;
  isNegative = false;
  currentAns.innerText = "0";
}

// function appendNumberFunction takes number and currentans += number

function appendNumberFunction(number) {
  console.log(number);
  if (currentAns.innerText == 0) {
    currentAns.innerText = "";
    currentAns.innerText += number;
  } else {
    currentAns.innerText += number;
  }
  // if ((currentAns.innerText = "0")) {
  //   currentAns.innerText = "";
  //   currentAns.innerText += number;
  // } else {
  //   currentAns.innerText += number;
  // }
}
// function chooseOperation takes operator,
// selectedoperation equals operator,
// if currentans equals nothing, return
// if currentans doesnt equal nothing, compute()
function chooseOperation(operator) {
  selectedOperation = operator;
  // if (selectedOperation === "÷" && selectedOperation.length == 1) {
  //   return;
  // } else if (selectedOperation.length > 1) {
  //   console.log("there");
  // }
  if (currentAns.innerText === "") {
    return;
  }
  if (currentAns.innerText !== "") {
    compute();
  }
}

// sign means selectedOperation
// if sign is + or - use eval
// else if sign is x , split currentAns with x and let it equal "multiply"
// let the total be 1
// and use for loop to do total times equal Number multiply outside index in brackets
// after for loop currentans = total
// else if sign is division sign:
// split currentans with division sign and let it equal "divide"
// let firstdivider equal 1 ,let total1 ,and let answer
// then use forloop and if index is 0, meaning the first number being divided, make total1 equal divideindex divided by first firstDivider
// else, answer is equal to the total1 of the first division divided by divideindex
// outside forloop currentans equals answer
console.log(currentAns.innerText);

function compute() {
  if (selectedOperation === "+") {
    currentAns.innerText = eval(currentAns.innerText);
  } else if (selectedOperation === "-") {
    currentAns.innerText = eval(currentAns.innerText);
  } else if (selectedOperation === "×") {
    multiply = currentAns.innerText.split("×");
    total = 1;
    for (let index = 0; index < multiply.length; index++) {
      total *= Number(multiply[index]);
    }
    currentAns.innerText = total;
    return;
  } else if (selectedOperation === "÷") {
    divide = currentAns.innerText.split("÷");
    let firstdivider = 1;
    let total1;

    for (let index = 0; index < divide.length; index++) {
      if (index === 0) {
        total1 = divide[index] / firstdivider;
      } else {
        answer = total1 / divide[index];
      }
    }

    currentAns.innerText = answer;
  }
}
