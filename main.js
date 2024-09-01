document.querySelector(".card__form").addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("Submit Clicked")
})

const ratingRadioButtons = document.getElementsByName("rating")
const resultTextElem = document.querySelector(".card__result")
let isRadioSelected = false

for (let i = 0; i < ratingRadioButtons.length; i++) {
  if (ratingRadioButtons[i].checked) {
    isRadioSelected = true
  }
}

console.log(isRadioSelected)

const searchParamsObj = new URLSearchParams(window.location.search)
const rating = searchParamsObj.get("rating")

const resultText = `You selected ${rating} out of 5`
if (resultTextElem) {
  resultTextElem.innerHTML = resultText
}
