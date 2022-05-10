// const number, operator (those two get queryselectorall),currentans, ac ,ce ,equal
// let selectedoperation,and isdot be false
// * all n, o, and currentAns are followed by innertext
// *for if statements in parentheses, theres three equal signs
// *compute and clear take empty parentheses
// it goes ac, number, ce, equal, operator,f clear, f appendNumberFunction, f chooseOperation, f compute
// Add event listeners:
// ac -> click clear
// equal-> click emptyfunction compute
// ce-> click emptyfunction and inside function let answer be equal to currentans, currentans equals answer slice 0,-1

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

// function appendNumberFunction takes number and currentans += number

// function chooseOperation takes operator,
// selectedoperation equals operator,
// if currentans equals nothing, return
// if currentans doesnt equal nothing, compute()

// function compute()
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
