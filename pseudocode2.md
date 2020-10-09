//class Calculator {
    //ingredient list for calculator

    //onClick type: "hard-clear"
    //clear() {
        //tell UI to clear current display to default value, 
        //clear previous display, 
        //clear current operation
    }
    
    //onClick type: "delete"
    //delete() {
        //undo function, will remove the last entered digit. does not apply to operators
    }

    //onClick type: number (0-9, pi, and .). Passes in value of button clicked
    //appendNumber(number) {
        //kickout if decimal point is already in current Entry.
        //if pi entered, convert from symbol pi to number of pi that compute() can handle
        //then add the passed number to the end of the current entry string.
    }

    //onClick type: operator (+, -, *, /, ^2) pass operator of button clicked
    //chooseOperation(operation) {
        //kickout if no numbers in current entry yet
        //if previous entry has a value, and this is a subsequent operation, do math
        //reassign this local operation so that updateDisplay() can show it in the previous Entry field
        //reassign the current result to empty previous entry (thanks compute())
        //clear current entry so that it can accept new inputs later
    }

    //doing the math
    //compute() {
        //declare local variable to catch what the math outputs
        //convert previousEntry into floating number in order to do math
        //convert currentEntry into floating number in order to do math
        //kickout if somehow previous or current values are non numbers
        //switch to handle all operator types in one function
        //switch (this.operation) {
        //    case '+':
        //    case '-':
        //    case '*':
        //    case '/':
        //    case '^2':
        //    default:
        };
        //give the result back to the currentEntry
        //clear operation when finished using it
        //clear previous entry so that it can accept result later
    }

    //called when UI updatesDisplay()
    //handles odd behavior from switching between strings and numbers and also formats the display numbers
    //getDisplayNumber(number) {
        //convert number to string
        //split string to array at decimal point and store first element as number
        //split string to array at decimal point and store second element as number
        //put humpty dumpty back together again
        //clear display number, if somehow not a number
        //otherwise convert left-of-decimal number to string with comma delimited values
        //if right-of-decimal numbers exist, format final answer with decimal, all as string
        //else return just left-hand side string
    }

    //render new calculations to UI after every button press.
    //updateDisplay() {
        //display currentEntry output from getDisplayNumber() in HTML
        //if operation has been pressed and not yet cleared via secondary operation, all-clear, or equals
        //otherwise operation has been cleared via 2nd op, all-clear, or equals, therefore clear previous entry.
    }
}

//Button Factory
//class Button {
    //ingredient list for each button to be used in render()
    //constructor(_id, _type) {
    //    this.type = _type;
    //    this.id = _id;
    }

    //create Button instance on buttonRow with passed id and data-type
    //render() {
    //    const newElement = document.createElement("button");
    //    newElement.setAttribute(`data-${this.type}`, "");
    //    newElement.setAttribute("id", `${this.id}`);
    //    newElement.setAttribute("class", "col-3 rounded border btn-primary text-center");
    //    newElement.textContent = this.id;
    //    buttonRow.appendChild(newElement);
    }
}

//Build Row/Col Framework dynamically for UI
//get existing main div
//display container
//top half of display, used to display previous entry once operator has been selected
//bottom half of display, used to display current numbers that have been entered, and displays final answer upon equals command
//container for buttons to populate

//create, store, and populate elements for row and cols
//function generateElement(element, id, classes, parent) {
//    let newElement = document.createElement(element);
//    newElement.setAttribute("class", classes);
//    newElement.setAttribute("id", id);
//    parent.appendChild(newElement);
//    return newElement;
}

//button values to be passed to Button Factory
//let buttonNames = [
//    { id: "C", type: "all-Clear" },
//    { id: "DEL", type: "delete" },
//    { id: "π", type: "number" },
//    ...
//    ...
//    ...
//    ...
//    ...
//    { id: ".", type: "number" },
//    { id: "=", type: "equals" },
//    { id: "+", type: "operation" }
];

//loop to activate, store, and render Button objects

/*storing buttons in memory, seperated by type so that each common 
//set can have the appropriate functions added to their click listeners*/
//const numberButtons = document.querySelectorAll('[data-number]');
//const operationButtons = document.querySelectorAll('[data-operation]');
//const equalsButton = document.querySelector('[data-equals]');
//const deleteButton = document.querySelector('[data-delete]');
//const allClearButton = document.querySelector('[data-all-clear]');
//const previousEntryTextElement = document.querySelector('[data-previous-Entry]');
//const currentEntryTextElement = document.querySelector('[data-current-Entry]');


//creating the instance of calculator
//const calculator = new Calculator(previousEntryTextElement, currentEntryTextElement);

//creating and applying click listener for each button type
//each click listener calls methods defined in the Calculator Class

//forEach loops through all elements of that type and applies the listener
//numberButtons event listener loop

//forEach loops through all elements of that type and applies the listener
//operationButtons event listener loop

//only one button of equals type, so no looping necessary
//equals button event listener

//only one button of clear type, so no looping necessary
//allClearButton event listener

//only one button of delete type, so no looping necessary
//deleteButton event listener





