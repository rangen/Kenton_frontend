
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
  })
  .catch((error) => {

  console.log( "hello", error)
  reDirect()
});
// // }
// Question.getQuestions();
// // calling the get questions class

function reDirect() { 
  console.log("hello")
  // redirecting to function that would render a form and post to the database via fetch request
  // const gameContainer = document.createElement("<div id= 'game-html'  >
  //             <label for='lname'>Username</label>
  //             <input type='text' name='LastName'id='lname' placeholder='enter you name'><br/><br/>
  //             <input type='submit' value='Save' id='save-button'/>
  //             </div>")

const questionContainer =  document.getElementById('question-container').style.visibility = "hidden";
const formDiv = document.getElementById("form-div").style.display = "none"
// const highscoreContainer =  document.getElementById('high-score-container').appendChild(gameContainer);
}
// const myForm = document.getElementById('myForm').style.visibility = 'visible'

// const saveButton = document.getElementById('save-button');
//  So if all the questions have gone through I then want to load the form ?
// How would I load the form after questions have been answered?

function calculateScore(totalCorrect, numQuestions ) {
  return ((correctCount/questionCounter) * 100).toFixed(1);
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

    let currentScore = calculateScore(correctCount, questionCounter)
    // setting player's current score to  a percent

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

  	choiceArray.forEach((choice) => {
		 choice.addEventListener("click",function(e){
       console.log('clicked on an option')
		    if(e.target.innerText == correctAnswer){
                console.log("sup");
                ++correctCount;
                currentScore = calculateScore(correctCount, questionCounter)
                console.log(questionCounter)
                document.getElementById("score-output").innerText = `Here's your new score player ${currentScore} `+"%" ;


        }
        else{
            console.log("wrong");
            document.getElementById("score-output").innerText = `Bye hater ${currentScore}`+"%";


        }
 		   });
     });
};


isEnded = () => {
  // return this.question. === this.questions.length
}
}






//
//
// const configObj = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({question:
//     "correct_anwser": "6",
//      "incorrect_answer": "[\"5\", \"3\", \"4\"]",
//      "question": "How many NBA championship rings does Michael Jordan have?",
//      })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
// }

// fetch request with
// should be added after the end of the game?
// function adds a new question to the database
// newQuestion(){
// fetch(`http://localhost:3000/api/v1/questions/${id}`/post, {
//

// should be added after end of game.
// function deletes question from the database.
// deleteQuestion(){
// // fetch request with delete
// // removing a question
// fetch(`http://localhost:3000/api/v1/questions/${id}`, {
//   method: 'delete', // or 'PUT'
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// // });
// }
// //  I need 2 other AJAX requests
// PUT and Delete!!
