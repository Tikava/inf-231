import { add } from './scripts/addition.js';
import { subtract } from './scripts/subtraction.js';
import { multiply } from './scripts/multiplication.js';
import { divide } from './scripts/division.js';

const operationDisplay = document.getElementById('calc-operation');
const typedDisplay = document.getElementById('calc-typed');
const acButton = document.querySelector('.ac');
acButton.addEventListener('click', () => {
    operationDisplay.textContent = '';
    typedDisplay.textContent = '';
});

const optButtons = document.querySelectorAll('.opt');
optButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const opt = event.target.textContent.trim();
        operationDisplay.textContent += `${typedDisplay.textContent} ${opt}`;
        typedDisplay.textContent = '';
    });
});

const numAndPeriodButtons = document.querySelectorAll('.calc-button-row button:not(.opt):not(.ac)');
numAndPeriodButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.textContent.trim();
        typedDisplay.textContent += value;
    });
});

const equalsButton = document.querySelector('.calc-button-row .opt:last-child');
equalsButton.addEventListener('click', () => {
    operationDisplay.textContent += `${typedDisplay.textContent}`;
    const operations = operationDisplay.textContent.split(' ').filter(op => op);
    const result = calculate(operations);

    typedDisplay.textContent = result;
    operationDisplay.textContent = '';
});

function calculate(operations) {
    let result = 0;
    let currentOperation = '+';
    operations.forEach(op => {
        if (isNaN(op)) {
            currentOperation = op;
        } else {
            const number = parseFloat(op);
            switch (currentOperation) {
                case '+':
                    result = add(result, number);
                    break;
                case '−':
                    result = subtract(result, number);
                    break;
                case '×':
                    result = multiply(result, number);
                    break;
                case '÷':
                    result = divide(result, number);
                    break;
                default:
                    break;
            }
        }
    });
    return result;
}
