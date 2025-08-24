// add money feature
const validPin = 1234

document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value

    const amount = parseInt(document.getElementById("add-amount").value)

    const pin = document.getElementById("add-pin").value

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(accountNumber.length < 11){
        alert("please provide valid account number")
        return;
    }

    if(pin !== validPin.toString()){
        alert("please provide valid pin number")
        return;
    }


    const totalNewAvailableBalance = amount + availableBalance

    document.getElementById("available-balance").innerText = totalNewAvailableBalance

    
})

// cashout money feature

document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()

    const amount = parseInt(document.getElementById("withdraw-amount").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    const totalNewAvailableBalance = availableBalance - amount
    
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
})






//  toggling feature

document.getElementById("add-button").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cashout-button").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})