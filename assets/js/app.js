// A função Swal.fire() faz parte da library Sweet Alert. Ao usar essa função, ela exibe um alert estilizado na tela.

const form = document.querySelector('.quiz-form')

//Respostas corretas do quiz
const correctAnswers = ['A', 'B', 'B', 'C']

form.addEventListener('submit', event => {

    event.preventDefault()

    //Variáveis
    let score = 0

    //Questões selecionadas no formulário
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    //Função para encontrar respostas corretas do quiz
    const findCorrectAnswers = (answer, index) => {

        const isCorrectAnswer = answer === correctAnswers[index]

        if (isCorrectAnswer) {

            score += 25
        }
    }

    //Em cada questão vai ser executada a função findCorrectAnswers
    userAnswers.forEach(findCorrectAnswers)

    //Objeto para utilizar dentro da função Swal.fire()
    const lowScore = {
        title: `${score}% de acertos`,
        text: 'Poxa... você precisa praticar mais. Boa sorte na próxima!',
        imageUrl: 'https://e7.pngegg.com/pngimages/346/182/png-clipart-mario-bowser-drawing-mascot-sad-puppy-sadness-cartoon.png',
        imageWidth: 450,
        imageHeight: 250,
        imageAlt: 'Super Mario triste',
    }
    
    //Objeto para utilizar dentro da função Swal.fire()
    const averageScore = {
        title: `${score}% de acertos`,
        text: 'Você está indo bem! Tente novamente para se provar um gamer do século!!!',
        imageUrl: 'https://play-lh.googleusercontent.com/p7rx-TDw8mSXmnN5oreMbOrC6FTumoRsnz8rDxUHL6-7xYtLlzcyj1GS8UKyBx5eJg',
        imageWidth: 450,
        imageHeight: 300,
        imageAlt: 'Super Mario alegre',
    }
    
    //Objeto para utilizar dentro da função Swal.fire()
    const highScore = {
        title: `${score}% de acertos`,
        text: 'Com certeza você é um gamer profissional. Parabéns!!!',
        imageUrl: 'https://www.oficinadanet.com.br/imagens/post/15201/td_mario-bros-625bd5.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Super Mario muito feliz',
    }

    const isLowerRank = score <= 25
    const isIntermediateRank = score > 25 && score <= 75

    if (isLowerRank) {

        Swal.fire(lowScore)
    } else if (isIntermediateRank) {

        Swal.fire(averageScore)
    } else {

        Swal.fire(highScore)
    }
})