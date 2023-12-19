const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1907", "1925", "1915"],
        correctAnswer: "1912"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Pablo Picasso", "Vincent van Gogh"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Osaka", "Kyoto", "Seoul"],
        correctAnswer: "Tokyo"
    }
];


let currentQuestion = 0;
let score = 0;

const progressBar = document.getElementById('progress-bar');
const progressBarContainer = document.getElementById('progress-bar-container');

function updateProgressBar() {
    const progress = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

function displayQuestion() {
    const currentQuizQuestion = questions[currentQuestion];
    questionElement.textContent = currentQuizQuestion.question;

    optionsElement.innerHTML = '';
    for (const option of currentQuizQuestion.options) {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    }
}

function checkAnswer(selectedOption) {
    const currentQuizQuestion = questions[currentQuestion];
    const correctAnswer = currentQuizQuestion.correctAnswer;

    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
        score++;
    } else {
        feedbackElement.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        feedbackElement.style.color = 'red';
    }

    document.getElementById('score').textContent = `Score: ${score}`;    
}

function nextQuestion() {
    feedbackElement.textContent = '';
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
        updateProgressBar();
    } else {
        alert(`Quiz completed. Your final score is: ${score}`);
    }
}

document.getElementById('submit-button').addEventListener('click', nextQuestion);

displayQuestion();
updateProgressBar();