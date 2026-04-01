
const button = document.getElementById('addBtn');
const resultDisplay = document.getElementById('result');

button.onclick = function() {
    
    
    const box1 = document.getElementById('num1').value;
    const box2 = document.getElementById('num2').value;

    
    const sum = Number(box1) + Number(box2);

   
    resultDisplay.innerText = "Answer: " + sum;
};