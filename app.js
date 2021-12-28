// Main functions for the calculator:
// add
// subtract
// multiply
// divide


// create operator function 
// takes an operator (+, -, *, /) and calls one of the above functions

let field = document.querySelector('.field');
let firstNumber;
let secondNumber;
let chosenOperator;

const clickedButton = document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', e => {
        switch (button.textContent) {
            case "C":
                clear(field);
                break;
            case "+":
                chosenOperator = '+';
                break;
            case "-":
                chosenOperator = '-';
                break;
            case '*':
                chosenOperator = '*';
                break
            case '/':
                chosenOperator = '/';
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                field.textContent += button.textContent;
                break;
        }
        // return console.log(button.textContent);
    })

})












// ************************************
// Functions

function clear(element) {
    element.textContent = "";
}

function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(a, b, operator) {

    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            console.log("Something happened, you should have selected an operator");
            break;
    }

    return result;


}