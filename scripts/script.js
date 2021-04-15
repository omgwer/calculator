let calcDisplay = document.querySelector('.calculator_display');
let calcButtons = document.querySelector('.calculator_buttons');
let calcButton = document.querySelectorAll('.calculator_button');
let selectorOperation = false;
res = []

function updateDisplay(info){
  calcDisplay.textContent += info;
}

function clearDisplay(){
  calcDisplay.textContent = '';
}

function getResult(res) {
  let result = eval(res);
  calcDisplay.textContent += ' = ' + result;
  selectorOperation = true;

}


for (let i = 0; i < calcButton.length; i++) {
        calcButton[i].addEventListener('click', function () {

          if (selectorOperation) {
            clearDisplay();
            console.log('clear!');
            selectorOperation = false;
          }
          if (calcButton[i].textContent == '=') {
            getResult(res);

          } else {

            res += calcButton[i].textContent;
            console.log(res);
            updateDisplay(calcButton[i].textContent);
          }

        });
}







