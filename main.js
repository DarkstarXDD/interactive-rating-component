const resultTextElem = document.querySelector(".card__result")

const searchParamsObj = new URLSearchParams(window.location.search)
const rating = searchParamsObj.get("rating")

const resultText = `You selected ${rating} out of 5`
resultTextElem.innerHTML = resultText
