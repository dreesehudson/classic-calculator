// class Button {
//     constructor(tempId, tempType) {
//         this.type = tempType;
//         this.id = tempId;
//         this.element = "button";
//         this.parent = buttonRow;
//         this.classes = "";
//         this.render = this.render.bind(this);
//     }

//     //create Button instance on buttonRow with id, data-type, and styling
//     render() {
//         const newElement = document.createElement("button");
//         newElement.setAttribute(`data-${this.type}`, "");
//         newElement.setAttribute("id", `${this.id}`);
//         newElement.setAttribute("class", "col-3 rounded border btn-primary text-center");
//         newElement.textContent = this.id;
//         buttonRow.appendChild(newElement);
//     }
// }

class Calculator {
    constructor(prevOperandTextElement, currOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement;
        this.currOperandTextElement = currOperandTextElement;
        this.hardClear()
    }

    hardClear() {
        this.currOperand = "";
        this.prevOperand = "";
        this.operation = undefined;
    }

    delete() {

    }

    appendValue(number) {
        this.currOperand = number;
    }

    chooseOperator(operation) {

    }

    math() {

    }

    updateOutput() {
        this.currOperandTextElement.innerText = this.currOperand;
        this.prevOperandTextElement.innerText = this.prevOperand;
    }
}
//Build Row/Col Framework for UI
const main = document.getElementById("app");
const headerRow = generateElement("div", "headerRow", "row", main);
const outputRow = generateElement("div", "outputRow", "row", main);
generateElement("div", "prevOperand", "col-12 bg-dark text-white text-right border-top", outputRow);
document.getElementById("prevOperand").setAttribute("data-prevOperand", "");
document.getElementById("prevOperand").textContent = "123";
generateElement("div", "currOperand", "col-12 bg-dark text-white text-right border-bottom", outputRow);
document.getElementById("currOperand").setAttribute("data-currOperand", "");
document.getElementById("currOperand").textContent = "234";
const buttonRow = generateElement("div", "buttonRow", "row", main);

//create div for row and cols
function generateElement(element, id, classes, parent) {
    let newElement = document.createElement(element);
    newElement.setAttribute("class", classes);
    newElement.setAttribute("id", id);
    parent.appendChild(newElement);
    return newElement;
}





//MODEL
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation');
const equalsButton = document.querySelector("data-equals");
const allClearButton = document.querySelector("data-hard-clear");
const deleteButton = document.querySelector("data-delete");
const prevOperandTextElement = document.querySelector("data-prevOperand");
const currOperandTextElement = document.querySelector("data-currOperand");
const calculator = new Calculator(prevOperandTextElement, currOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("button clicked");
        calculator.appendValue(button.innerText)
        calculator.updateOutput()
    }
    )
});

// let buttonNames = [
//     { id: "C", type: "hard-Clear" },
//     { id: "DEL", type: "delete" },
//     { id: "pi", type: "number" },
//     { id: "^2", type: "operation" },
//     { id: "7", type: "number" },
//     { id: "8", type: "number" },
//     { id: "9", type: "number" },
//     { id: "/", type: "operation" },
//     { id: "4", type: "number" },
//     { id: "5", type: "number" },
//     { id: "6", type: "number" },
//     { id: "*", type: "operation" },
//     { id: "1", type: "number" },
//     { id: "2", type: "number" },
//     { id: "3", type: "number" },
//     { id: "-", type: "operation" },
//     { id: "0", type: "number" },
//     { id: ".", type: "number" },
//     { id: "=", type: "equals" },
//     { id: "+", type: "operation" }
// ]

// for (let i = 0; i < buttonNames.length; i++) {
//     let newButton = new Button(buttonNames[i].id, buttonNames[i].type)
//     newButton.render();
// }

