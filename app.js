const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const op = document.querySelector('.op');
const result = document.querySelector('.result');

const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operation');


let steps = [0,0,0];

for( let number of numbers){
    number.addEventListener('click', () => {
        if(!steps[0]){
            num1.textContent += number.textContent;
        }
        else if(!steps[2]) {
            steps[1] = 1;
            num2.textContent += number.textContent;
        }
    });
}

for( let operation of operations){
    operation.addEventListener('click', () => {
        if(!steps[1]){
            op.textContent = operation.textContent;
            steps[0] = 1;
        }
    });
}

document.querySelector('.reset').addEventListener('click', () => {
    for( let i = 0; i < steps.length; i++){
        steps[i] = 0;
    }

    num1.textContent = '';
    num2.textContent = '';
    op.textContent = '?';
    result.textContent = 0;
});

document.querySelector('.equal').addEventListener('click', () => {
    let number1 = Number(num1.textContent);
    let number2 = Number(num2.textContent);

    if(op.textContent == '+'){
        result.textContent = number1 + number2;
    }
    else if(op.textContent == '-'){
        result.textContent = number1 - number2;
    }
    else if(op.textContent == '*'){
        result.textContent = number1 * number2;
    }
    else if(op.textContent == '/'){
        result.textContent = number1 / number2;
    }
    else {
        result.textContent = 'error';
    }
});


