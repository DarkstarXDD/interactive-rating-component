const errorElem = document.querySelector(".error-div")
const resultElem = document.querySelector(".result-span")
const welcomeScreen = document.querySelector(".card--welcome")
const thankYouScreen = document.querySelector(".card--thankyou")
const errorMessage = "Please select a rating"
let rating

document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const rating = formData.get("rating")

  if (!rating) {
    errorElem.classList.remove("visually-hidden")
    errorElem.innerHTML = `<p>${errorMessage}</P`
  } else {
    welcomeScreen.classList.add("card--hidden")
    thankYouScreen.classList.remove("card--hidden")
    resultElem.innerHTML = rating
  }
})
