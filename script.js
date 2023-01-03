let bill = document.getElementsByName("bill")[0]
let tip = document.getElementsByName("tip")[0]
let people = document.getElementsByName("people")[0]
let result = document.getElementById("result");

function update(element){
  let Bill = bill.value;
  let Tip = tip.value;
  let People = people.value;

  let tipAmount = Tip / 100 * Bill;
  let totalBill = parseFloat(tipAmount) + parseFloat(Bill);
  let totalPerson = totalBill / People;

  result.innerHTML = `<p>Tip amount ($): ${tipAmount.toFixed(2)}</p>`
  result.innerHTML += `<p>Total Bill with Tip ($): ${totalBill.toFixed(2)}</p>`
  result.innerHTML += `<p>Total per person ($): ${totalPerson.toFixed(2)}</p>`
}

