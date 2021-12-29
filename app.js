// Main functions for the calculator:
// add
// subtract
// multiply
// divide


// create operator function 
// takes an operator (+, -, *, /) and calls one of the above functions

let field = document.querySelector('#field');
let answer;
let inputNumber;
let secondNumber;
let chosenOperator;
let arrayOfNumsAndOperations = [];

const clickedButton = document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', () => {
        console.log(arrayOfNumsAndOperations);
        switch (button.textContent) {
            case "C":
                clear(field);
                arrayOfNumsAndOperations = [];
                break;
            case "+":
                chosenOperator = '+';
                // field.textContent += ' + ';
                arrayOfNumsAndOperations.push(parseInt(field.textContent));
                arrayOfNumsAndOperations.push(chosenOperator);
                console.log(arrayOfNumsAndOperations);
                clear(field);
                break;
            case "-":
                chosenOperator = '-';
                arrayOfNumsAndOperations.push(parseInt(field.textContent));
                arrayOfNumsAndOperations.push(chosenOperator);
                clear(field);
                break;
            case '*':
                chosenOperator = '*';
                arrayOfNumsAndOperations.push(parseInt(field.textContent));
                arrayOfNumsAndOperations.push(chosenOperator);
                clear(field);
                break
            case '/':
                chosenOperator = '/';
                arrayOfNumsAndOperations.push(parseInt(field.textContent));
                arrayOfNumsAndOperations.push(chosenOperator);
                console.log(arrayOfNumsAndOperations);
                clear(field);
                break;
            case '√':
                field.textContent = sqrt(parseInt(field.textContent));

                break;
            case 'x²':
                field.textContent = multiplyByPowers(parseInt(field.textContent), 2);
                break;

            case '=':
                arrayOfNumsAndOperations.push(parseInt(field.textContent));
                answer =
                    operate(arrayOfNumsAndOperations);
                field.textContent = answer;
                console.log(arrayOfNumsAndOperations);
                arrayOfNumsAndOperations = [];
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

                if (arrayOfNumsAndOperations[arrayOfNumsAndOperations.length - 2] == field.textContent ||
                    parseInt(field.textContent === 0 ||
                        field.textContent === 'Infinity')) {
                    clear(field);
                    field.textContent += button.textContent;
                    break;
                }
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

function add(a = 0, b = 0) {
    if (isNaN(a)) {
        a = 0;
    } else if (isNaN(b)) {
        b = 0;
    }
    return a + b;
}

function multiplyByPowers(a = 1, b = 1) {
    if (isNaN(a)) {
        a = 1;
    } else if (isNaN(b)) {
        b = 1;
    }

    return Math.pow(a, b);
}

function subtract(a = 0, b = 0) {
    if (isNaN(a)) {
        a = 0;
    } else if (isNaN(b)) {
        b = 0;
    }
    return a - b;
}

function multiply(a = 1, b = 1) {
    if (isNaN(a)) {
        a = 1;
    } else if (isNaN(b)) {
        b = 1;
    }
    return a * b;
}

function divide(a = 1, b = 1) {
    if (isNaN(a)) {
        a = 1;
    } else if (isNaN(b)) {
        b = 1;
    } else if (a === 0 && b === 0) {
        return "It's ya boi divide by 0"
    }
    return a / b;
}

function sqrt(a = 1) {
    return Math.sqrt(a)
}


function operate(arr) {
    let number;
    let operator;
    console.log(arr);
    while (arr.length > 1) {
        console.log(arr);
        number = arr.shift();
        operator = arr.shift();
        switch (operator) {
            case '+':
                arr.unshift(add(number, arr.shift()));
                break;
            case '-':
                arr.unshift(subtract(number, arr.shift()));
                break;
            case '*':
                arr.unshift(multiply(number, arr.shift()));
                break;
            case '/':
                arr.unshift(divide(number, arr.shift()));
                break;
            case 'x²':
                arr.unshift(multiplyByPowers(number, 2))
                return arr[0];
                break;
            default:
                console.log("Something happened, you should have selected an operator");
                break;
        }

    }
    return arr[0];
}