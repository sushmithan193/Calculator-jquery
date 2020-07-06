/*class Calculator{
    constructor( display){
        this.display = display
        this.clear()
    }

    clear(){
    this.display = ''
    this.operation = undefined
    }

    appendNumber(number){
this.currentOperand = number
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand

    }
}

const numberButtons = document.querySelectorAll('[#one]');
const numberButtons = document.querySelectorAll('[#two]');
const numberButtons = document.querySelectorAll('[#three]');
const operationButtons = document.querySelectorAll('[#plus]');
const numberButtons = document.querySelectorAll('[#four]');
const numberButtons = document.querySelectorAll('[#five]');
const numberButtons = document.querySelectorAll('[#six]');
const operationButtons = document.querySelectorAll('[#minus]');
const numberButtons = document.querySelectorAll('[#seven]');
const numberButtons = document.querySelectorAll('[#eight]');
const numberButtons = document.querySelectorAll('[#nine]');
const operationButtons = document.querySelectorAll('[#multiply]');
const numberButtons = document.querySelectorAll('[#zero]');
const numberButtons = document.querySelectorAll('[#open]');
const numberButtons = document.querySelectorAll('[#close]');
const operationButtons = document.querySelectorAll('[#divide]');
const allClearButton = document.querySelectorAll('[#clear]');
const numberButtons = document.querySelectorAll('[#dot]');
const equalsButton = document.querySelectorAll('[#equal]');
const display = document.querySelectorAll('[#display]')

const calculator = new Calculator(display)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})*/