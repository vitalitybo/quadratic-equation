module.exports = function solveEquation(equation) {
  let eqInArray = equation.split(" ");
  let result = [];

  if (~eqInArray[0].indexOf("-")) {
    var a = 0 - (+eqInArray[0].slice(1));
  } else {
    var a = +eqInArray[0];
  }

  if (~eqInArray[3].indexOf("-")) {
    var b = 0 - (+eqInArray[4]);
  } else {
    var b = +eqInArray[4];
  }

  if (~eqInArray[7].indexOf("-")) {
    var c = 0 - (+eqInArray[8]);
  } else {
    var c = +eqInArray[8];
  }
 
  result.push( Math.round((-b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));
  result.push( Math.round((-b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));

  if (result[1] < result[0]) {
    result.sort((right, left) => right - left);
  }

  return result;
}
