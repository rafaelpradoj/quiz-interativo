const form = document.querySelector('.quiz-form')
const finalResultContainer = document.querySelector('.final-result-container')

const correctAnswers = ['A', 'B', 'B', 'C']

let score = 0

const getUserAnswers = () => {
  const userAnswers = correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value)

  return userAnswers
}
const calculateResult = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = correctAnswers[index] === userAnswer

    if (isUserAnswerCorrect) {
      score += 25
    }
  })
}
const showFinalResult = () => {
  finalResultContainer.classList.remove('d-none')
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
const animateFinalResult = () => {
  let counter = 0

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    finalResultContainer.querySelector('span').textContent = `${counter++}%`
  }, 10)
}
const resetScore = () => {
  score = 0
}

form.addEventListener('submit', event => {
  event.preventDefault()
  const userAnswers = getUserAnswers()

  resetScore()
  calculateResult(userAnswers)
  showFinalResult()
  animateFinalResult()
})