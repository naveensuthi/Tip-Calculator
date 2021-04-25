const bill = document.getElementById("Bill");
const numOfPeople = document.getElementById("Peopleamount");
const result = document.getElementById("Result");

let serviceQual = document.getElementById("ServiceQual");

console.log(bill, numOfPeople, result, serviceQual);

result.style.display = "none";

const calculator = document.getElementById("Calculate");
// console.log(calculator);

calculator.addEventListener("click", calculateTip);

// Calculate Tip

function calculateTip() {
  if (bill.value === "" || serviceQual.value === 0) {
    alert("Please enter a value ");
    return;
  }
  if (numOfPeople.value === "" || numOfPeople.value <= 1) {
    numOfPeople.value = 1;
    result.style.display = "none";
  } else {
    result.style.display = "block";
  }
  //   console.log(typeof serviceQual.value);
  let totalTip = parseInt(bill.value) * serviceQual.value;
  console.log(typeof totalTip);
  let perBill = parseInt(bill.value) / parseInt(numOfPeople.value);
  console.log(typeof perBill);

  let divTip = totalTip / numOfPeople.value;
  console.log(divTip);
  let totalBill = totalTip + parseInt(bill.value);
  let totPerBill = perBill + divTip;
  console.log(totPerBill);

  document.getElementById("Result").style.display = "block";
  document.getElementById("Tip").innerText = "$" + totalTip;
  document.getElementById("Total_Bill_Tip").innerText = "$" + totalBill;
  document.getElementById("Div_Tip").innerText = "$" + divTip.toFixed(2);
  document.getElementById("Div_Tip-Person").innerText =
    "$" + totPerBill.toFixed(2);
}
