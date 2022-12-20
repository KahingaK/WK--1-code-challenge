const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

//const dummyTransactions = [
//    {id:1, text: Food, amount:-3000,}
//   {id:2, text: Debt, amount:500,}
//    {id:3, text: Phone, amount:15000,}
//    {id:4, text: ink, amount:-200,}
//]

//Generates a new array

let transactions = []; //dummyTransactions

//add transactions

function addTransaction(num) {
  num.preventDefault();
  if (text.value.trim() === "" || amount.value.tr === "") {
    alert("Enter Text and Value");
  } else {
    const transaction = { 
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };
    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    text.value = "";
    amount.value = "";
  }
}

//generate id
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");

  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `
     ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
        
        `;
  list.appendChild(item);
}

//update values
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `ksh${total}`;
  moneyPlus.innerText = `ksh${income}`;
  moneyMinus.innerText = `ksh${expense}`;
}

//initialize App
function initialize() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}


initialize();

form.addEventListener("submit", addTransaction);
