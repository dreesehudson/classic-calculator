
class Calculator {
    //ingredient list for calculator
    constructor(previousEntryTextElement, currentEntryTextElement) {
        this.previousEntryTextElement = previousEntryTextElement;
        this.currentEntryTextElement = currentEntryTextElement;
        //on creation of each instance, clear out the display
        this.clear();
    }

    //VIEW
    //onClick type: "hard-clear"
    clear() {
        //tell UI to clear current display, 
        this.currentEntry = '';
        //clear previous display, 
        this.previousEntry = '';
        //clear current operation
        this.operation = undefined;
    }
    //onClick type: "delete"
    delete() {
        //undo function, will remove the last entered digit. does not apply to operators
        this.currentEntry = this.currentEntry.toString().slice(0, -1);
    }

    //onClick type: number (0-9, pi, and .). Passes in value of button clicked
    appendNumber(number) {
        //kickout if decimal point is already in current Entry.
        if (number === '.' && this.currentEntry.includes('.')) return;
        //otherwise add the passed number to the end of the current entry string.
        this.currentEntry = this.currentEntry.toString() + number.toString();
    }

    //onClick type: operator (+, -, *, /, ^2) pass operator of button clicked
    chooseOperation(operation) {
        //kickout if no numbers in current entry yet
        if (this.currentEntry === '') return;
        //if previous entry has a value, and this is a subsequent operation, do math
        if (this.previousEntry !== '') {
            //go do math
            this.compute();
        }
        //reassign this local operation so that updateDisplay() can show it in the previous Entry field
        this.operation = operation;
        //reassign the current result to empty previous entry (thanks compute())
        this.previousEntry = this.currentEntry;
        //clear current entry so that it can accept new inputs later
        this.currentEntry = '';
    }

    //doing the math
    compute() {
        //declare local variable to catch what the math outputs
        let computation;
        //convert previousEntry into floating number in order to do math
        const prev = parseFloat(this.previousEntry);
        //convert currentEntry into floating number in order to do math
        const current = parseFloat(this.currentEntry);
        //kickout if somehow previous or current values are non numbers
        if (isNaN(prev) || isNaN(current)) return;
        //switch to handle all operator types in one function
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            case '^2':
                computation = current^2;
                break;
            default:
                return;
        }
        //give the result back to the currentEntry
        this.currentEntry = computation;
        //clear operation when finished using it
        this.operation = undefined;
        //clear previous entry so that it can accept result later
        this.previousEntry = '';
    }

    //called when UI updatesDisplay()
    //handles odd behavior from switching between strings and numbers
    getDisplayNumber(number) {
        //convert number to string
        const stringNumber = number.toString();
        //split string to array at decimal point and store first element as number
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        //split string to array at decimal point and store second element as number
        const decimalDigits = stringNumber.split('.')[1];
        //put humpty dumpty back together again
        let integerDisplay;
        //clear display number, if somehow not a number
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } 
        //otherwise convert left-of-decimal number to string with comma delimited values
        else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        //if right-of-decimal numbers exist, format final answer with decimal, all as string
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    //render new calculations to UI after every button press.
    updateDisplay() {
        //display currentEntry output from getDisplayNumber() in HTML
        this.currentEntryTextElement.innerText =
            this.getDisplayNumber(this.currentEntry);
        //if operation has been pressed and not yet cleared via secondary operation, all-clear, or equals
        if (this.operation != null) {
            //display previousEntry output from getDisplayNumber() and current operation in HTML
            this.previousEntryTextElement.innerText =
                `${this.getDisplayNumber(this.previousEntry)} ${this.operation}`;
        } 
        //otherwise operation has been cleared via 2nd op, all-clear, or equals, therefore clear previous entry.
        else {
            this.previousEntryTextElement.innerText = '';
        }
    }
}

//Button Factory
class Button {
    //ingredient list for each button to be used in render()
    constructor(_id, _type) {
        this.type = _type;
        this.id = _id;
        this.element = "button";
        this.parent = buttonRow;
        this.classes = "";
    }

    //create Button instance on buttonRow with passed id and data-type
    render() {
        const newElement = document.createElement("button");
        newElement.setAttribute(`data-${this.type}`, "");
        newElement.setAttribute("id", `${this.id}`);
        newElement.setAttribute("class", "col-3 rounded border btn-primary text-center");
        newElement.textContent = this.id;
        buttonRow.appendChild(newElement);
    }
}

// //Build Row/Col Framework dynamically for UI
const main = document.getElementById("app");
const headerRow = generateElement("div", "headerRow", "row", main);
const outputRow = generateElement("div", "outputRow", "row", main);
generateElement("div", "prevEntry", "col-12 bg-dark text-white text-right border-bottom", outputRow);
document.getElementById("prevEntry").setAttribute("data-previous-Entry", "");
document.getElementById("prevEntry").textContent = "";
generateElement("div", "currEntry", "col-12 bg-dark text-white text-right border-bottom", outputRow);
document.getElementById("currEntry").setAttribute("data-current-Entry", "");
document.getElementById("currEntry").textContent = "";
const buttonRow = generateElement("div", "buttonRow", "row", main);

//button values to be passed to Button Factory
let buttonNames = [
    { id: "C", type: "all-Clear" },
    { id: "DEL", type: "delete" },
    { id: "3.14", type: "number" },
    { id: "^2", type: "operation" },
    { id: "7", type: "number" },
    { id: "8", type: "number" },
    { id: "9", type: "number" },
    { id: "/", type: "operation" },
    { id: "4", type: "number" },
    { id: "5", type: "number" },
    { id: "6", type: "number" },
    { id: "*", type: "operation" },
    { id: "1", type: "number" },
    { id: "2", type: "number" },
    { id: "3", type: "number" },
    { id: "-", type: "operation" },
    { id: "0", type: "number" },
    { id: ".", type: "number" },
    { id: "=", type: "equals" },
    { id: "+", type: "operation" }
];

//loop to activate, store, and render Button objects
for (let i = 0; i < buttonNames.length; i++) {
    let newButton = new Button(buttonNames[i].id, buttonNames[i].type);
    newButton.render();
}

/*storing buttons in memory, seperated by type so that each common 
set can have the appropriate functions added to their click listeners*/
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousEntryTextElement = document.querySelector('[data-previous-Entry]');
const currentEntryTextElement = document.querySelector('[data-current-Entry]');


//creating the instance of calculator
const calculator = new Calculator(previousEntryTextElement, currentEntryTextElement);

//creating and applying click listener for each button type
//each click listener calls methods defined in the Calculator Class

//forEach loops through all elements of that type and applies the listener
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

//forEach loops through all elements of that type and applies the listener
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

//only one button of equals type, so no looping necessary
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

//only one button of clear type, so no looping necessary
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

//only one button of delete type, so no looping necessary
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})



//create, store, and populate elements for row and cols
function generateElement(element, id, classes, parent) {
    let newElement = document.createElement(element);
    newElement.setAttribute("class", classes);
    newElement.setAttribute("id", id);
    parent.appendChild(newElement);
    return newElement;
}



