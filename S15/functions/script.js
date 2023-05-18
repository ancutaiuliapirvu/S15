// Sintaxa 1 - clasica
// Declararea functiei:
function sum (number1, number2) {
    var result = number1 + number2;
    return result;
  }
  // Apelarea:
  var calcul = sum(2, 3);
  console.log(calcul);
  
  // Functie anonima => functie fara nume. Cum o apelam? O punem intr-o variabila, deci numele functiei va fi numele functiei.
  
  // Sintaxa 2 - function expression
  // Declararea functiei:
  var sumExpression = function (number1, number2) {
    var result = number1 + number2;
    return result;
  }
  // Apelarea (la fel ca la sintaxa 1):
  var calcul = sumExpression(2, 3);
  console.log(calcul);
  
  // Sintaxa 3 - arrow function
  // Declararea functiei: varianta extinsa
  var sumArrow = (number1, number2) => {
    var result = number1 + number2;
    return result;
  }
  // Declararea functiei: varianta prescurtata
  var sumArrow = (number1, number2) => number1 + number2;
  // Apelarea (la fel ca la sintaxa 1):
  var calcul = sumArrow(2, 3);
  console.log(calcul);