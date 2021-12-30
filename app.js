// Main functions for the calculator:
// add
// subtract
// multiply
// divide


// create operator function 
// takes an operator (+, -, *, /) and calls one of the above functions

let bottomField = document.querySelector('.top-field');
let topField = document.querySelector('.bottom-field');
// topField.textContent = "TOP"
// bottomField.textContent = "BOTTOM";
// let spanField = document.createElement('span');
// spanField.classList.add('field-span');

// field.appendChild(spanField);
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
                clear(topField, bottomField);
                arrayOfNumsAndOperations = [];
                break;
            case "+":
            // field.textContent += ' + ';
            // clear(field);
            case "-":
            // clear(field);
            case '*':
            // clear(field);
            case '/':
                if (!isNaN(answer) && answer != undefined) {
                    chosenOperator = button.textContent;
                    topField.textContent += ' ' + chosenOperator;
                    arrayOfNumsAndOperations.push(chosenOperator)
                    console.log(arrayOfNumsAndOperations);
                    break;
                }
                chosenOperator = button.textContent;
                arrayOfNumsAndOperations.push(parseInt(bottomField.textContent));
                arrayOfNumsAndOperations.push(chosenOperator);
                bottomField.textContent += ' ' + chosenOperator + ' ';
                bottomField.textContent = "";
                topField.textContent = arrayOfNumsAndOperations[0] + ' ' + arrayOfNumsAndOperations[1];

                // clear(field);
                break;
            case '√':
                bottomField.textContent = sqrt(parseInt(bottomField.textContent));
                break;
            case 'x²':
                topField.textContent = multiplyByPowers(topField.textContent, 2);
                break;
            case '=':
                arrayOfNumsAndOperations.push(parseInt(bottomField.textContent));
                answer =
                    operate(arrayOfNumsAndOperations);
                arrayOfNumsAndOperations = [];
                arrayOfNumsAndOperations.push(answer);
                topField.textContent = answer;
                bottomField.textContent = "";
                console.log(arrayOfNumsAndOperations);
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
                // if (arrayOfNumsAndOperations[arrayOfNumsAndOperations.length - 2] == bottomField.textContent ||
                //     parseInt(bottomField.textContent === 0 ||
                //         bottomField.textContent === 'Infinity')) {
                //     clear(bottomField, bottomField);
                //     bottomField.textContent += button.textContent;
                //     break;
                // }
                bottomField.textContent += button.textContent;
                break;
        }
        // return console.log(button.textContent);
    })

})












// ************************************
// Functions

function clear(element, secondElement) {
    element.textContent = "";
    secondElement.textContent = "";
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
            default:
                arr.push("Incorrect synthax. Please Clear.");
                break;
        }

    }
    return arr[0];
}