let numberOne;
let numberTwo;
let operator;

let add = (numberOne, numberTwo) => {
    return numberOne+numberTwo;
};

let subtract = (numberOne, numberTwo) => {
    return numberOne-numberTwo;
};

let multiply  = (numberOne, numberTwo) => {
    return numberOne*numberTwo;
};

let divide = (numberOne, numberTwo) => {
    return numberOne/numberTwo;
};

let operate =(operator, numberOne, numberTwo) => {
    return operator === '+' ? add(numberOne,numberTwo):
    operator ==='-'? subtract(numberOne, numberTwo):
    operator ==='*'? multiply(numberOne, numberTwo):
    operator ==='/'? divide(numberOne, numberTwo): null;
    };

    let calcButtons = document.querySelectorAll(".row");
    let inputField = document.querySelector('#input');
    
    calcButtons.forEach(buttonRow => {
        buttonRow.addEventListener('click', function(e) {
            if (e.target.classList.contains('digit') && inputField.innerText === '0') {
                inputField.innerText = e.target.innerText;
            } else if (e.target.classList.contains('digit')){
                inputField.innerText += e.target.innerText;
            }
        });
    });

    let clearButton = document.getElementById('clear');

    clearButton.addEventListener('click', function(e){
        inputField.innerText = 0;
    })

    let deleteButton = document.getElementById('delete');

    deleteButton.addEventListener('click', function(e){
        let inputText = inputField.innerText;
        if (inputText.length > 0) {
            let newInputText = inputText.slice(0, -1);
            inputField.innerText = newInputText;
    }});
