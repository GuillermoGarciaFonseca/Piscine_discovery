
  document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstOperand = this.querySelector('input[name="first-operand"]').value;
    var operator = this.querySelector('select[name="operator"]').value;
    var secondOperand = this.querySelector('input[name="second-operand"]').value;
  
    // Validation
    if (parseInt(firstOperand) != firstOperand || parseInt(secondOperand) != secondOperand)
        return display('Perdona lo que ha escrito usted es erroneo :(');
    firstOperand = parseInt(firstOperand);
    secondOperand = parseInt(secondOperand);
    if (firstOperand < 0 || secondOperand < 0)
        return display('Error :(');
    if (['+', '-', '*', '/', '%'].indexOf(operator) === -1)
        return display('Error :(');
    if ((operator === '/' || operator === '%') && secondOperand === 0)
        return display('It’s over 9000!');
  
    // Calculation
    switch (operator) {
        case '+':
            display((firstOperand + secondOperand).toString());
            break;
        case '-':
            display((firstOperand - secondOperand).toString());
            break;
        case '*':
            display((firstOperand * secondOperand).toString());
            break;
        case '/':
            display((firstOperand / secondOperand).toString());
            break;
        case '%':
            display((firstOperand % secondOperand).toString());
            break;
    }
  });
  setInterval(function() {
    alert('Por favor utilizame :(...');
  }, 10000000000000);
  
  
  function display(text) {
    alert(text);
    console.log(text);
    return false;
  }

  
  
  
  
  
  
  