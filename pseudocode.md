## Pseudocode

### Model
    store value(s) of numeral button press(es)

### View
    header (display)
    # pad, decimal
    operators (+, -, *, /, =)
    clear button

    [display] [=]
    [1][2][3] [+]
    [4][5][6] [-]
    [7][8][9] [*]
    [0][.][c] [/]  

    createElement(display)
    for loop to generate numeral buttons
    [?] to create operator buttons

### Controller
    on numeral button press, update view with number
    on operator button press, update view with symbol
    on equal button press, run equation in model
    on clear button press, update view, clearing display of last entry

## Value Buttons (common)
    Controller: sends button value to button model
    View: display button value
    Model: store button value

### Numerals
    Model: know its own value
    View: display own value
    Controller: send value to model
    
### Operators
    Model: know its own value
    View: display own value
    Controller: send value to model


## Non-value Buttons

### Equals
    View: display '=' symbol
    Controller: send request to main calc. model to do math

### Clear
    View: display 'c'
    Controller: send request to main calc. to erase last existing expression
        ### Hard Clear
            View: display 'c'
            Controller: send request to main calc. to erase all existing expressions



## Display Window

### Model
    store current expression
    store current output

## View
    default: show '0'
    state0: input from button presses
    state1: result from math function

## Controller
    receive values from buttons
    sends values to Model
        receive update from Model
            instruct View to update
    tell view when to switch from 'current expression' to 'current output'



## Main Calculator

### Model
    store current expression
    store current output

### View
    generate main UI
    switch inputs from values to strings 


### Controller