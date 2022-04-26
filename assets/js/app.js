const form = document.querySelector('.quiz-form')
const intro = document.querySelector('.intro')

const h2 = document.createElement('h2')

const correctAnswers = ['A', 'B', 'B', 'C']

const showAnswersIntoQuiz = event => {
  event.preventDefault()

  let points = 0

  const userAnswers = [
    event.target.inputQuestion1.value,
    event.target.inputQuestion2.value,
    event.target.inputQuestion3.value,
    event.target.inputQuestion4.value
  ]

  const findCorrectAnswers = (userAnswer, index) => {
    const isCorrectAnswer = userAnswer === correctAnswers[index]

    if (isCorrectAnswer) {
      points += 25
    }
  }
  const showFinalScore = () => {
    h2.textContent = `Seu score final foi de ${points}%`
    h2.classList.add('text-center', 'display-3', 'my-4',)
    intro.insertAdjacentElement('afterend', h2)
    scrollTo(0, 0)
  }

  userAnswers.forEach(findCorrectAnswers)
  showFinalScore()
}

form.addEventListener('submit', showAnswersIntoQuiz)