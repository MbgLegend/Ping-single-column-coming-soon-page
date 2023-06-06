const errorMessage = document.querySelector("div h3")
const emailInput = document.querySelector("div input")
const submitButton = document.querySelector("div button")

function checkEmailAddress() {
    const emailContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailContent.test(emailInput.value);
}

submitButton.addEventListener("click", () => {
    const isValidEmail = checkEmailAddress();
    if (isValidEmail === false) {
        errorMessage.classList.add("error-active")
        emailInput.style.borderColor = "red"

        setTimeout(()=>{
            errorMessage.classList.remove("error-active")
            emailInput.style.borderColor = "hsl(223, 100%, 88%)"
        }, 6000)
    }
})