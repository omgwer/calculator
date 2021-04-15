let calcDisplay = document.querySelector('.calculator_display');
let calcButton = document.querySelectorAll('.calculator_button');
let selectorOperation = false;
let firstOperand  = '';
let secondOperand = '';
let operand = '0';

function numberCleaner() {
  firstOperand  = '';
  secondOperand = '';
  operand = '0';
}

function updateDisplay(info){
  calcDisplay.textContent += info;
}

function displayCleaner(){
  calcDisplay.textContent = '';
}

function numberSelector(selector) {
  if (selector === '+' ||
    selector === '-' ||
    selector === '*' ||
    selector === '/') {
    operand = selector;
    return;
  }
  if (selector === 'On/c') {
    numberCleaner();
    displayCleaner();
    return '';
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
    if (secondOperand === '0') {
      numberCleaner();
      return 'ERROR' ;
    } else {
    a = firstOperand / secondOperand;
    }
  }
  if (operand === '*') {
    a = firstOperand * secondOperand;
  }

  numberCleaner();
  return a;

}

for (let i = 0; i < calcButton.length; i++) {
        calcButton[i].addEventListener('click', function () {
          if (selectorOperation) {
            displayCleaner();
            selectorOperation = false;

          }
          if (calcButton[i].textContent === '=') {
            calcDisplay.textContent = result();
            selectorOperation = true;
            return;
          }
          updateDisplay(calcButton[i].textContent);
          numberSelector(calcButton[i].textContent);
          console.log(firstOperand);
          console.log(secondOperand);
          console.log(operand);
        });
}







