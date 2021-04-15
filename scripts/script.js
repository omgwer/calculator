let calcDisplay = document.querySelector('.calculator_display');
let calcButtons = document.querySelector('.calculator_buttons');
let calcButton = document.querySelectorAll('.calculator_button');
let selectorOperation = false;
let firstOperand  = '';
let secondOperand = '';
let operand = '0';

function updateDisplay(info){
  calcDisplay.textContent += info;
}

function clearDisplay(){
  calcDisplay.textContent = '';

}

function getResult(res) {
  calcDisplay.textContent += ' = ' + result;
  selectorOperation = true;
}

function numberSelector(selector) {
  if (selector === '+' ||
    selector === '-' ||
    selector === '*' ||
    selector === '/') {
    operand = selector;
    return;
  }
  if (operand !== '0') {
    secondOperand += selector;
    return;
  }
  firstOperand += selector;


}
function result() {
  let a = 0;
  if (operand === '-') {
    a =  firstOperand - secondOperand;
  }
  if (operand === '+') {
    a = -(-firstOperand - secondOperand);
  }
  if (operand === '/') {
    a = firstOperand / secondOperand;
  }
  if (operand === '*') {
    a = firstOperand * secondOperand;
  }
  firstOperand = '';
  secondOperand = '';
  operand = '0';
  return a;

}

for (let i = 0; i < calcButton.length; i++) {
        calcButton[i].addEventListener('click', function () {
          if (selectorOperation) {
            clearDisplay();
            selectorOperation = false;
            res = [];
          }
          if (calcButton[i].textContent === '=') {
            calcDisplay.textContent = result().toFixed(3);
            selectorOperation = true;
            return;
          }
            numberSelector(calcButton[i].textContent);
            updateDisplay(calcButton[i].textContent);
            console.log(firstOperand);
            console.log(secondOperand);
            console.log(operand);
        });
}







