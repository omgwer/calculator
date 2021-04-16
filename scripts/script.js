let calcDisplay = document.querySelector('.calculator_display');
let calcButton = document.querySelectorAll('.calculator_button');
let selectorOperation = false;
let firstOperand  = '';
let secondOperand = '';
let operand = '0';
let operandArray = ['+', '-', '/', '*'];
let haveResult = false;

function operandChecker(numberForCheck) {
  for (let i = 0; i < operandArray.length; i++) {
    if (operandArray[i] === numberForCheck) {
      return true;
    }
  }
}

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
  if (operandChecker(selector)) {
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
  if (a.toFixed(3).toString().length > 15)  {
    numberCleaner();
    return 'ERROR' ;
  }
  return a.toFixed(3);

}

for (let i = 0; i < calcButton.length; i++) {
        calcButton[i].addEventListener('click', function () {
          if (selectorOperation) {
            displayCleaner();
            selectorOperation = false;
          }

          if (calcButton[i].textContent === '=' && haveResult) {
            return;
          }

          if (calcButton[i].textContent === '=' && firstOperand && secondOperand) {
            calcDisplay.textContent = result();
            firstOperand = calcDisplay.textContent;
            operand = '0';
            haveResult = true;
            return;
          }
          if (haveResult && !(operandChecker(calcButton[i].textContent))) {
            displayCleaner();
            numberCleaner();
            haveResult = false;
          }

          if (operand !== '0' && operandChecker(calcButton[i].textContent)) {
            calcDisplay.textContent = result();
            haveResult = false;
            firstOperand = calcDisplay.textContent;
            updateDisplay(calcButton[i].textContent);
            numberSelector(calcButton[i].textContent);
            return;
          }
          if (calcButton[i].textContent === '=') {
            return;
          }
          updateDisplay(calcButton[i].textContent);
          numberSelector(calcButton[i].textContent);
          haveResult = false;
        });
}







