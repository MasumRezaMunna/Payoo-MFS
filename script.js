// login button functionallity
document.getElementById("loginButton").addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber = 01763474359
    const pinNumber = 1234
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)
    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    console.log(mobileNumberValueConverted, pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        // console.log('all values matched')
        window.location.href="./main.html"
    }else{
        // console.log('invalid credentials')
        alert("Invalid credentials")
    }

})