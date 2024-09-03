const errorElem = document.querySelector(".error-div")
const resultElem = document.querySelector(".result")
const welcomeScreen = document.querySelector(".card--primary")
const thankScreen = document.querySelector(".card--secondary")
let rating

function isRadioSelected() {
  const radioButtons = document.getElementsByName("rating")
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      rating = radioButtons[i].value
      return true
    }
  }
  return false
}

document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault()
  if (!isRadioSelected()) {
    errorElem.classList.remove("visually-hidden")
    errorElem.innerHTML = "<p>Please select a rating</p>"
  } else {
    welcomeScreen.classList.add("card--hidden")
    thankScreen.classList.remove("card--hidden")
    resultElem.innerHTML = `You selected ${rating} out of 5`
  }
})
