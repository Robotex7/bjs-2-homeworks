"use strict"
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [-b / (2 * a)];
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let bodyCredit = amount - contribution;
  let payment = bodyCredit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let totalAmount = parseFloat((payment * countMonths).toFixed(2));
  return totalAmount;
}