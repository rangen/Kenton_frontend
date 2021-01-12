
const quesButton = document.getElementById("show-ques");
const baseUrl = "http://localhost:3000/api/v1/questions";
const choiceArray = Array.from(document.getElementsByClassName("choice-text"));
let availableOptions = [];
let currentQuestion = {};
let questionCounter = 0;
let correctCount = 0;


quesButton.addEventListener("click",function(e){
  getQuestions(++questionCounter);
});



function getQuestions(id){
  fetch(`http://localhost:3000/api/v1/questions/${id}`)
  .then(res => res.json())
  .then(question =>{
    console.log(question);
    renderCurrentQuestion(question);
  });
}



function renderCurrentQuestion(question) {
    let innerQuestion = document.getElementById("question-text").innerText = question.question;
    // produces the string question

    const incorrectOptions = question.incorrect_answer.replace(/]|"|"|/g,"").substring(1).split(',');
    // produces an array of incorrect answers
    // console.log(incorrectOptions)
    let correctAnswer = question.correct_anwser;
    // displays the right choice

    let answerSpace = Math.floor(Math.random() * 3) + 1;
    // returns a random integer between 0 -> 4

    let currentScore = ((correctCount/questionCounter) * 100).toFixed(1);
    // setting player's current score to  a percent

    // formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
    // answerChoices.splice(formattedQuestion.answer - 1,0,loadedQuestion.correct_answer);
    //
    // const questionIndex = Math.floor(Math.random() * availableQuesions.length);
       //   let currentQuestion = innerQuestion
       // console.log(currentQuestion)
       // const questionIndex = Math.floor(Math.random() * availableQuesions.length);

    const optionsArray = incorrectOptions.splice(answerSpace -1,0,correctAnswer);
    // randomizing choice selections


    incorrectOptions.forEach((choice,index) => {
      question ['choice' + (index +1)] = choice;
    });
    // iterating throughout the options

    console.log(incorrectOptions)

    choiceArray.forEach(choice =>{
      const number = choice.dataset['number']
      choice.innerText = question['choice' + number]
    });
    // iterating throughout the choice selection

    // const optionsArray = [correctAnswer, ...incorrectOptions];
    // array of answer choices

    // const optionA = document.getElementById("a");
    // // gets the answer selection
    // optionA.innerText = optionsArray[0];
    // // sets the answer selection
    // const optionB = document.getElementById("b");
    // optionB.innerText = optionsArray[1];
    // const optionC = document.getElementById("c");
    // optionC.innerText = optionsArray[2];
    // const optionD = document.getElementById("d");
    // optionD.innerText = optionsArray[3];

    //
    // let randomOptions = incorrectOptions.slice(answerSpace -1,0,correctAnswer);
    // return randomOptions
    //
    // const answerChoices = [...loadedQuestion.incorrect_answers];
    //
    // answerChoices.splice(formattedQuestion.answer - 1,0,loadedQuestion.correct_answer);
    //         answerChoices.forEach((choice, index) => {
    //             formattedQuestion['choice' + (index + 1)] = choice;
    //         });


    // const questionIndex = Math.floor(Math.random() * availableOptions.length);
    // currentQuestion = availableOptions[questionIndex];
    // console.log(currentQuestion)
    // question.innerText = question.question;



    // choiceArray.forEach((choice) => {
    //     const number = choice.dataset['number'];
    //     choice.innerText = currentQuestion['choice' + number];
    // });
    //
    //  availableQuesions.splice(questionIndex, 1);

    // const choiceArray = Array.from(document.getElementsByClassName("choice-container"));

  	choiceArray.forEach((choice) => {
		 choice.addEventListener("click",function(e){
       console.log(e.target)
		    if(e.target.innerText == correctAnswer){
                console.log("sup");
                correctCount++;
                document.getElementById("score-output").innerText = `Here's your new score player ${currentScore} `+"%" ;


        }
        else{
            console.log("wrong");
            document.getElementById("score-output").innerText = `Bye hater ${currentScore}`+"%";


        }
 		   });
     });
};




// fetch request with
// // updating a current question
list = [];

const data = { quiz: 'example' };

fetch(`http://localhost:3000/api/v1/questions/${id}`/post, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({question:
    "correct_anwser": "6",
     "incorrect_answer": "[\"5\", \"3\", \"4\"]",
     "question": "How many NBA championship rings did Michael Jordan have?",
     })
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

//
// // fetch request with delete
// // removing a question
// fetch('https://example.com/profile', {
//   method: 'delete', // or 'PUT'
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
// //  I need 2 other AJAX requests
// PUT and Delete!!
