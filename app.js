let calculator = document.querySelector('#calculator');
let inputField = document.querySelector('#input');
let topField = document.querySelector('#operation');
let numberOne;
let numberTwo;
let operator;

// function section
let add = (numberOne, numberTwo) => 
{
    return parseFloat(numberOne) + parseFloat(numberTwo);
};

let subtract = (numberOne, numberTwo) => 
{
    return parseFloat(numberOne) - parseFloat(numberTwo);
};

let multiply = (numberOne, numberTwo) => 
{
    return parseFloat(numberOne) * parseFloat(numberTwo);
};

let divide = (numberOne, numberTwo) => 
{
    return numberTwo === '0' ? 'You can\'t divide by zero!' : parseFloat(numberOne) / parseFloat(numberTwo);
};

let operate = (operator, numberOne, numberTwo) => 
{
    return operator === '+' ? add(numberOne, numberTwo) :
        operator === '-' ? subtract(numberOne, numberTwo) :
        operator === '*' ? multiply(numberOne, numberTwo) :
        operator === '/' ? divide(numberOne, numberTwo) : null;
};

calculator.addEventListener('click', function(e) 
{
    //buttons with digits
    if (e.target.classList.contains('digit')) 
    {
        if (inputField.innerText === '0') 
        {
            inputField.innerText = e.target.innerText;
        } 
        else 
        {
            inputField.innerText += e.target.innerText;
        }
    }

    // buttons clear and delete
    if (e.target.id === 'clear') 
    {
        inputField.innerText = '0';
        topField.innerText = '';
    }
    if (e.target.id === 'delete') 
    {
        if (inputField.innerText.length > 1) 
        {
            inputField.innerText = inputField.innerText.slice(0, -1);
        } 
        else 
        {
            inputField.innerText = '0';
        }
    }
    //button Dot
    if (e.target.id === 'dot') 
    {
        let dotRegExp = /\./;
        if (!dotRegExp.test(inputField.innerText)) 
        {
            inputField.innerText += '.';
        }
    }

    //buttons with operators
    if (e.target.classList.contains('operator')) 
    {
        if (topField.innerText === '' || topField.innerText.charAt(topField.innerText.length - 1) === '=') 
        {
            topField.innerText = inputField.innerText + e.target.innerText;
            numberOne = inputField.innerText;
        } 
        else 
        {
            numberTwo = inputField.innerText;
            topField.innerText = operate(operator, numberOne, numberTwo) + e.target.innerText;
            numberOne = operate(operator, numberOne, numberTwo);
        }
        operator = e.target.innerText;
        inputField.innerText = '0';

    }
// Equal Button
    if (e.target.classList.contains('equal'))
    {
        if(topField.innerText != '')
        {
            numberTwo = inputField.innerText;
            inputField.innerText = operate(operator, numberOne, numberTwo);
            topField.innerText += numberTwo;
            topField.innerText += '=';
        }
    }    
})
