let currentNumber = '';
let previousNumber = '';
let operation = null;

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    document.getElementById('display').textContent = '0';
}

function addToDisplay(digit) {
    if (currentNumber === '' && digit === '0') {
        // Zapobieganie wpisywania wiodących zer
        return;
    }
    currentNumber += digit; // Dodaje cyfrę do aktualnej liczby
    document.getElementById('display').textContent = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '') return; // Ignoruje, jeśli nie ma liczby
    if (previousNumber !== '' && operation) {
        calculate(); // Wykonaj obliczenie, jeśli jest to kolejna operacja
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) {
        clearDisplay();
        return;
    }
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current !== 0) {
                result = prev / current;
            } else {
                document.getElementById('display').textContent = 'Nie można dzielić przez zero';
                return;
            }
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    document.getElementById('display').textContent = result;
}
