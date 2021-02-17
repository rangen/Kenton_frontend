let questions = {};
let currentQuestion;
let numTries = numCorrect = 0;

document.getElementById('show-ques').addEventListener('click', () => {
    fetch('http://localhost:3000/api/v1/questions')
        .then(res=>res.json())
        .then(json => questions = json)
        .then(()=> enableUI())
        .then(()=> nextQuestion());
});

document.getElementById('get-new-questions').addEventListener('click', () => {
    fetch('http://localhost:3000/api/v1/new_questions')
        .then(res=>res.json())
        .then(json=> questions = json)
        .then(()=> enableUI())
        .then(()=> nextQuestion())
});

["a", "b", "c", "d"].forEach(id=>{
    document.getElementById(id).addEventListener('click', ()=> {
        handleClick(id);
    })
})

function enableUI(enable=true) {
    const goButton = document.getElementById('hidden-div');
    const welcome = document.getElementById('welcome-container');
    const questions = document.getElementById('question-container');
    const getNewButton = document.getElementById('get-new-questions');

    goButton.style.display = enable ? "none" : "block";
    welcome.style.display = enable ? "none" : "block";
    questions.style.display = enable ? "block" : "none";
    getNewButton.style.display = enable ? "none" : "inline";
}

function nextQuestion() {
    if (currentQuestion == undefined) {
        currentQuestion = 0;
    } else {
        currentQuestion++;
    }

    if (currentQuestion > questions.length - 1) {
        enableUI(false);
        alert(`Thanks for playing!\n\nYour Score: ${(numCorrect / numTries * 100).toFixed(1)}%`);
        numTries = numCorrect = 0;
        currentQuestion = undefined;
        setScore({clearScore: true});
        return;
    }

    const questionContainer = document.getElementById('question-text');
    questionContainer.innerText = questions[currentQuestion].question;
    
    const answers = JSON.parse(questions[currentQuestion].incorrect_answer);
    const answerElementIDs = ["a", "b", "c", "d"];
    const answersElements = answerElementIDs.map(id=>document.getElementById(id));
    const randomPlace = Math.floor((Math.random() * 3));
    answers.splice(randomPlace, 0, questions[currentQuestion].correct_anwser);

    answersElements.forEach((ele, index)=>{
        ele.innerText = answers[index];
    })

}

function handleClick(choice) {
    numTries++;
    const chosenAnswer = document.getElementById(choice).innerText;
    const correct = chosenAnswer === questions[currentQuestion].correct_anwser;
    if (correct) {
        numCorrect++;
        setScore();    
        nextQuestion();
    } else {
        setScore();
    }
}

function setScore(options = {}) {
    const scoreElement = document.getElementById('score-output');
    if (options.clearScore) {
        scoreElement.innerText = "";
    } else {    
        scoreElement.innerText = (numCorrect / numTries * 100).toFixed(1) + '% Score'
    }
}