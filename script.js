/* eslint-disable no-unused-vars */
let inputBox = document.getElementById('input-box');



function clearInput() {
    inputBox.value = '';
}

function appendInput(value) {
    inputBox.value += value;
}

function calculate() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        alert('Invalid input');
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/^[0-9]$/.test(key)) {
        appendInput(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendInput(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        inputBox.value = inputBox.value.slice(0, -1);
    } else if (key !== 'Escape') {
        alert('Only numbers are allowed');
    }
});

