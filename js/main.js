const display = document.getElementById("display");
const buttonsContainer = document.getElementById("buttons");

const buttonValues = [
    "CE", "C", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "+/-", "0", ".", "="
];


buttonValues.forEach(value => {
    let button = document.createElement("button");
    button.innerText = value;
    if (value === "=" || value === "+" || value === "-" || value === "*" || value === "/") {
        button.style.backgroundColor = "#8c00ff";
        const h1 = document.getElementsByTagName("h1")[0];
        if (h1) {
            h1.style.color = "#8c00ff";
        }
        button.style.color = "white";

    } else if (value === "C" || value === "CE") {
        button.style.backgroundColor = "#d1d3d4";
        button.style.color = "black";
    } else if (value === "+/-") {
        button.style.backgroundColor = "#7f8c8d";
        button.style.color = "white";
    } else {
        button.style.backgroundColor = "#f1f1f1";
        button.style.color = "#333";
    }

    button.onclick = () => {
        if ((value === "+" || value === "-" || value === "*" || value === "/") &&
            (display.value.slice(-1) === "+" || display.value.slice(-1) === "-" || display.value.slice(-1) === "*" || display.value.slice(-1) === "/")) {
            return;
        }

        switch (value) {
            case "C":
                display.value = "";
                break;
            case "=":
                display.value = calculate(display.value);
                break;
            case "CE":
                display.value = display.value.slice(0, -1);
                break;
            case "+/-":
                display.value = "-";
                break;
            default:
                display.value += value;
        }
    };
    buttonsContainer.appendChild(button);
});

function calculate(result) {
    return eval(result);
}

// function clickMe() {
//     if ((value === "+" || value === "-" || value === "*" || value === "/") &&
//     (display.value.slice(-1) === "+" || display.value.slice(-1) === "-" || display.value.slice(-1) === "*" || display.value.slice(-1) === "/")) {
//     return;
// }
// }

// function clickMe() {
//     if (buttonValues.onclick() = "+") {
//         alert("undefined")
//     }
// }