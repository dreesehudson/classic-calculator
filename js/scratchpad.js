//class Declarations
class Model {
    constructor(){

    }
}

class View {
    constructor(){

    }
}

class Controller {
    constructor(){

    }
}

class Button {
    constructor(tempId) {
        this.id = tempId;
        this.element = "button";
        this.parent = buttonRow;
        this.classes = "text-white";
    }    

    init() {
        //create button element
        const newElement = document.createElement("button");
        //naming the button based on its passed in perameter.
        newElement.setAttribute("id", this.id);
        //apply default classes for each tile and its custom borders defined in array parameter
        newElement.setAttribute("class", "col-3 border btn-primary text-center");
        //add text Content
        newElement.textContent = this.id;
        //adding button to the front-end
        buttonRow.appendChild(newElement);
    }    
    //Controller
    sendValue(){
        //send id to controller to interpret what to do.
    }
}    

//Main Calculator

//Model
//store value(s) of numeral button press(es)
let buttonNames = [ "C", "Tax", "Tip", "pi",
                    "7", "8", "9", "/",
                    "4", "5", "6", "*",
                    "1", "2", "3", "-",
                    "0", ".", "=", "+"]
let currentInput = [];
let accumulatedResult = [];
let currResult = 0;
    
for (let i = 0; i < buttonNames.length; i++) {
    const newButton = new Button(buttonNames[i]);
    newButton.init();

}

//View
function init() {
    const main = document.getElementById("app");
    const body = document.querySelector("body");
    body.setAttribute("class", "d-flex justify-content-center")

    //generate calculator UI
    //     [display         ]
    //     [Tax][Tip][pi] [/]
    //     [7]  [8]  [9]  [*]
    //     [4]  [5]  [6]  [-]
    //     [1]  [2]  [3]  [+]
    //     [C]  [0]  [.]  [=]  

    const headerRow = generateElement("div", "headerRow", "row", main);
    const displayRow = generateElement("div", "displayRow", "row", main);
    const currValueCol = generateElement("div", "currValueCol", "col-4 pr-0 py-1 bg-secondary", displayRow);
    const currValueField = generateElement("p", "currValueField", "text-white text-center my-2", currValueCol);
    currValueField.textContent = "";
    const displayCol = generateElement("div", "displayCol", "col-8 pl-0 py-1 bg-dark", displayRow);
    const displayField = generateElement("p", "displayField", "text-white text-right my-2", displayCol);
    displayField.textContent = "";

    const buttonRow = generateElement("div", "buttonRow", "row", main);

    
}
//Controller
    //receive numeral button controller cmd, tell model to update expression 
    //receive operator button controller cmd, tell model to update expression
    //receive equal button controller cmd, tell model to concat expression and evaluate into current value
    //receive clear button controller cmd, tell model to clear current expression if current expression empty clear current value too.
    //calculator model updates, tell display to update expression, current input and current result

//Display Window <- Not a class, only one instance
    //Model
        //store current expression
        //store current output
    //View
        // 2 atoms, accumulated value and current input
        // accumulated value updates on operator press, cleared with 2 consecutive clear operators
        // main display is updated with number input, equal operator, and clear operator
    //Controller
        //receive values from buttons
        //1. sends values to Model
        //2. receive updated expression array and accumulated value from Model
        //3. instruct display View to update



//create div for row and cols
function generateElement(element, id, classes, parent = false, eventListener = false) {
    let newElement = document.createElement(element);
    newElement.setAttribute("class", classes);
    newElement.setAttribute("id", id);
    if (eventListener) {
        //make event listener, if present
        newElement.addEventListener(eventListener)
    }    
    if (parent) {
        //add element to parent, if present
        parent.appendChild(newElement);
    }    
    return newElement;
}    

