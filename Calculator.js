function Add(num1, num2) {
    return num1 + num2;
}

function Subtract(num1, num2) {
    return num1 - num2;
}

function Multiply(num1, num2) {
    return num1 * num2;
}

function Divide(num1, num2) {
    return num1 / num2;
}

function GetCalculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.querySelector('input[name="operator"]:checked').value;    

    switch (operator) {
        case "+":
            document.getElementById("result").innerText = Add(num1, num2);
            break;
        case "-":
            document.getElementById("result").innerText = Subtract(num1, num2);
            break;
        case "*":
            document.getElementById("result").innerText = Multiply(num1, num2);
            break;
        case "/":
            document.getElementById("result").innerText = Divide(num1, num2);
            break;
        default:
            return "Try again";
            break;
    }
}