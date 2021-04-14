let calcDisplay = document.querySelector('.calculator_display');
let calcButtons = document.querySelector('.calculator_buttons');
let calcButton = document.querySelectorAll('.calculator_button');
console.log(calcDisplay);

for (let i = 0; i < calcButton.length; i++) {
        calcButton[i].addEventListener('click', function (){
        elementSaver(calcButton[i].textContent);

        if (calcButton[i].textContent == '=') {

            pushElement(a);

        }


        });


}
let a = []
function elementSaver(element) {
    a += element;

}

function pushElement(element) {
    let card = document.createElement('b');
    card.textContent = element;
    card.classList.add('red');
    calcDisplay.appendChild(card);



}



