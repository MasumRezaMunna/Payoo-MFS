const validPin = 1234;
const transactionData = [];

// function to get input values

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get innerText
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// function to set innerText

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// function to toggle
function toggleForm(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to toggle buttons

function toggleButton(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money feature

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount");

    if(amount <= 0){
        alert("invaild amound")
        return;
    }

    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("please provide valid pin number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    console.log(transactionData);
  });

// cash out money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  if(amount <= 0 || amount > availableBalance){
    alert("invalid amount")
    return;
  }

  const totalNewAvailableBalance = availableBalance - amount;

  setInnerText(totalNewAvailableBalance);

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
  console.log(transactionData);
});

document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container");
    transactionContainer.innerText = ""

    for (const data of transactionData) {
      const div = document.createElement("div")
      div.innerHTML =
        `
            <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#f4f5f7]">
                        <img class="mx-auto" src="./assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-3">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>

            </div>

        `

        transactionContainer.appendChild(div)
    }
  });

//  toggling feature

document.getElementById("add-button").addEventListener("click", function () {
  toggleForm("add-money-parent");
  toggleButton("add-button");

  // const formBtns = document.getElementsByClassName("form-btn")

  // for(const btn of formBtns){
  //     btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
  //     btn.classList.add("border-gray-300")
  // }

  // document.getElementById("add-button").classList.remove("border-gray-300")
  // document.getElementById("add-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")

  // const forms = document.getElementsByClassName("form")

  // for(const form of forms){
  //     form.style.display = "none"
  // }

  // document.getElementById("add-money-parent").style.display = "block"

  // document.getElementById("add-money-parent").style.display = "block"
  // document.getElementById("cash-out-parent").style.display = "none"
  // document.getElementById("transfer-money-parent").style.display = "none"
});
document
  .getElementById("cashout-button")
  .addEventListener("click", function () {
    // const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //     form.style.display = "none"
    // }

    // document.getElementById("cash-out-parent").style.display = "block"
    toggleForm("cash-out-parent");
    toggleButton("cashout-button");

    //  const formBtns = document.getElementsByClassName("form-btn")

    // for(const btn of formBtns){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
    //     btn.classList.add("border-gray-300")
    // }

    // document.getElementById("cashout-button").classList.remove("border-gray-300")
    // document.getElementById("cashout-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")

    // document.getElementById("cash-out-parent").style.display = "block"
    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "none"
  });
document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    toggleForm("transfer-money-parent");
    toggleButton("transfer-button");

    //  const formBtns = document.getElementsByClassName("form-btn")

    // for(const btn of formBtns){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
    //     btn.classList.add("border-gray-300")
    // }

    // document.getElementById("transfer-button").classList.remove("border-gray-300")
    // document.getElementById("transfer-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")

    // const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //     form.style.display = "none"
    // }

    // document.getElementById("transfer-money-parent").style.display = "block"

    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("cash-out-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "block"
  });
document.getElementById("bonus-button").addEventListener("click", function () {
  toggleForm("get-bonus-parent");
  toggleButton("bonus-button");

  // const formBtns = document.getElementsByClassName("form-btn")

  // for(const btn of formBtns){
  //     btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
  //     btn.classList.add("border-gray-300")
  // }

  // document.getElementById("bonus-button").classList.remove("border-gray-300")
  // document.getElementById("bonus-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")

  // const forms = document.getElementsByClassName("form")

  // for(const form of forms){
  //     form.style.display = "none"
  // }

  // document.getElementById("get-bonus-parent").style.display = "block"
});

document.getElementById("bill-button").addEventListener("click", function () {
  toggleForm("pay-bill-parent");
  toggleButton("bill-button");
});
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    toggleForm("transaction-parent");
    toggleButton("transaction-button");
  });
