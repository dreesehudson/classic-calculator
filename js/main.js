//class Declarations

class Button {
    //Model
    constructor(){

    }
    //View
    
    //Controller
    
}    

class Number extends Button {
    //Model
    constructor(){
        super(Button);
        //numerical value for button
        //this.value = value;
    }    
    
    //View
        //display the value on this button
    
    //Controller    
        //onclick send value to calculator display and calculator model
            
}        

class Operator extends Button {
    //Model
    constructor(op){
        super(Button);
        //mathmatical operator for this button
        this.op = op;
    }    
    
    //View
        //display operator on this button
    
    //Controller    
        //onclick send value to calculator display and calculator model

}        

class Equal extends Button {
    //Model: 
    constructor(){
        super(Button);
    }

    //View: 
        //display '=' symbol
    
    //Controller: 
        //tell main calc. model to concat expression and execute math
}
    
class Clear extends Button{
    //Model:
    constructor(){
        super(Button);
    }
    
    //View: 
        //display 'C'
    
    //Controller: 
        //send request to main calc. to erase last existing expression
        
        //Methods:
        //Hard Clear: send request to main calc. to erase all existing expressions

}
    
//create div for row and cols
function generateElement(type, id, classes, parent = false, eventListener = false) {
    let newElement = document.createElement(type);
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

//Main Calculator

    //Model
        //store value(s) of numeral button press(es)
    let expression = [];
    let currResult = 0;
        //concat and reduce expression down to currResult, 
        //then on operation press make this value the first value in expression array

    //View
    function init(){
        const main = document.getElementById("app");
        
        //generate calculator UI
        //     [display         ]
        //     [Tax][Tip][pi] [/]
        //     [7]  [8]  [9]  [*]
        //     [4]  [5]  [6]  [-]
        //     [1]  [2]  [3]  [+]
        //     [C]  [0]  [.]  [=]  
        
        //header (display)
        const displayRow = generateElement("div", "displayRow", "row", main);
        const currValueCol = generateElement("div", "currValueCol", "col-4 pr-0 py-1 bg-secondary", displayRow);
        const currValueField = generateElement("p", "currValueField", "text-white text-center my-2", currValueCol);
        currValueField.textContent = "";
        const displayCol = generateElement("div", "displayCol", "col-8 pl-0 py-1 bg-dark", displayRow);
        const displayField = generateElement("p", "displayField", "text-white text-right my-2", displayCol);
        displayField.textContent = "";

        //series of square buttons
            //numerical
            //operators
            //clear button
        let numberButtons = [];
        let numberButtonCount = 10;
        let operatorButtons = [];
        let operatorButtonCount = 8

        const buttonRow = generateElement("div", "buttonRow", "row", main);

        for (let i = 0; i < numberButtonCount; i++){
            numberButtons[i] = new Number;
        }

        for (let i = 0; i < operatorButtonCount; i++){
            operatorButtons[i] = new Operator;
        }

        //for loop to generate series of buttons
            //switch inputs from values to strings 
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

