const emailInputTag = document.getElementById("emailInput");
const errorMsgTag = document.querySelector(".errorMsg");

emailInputTag.addEventListener("keyup", (event) => {
    const value = event.target.value;
    console.log(value);
    if (!value.includes("@")) {
        emailInputTag.style.outlineColor = "hsl(354, 100%, 66%)"
        errorMsgTag.classList.add("errorState");
    } else {
        emailInputTag.style.outlineColor = "hsl(0, 0%, 59%)"
        errorMsgTag.classList.remove("errorState")
    }
})