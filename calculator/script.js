function getKey(){
    let num1 = "";
    let num2 = "";
    let operator = "";
    const number = document.querySelector(".numbers");
    const operators = document.querySelector(".operators");
    
    const btn = document.querySelectorAll(".btn");
    btn.forEach((button) => {
        button.addEventListener("click", () => {
            if(button.id == "cancel"){
                num1 = "";
                num2 = "";
                operator = "";
                number.innerHTML = '';
                operators.innerHTML = '';
            } else if (button.id === "equal") {
                if (num1 !== "" && num2 !== "" && operator !== "") {
                    let result;
                    switch (operator) {
                        case "+":
                            result = parseFloat(num1) + parseFloat(num2);
                            break;
                        case "-":
                            result = parseFloat(num1) - parseFloat(num2);
                            break;
                        case "x":
                            result = parseFloat(num1) * parseFloat(num2);
                            break;
                        case "/":
                            result = parseFloat(num1) / parseFloat(num2);
                            break;
                        default:
                            result = "Error";
                            break;
                    }
                    number.innerHTML = result;
                    num1 = result;
                    num2 = "";
                    operator = "";
                    operators.innerHTML = '';
                }
            } else if (!isNaN(button.id)) {
                if (operator === "") {
                    num1 += button.id;
                    number.innerHTML = num1;
                } else {
                    num2 += button.id;
                    number.innerHTML = num2;
                }
            } else { // If the button is an operator
                if (num1 !== "") {
                    operator = button.id;
                    operators.innerHTML = operator;
                }
            }
        });
    });
}

getKey();
