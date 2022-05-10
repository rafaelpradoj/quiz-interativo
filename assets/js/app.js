const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['A', 'B', 'B', 'C']

const showScore = event => {
  event.preventDefault()

  let score = 0
  const userAnswers = [
    event.target.inputQuestion1.value,
    event.target.inputQuestion2.value,
    event.target.inputQuestion3.value,
    event.target.inputQuestion4.value
  ]

  const checkCorrectAnswers = (userAnswer, index) => {
    const isCorrectAnswer = userAnswer === correctAnswers[index]

    if (isCorrectAnswer) {
      score += 25
    }
  }

  userAnswers.forEach(checkCorrectAnswers)

  scrollTo(0, 0)

  finalResult.classList.remove('d-none')

  let counter = 0

  const calculateFinalScore = () => {
    const isFinalScore = counter === score
    const span = finalResult.querySelector('span')

    if (isFinalScore) {
      clearInterval(timer)
    }

    span.textContent = `${counter}%`
    counter++
  }
  
  const timer = setInterval(calculateFinalScore, 10)
}

form.addEventListener('submit', showScore)