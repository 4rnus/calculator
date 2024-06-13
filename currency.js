function cal() {
    let number1 = document.getElementById("curr");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value) * 1.98;
    result.innerHTML = sum.toFixed(2); 
}