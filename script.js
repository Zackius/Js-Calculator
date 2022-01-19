
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined; 

    }
    delete(){

    }
    appendNumber(number){
       this.currentOperand = number 

    }
    chooseOperation(operatuion) {

    }
    compute(){

    }
    updateDisplay(){
             this.currentOperandTextElement.innerText = this.currentOperand
    }
}




const numberButtons = document.querySelectorAll ('[data-number]');
const operationButton = document.querySelectorAll ('[data-operation]');
const equalsButton = document.querySelectorAll ('[data-eqaul]');
const AllClearButton = document.querySelectorAll ('[data-all-clear]');
const currentOperand = document.querySelectorAll ('[data-cureent-operand]');
const previousOperand = document.querySelectorAll ('[data-previous-operand]');
const equalButton = document.querySelectorAll ('[data-equal]');

 
const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)
 numberButtons.forEach(button => {
     button.addEventListener('click', ()=>{
         calculator.appendNumber(button.innerText)
          calculator.updateDisplay() 
     })
 }); 