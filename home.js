const validPin = 1234

// function to get input values

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}
function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// function to get innerText
function getInnerText (id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

// function to set innerText

function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}

// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

// add money feature

document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    const bank = getInputValue("bank")
    const accountNumber = document.getElementById("account-number").value

    const amount = getInputValueNumber("add-amount")

    const pin = getInputValueNumber("add-pin")

    const availableBalance = getInnerText("available-balance")

    if(accountNumber.length < 11){
        alert("please provide valid account number")
        return;
    }

    if(pin !== validPin){
        alert("please provide valid pin number")
        return;
    }


    const totalNewAvailableBalance = amount + availableBalance


    setInnerText(totalNewAvailableBalance)

    
})

// cash out money feature

document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()

    const amount = getInputValueNumber("withdraw-amount")

    const availableBalance = getInnerText("available-balance")

    const totalNewAvailableBalance = availableBalance - amount
    
setInnerText(totalNewAvailableBalance)
})






//  toggling feature

document.getElementById("add-button").addEventListener("click", function(){

    handleToggle("add-money-parent")
    // const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //     form.style.display = "none"
    // }

    // document.getElementById("add-money-parent").style.display = "block"

    // document.getElementById("add-money-parent").style.display = "block"
    // document.getElementById("cash-out-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "none"
})
document.getElementById("cashout-button").addEventListener("click", function(){
    // const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //     form.style.display = "none"
    // }

    // document.getElementById("cash-out-parent").style.display = "block"
    handleToggle("cash-out-parent")

    // document.getElementById("cash-out-parent").style.display = "block"
    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "none"
})
document.getElementById("transfer-button").addEventListener("click", function(){
    handleToggle("transfer-money-parent")
    // const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //     form.style.display = "none"
    // }

    // document.getElementById("transfer-money-parent").style.display = "block"

    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("cash-out-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "block"
})
document.getElementById("bonus-button").addEventListener("click", function(){
    handleToggle("get-bonus-parent")
    // const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //     form.style.display = "none"
    // }

    // document.getElementById("get-bonus-parent").style.display = "block"

})