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