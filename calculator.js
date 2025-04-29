function calculate() {
  // Retrieve input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;

  // Check if input values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
    return;
  }

  // Perform calculation based on operator
  var result;

  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
  }
}
