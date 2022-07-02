const form = document.querySelector('.quiz-form')
const finalResultContainer = document.querySelector('.final-result-container')

const correctAnswers = ['A', 'B', 'B', 'C']

let score = 0

const getUserAnswers = () => {
  
  let userAnswers = []

  correctAnswers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })

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

form.addEventListener('submit', event => {
  event.preventDefault()
  
  score = 0
  
  const userAnswers = getUserAnswers()

  calculateResult(userAnswers)
  showFinalResult()
  animateFinalResult()
})