const $ = (id) => document.getElementById(id);
function calcTotal() {
  let itemTotal = 0;
  let taxTotal = 0;
  let totalWithTax = 0;

  let items = document.getElementsByTagName("input");
  let cells = document.getElementsByTagName("td");
  // Adding all 5 games
  for (let i = 0; i < 5; i++) {
    if (items[i].checked) {
      itemTotal += items[i].value * 1;
    }
  }
  // Tax Total
  taxTotal = itemTotal * 0.1;
  totalWithTax = itemTotal + taxTotal;
  cells[1].innerHTML = (itemTotal / 100).toFixed(2);
  // Tax total
  cells[3].innerHTML = (taxTotal / 100).toFixed(2);
  cells[5].innerHTML = "$" + (totalWithTax / 100).toFixed(2);
}

// add event listener to Submit button
let submitButton = $("sButton");
submitButton.addEventListener("click", calcTotal)
// Clear button
let clearButton = $("cButton");
function clear() {
  let cells = document.getElementsByTagName("td");
  cells[1].innerHTML = "$0.00";
  cells[3].innerHTML = "$0.00";
  cells[5].innerHTML = "$0.00";
  let items = document.getElementsByTagName("input");
  for (let i = 0; i < 5; i++) {
    items[i].checked = false
  }
}
clearButton.addEventListener("click", clear);


