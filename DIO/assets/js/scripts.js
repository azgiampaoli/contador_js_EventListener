var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
    addEventListener("click", alert(currentNumber));
    
}

function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    addEventListener("click", alert(currentNumber));
}




