let currentResult = 0;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function writeToLog( operationIdentifier,prevResult,operationNumber,newResult){
    const logEntry={
        operation: operationIdentifier,
        prevResult:prevResult,
        number : operationNumber,
        result : newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD",initialResult,enteredNumber,currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT",initialResult,enteredNumber,currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY",initialResult,enteredNumber,currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE",initialResult,enteredNumber,currentResult);
}

function createAndWriteOutput(operator,initialResult,enteredNumber) {
    outputResult(currentResult,`${initialResult} ${operator} ${enteredNumber}`);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);