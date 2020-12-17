'use strict';

const startButton = document.querySelector('#start-button');
const inputCode = document.querySelector('#modal-code');
const inputNumber = document.querySelector('#code-choise')
const outputCode = document.querySelector('#output-code');


function validationInput() {
    startButton.disabled = true;
    if (inputCode.value.length > 0 && inputNumber.value.length > 0) {
        startButton.disabled = false;
    }
}

document.querySelectorAll('.modal-input').forEach(el => {
    el.addEventListener('keyup', validationInput);
    el.addEventListener('change', validationInput);
});

function cesars() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaLenght = alphabet.length;
    const codeAlpha = alphabet.split('');
    const codeInput = inputCode.value.split('');

    if (typeof inputCode.value != 'string') {
        throw new Error('This must by a string')
    } else if (inputCode.value == '') {
        throw new Error('You must write something there')
    }

    function checkInput() {
        let string = [];
        codeInput.forEach(el => {
            if (parseInt(el) < 10) {
                string.push(el)
            } else if (el === '!' || el === '?' || el === '@' || el === '#' || el === '*' || el === '$') {
                string.push(el)
                console.log(el);
            } else if (el === el.toUpperCase()) {
                const element = el.toLowerCase();
                string.push(codeAlpha[(codeAlpha.indexOf(element) + 13) % alphaLenght].toUpperCase());
            } else string.push(codeAlpha[(codeAlpha.indexOf(el) + 13) % alphaLenght]);
        });
        return string.join('')
    }

    const result = checkInput()
    outputCode.innerHTML = result
}

startButton.addEventListener('click', cesars);