// 1. Make a fetch command to the backend to retrieve the json object that
// cotains an array of the Questions.
// using an array from apiSrc
//  url = apiSrc
//
let resultsContainer = document.getElementById('results')
const quesButton = document.querySelector("#show-ques")
const submitButton = document.getElementById('submit-button')

// 
// fetch('url')
// .then(function (resp){
//   return resp.json()
// })
// .then(function(arrayofObjects){console.log(arrayofObjects)})

quesButton.addEventListener("click",function(e){



fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
.then(res => res.json())
  .then(questions => {


    const quesContainer = document.querySelector("#question-container")
    questions.results.forEach(function(question) {
          console.log(question.question)
          // iterating throughout the array of objects by using forEach which takes in a callback function and the question as the single objects.)
          const newQuesElement = document.createElement('p')
          // setting a new element = to <p>
          newQuesElement.innerText = question.question
          // setting the inner text on the new Element to an item's name from the array
          quesContainer.appendChild(newQuesElement)
          // adding the new element to the existing <div>
        })

      })
    })
//
//
//
//
//
//2.
// Iterate throughout the questionsArray to get the specific info question instance
// Make an answerArray as the multipe choice for the response to the question.
// display the nextButton
// link the nextButton and the corretAnswer
//
//
//
// 3.
// If answer is correct ->
// then  move onto the next question.
//
// 4.
//  If answer is incorrect
//  Endgame()
//
//
//
// Endgame()
//  Once incorrectAnswer() is triggered i.e ,  question:false not TrUE
//
// Return to homepage

// or ------------ STRETCH GOAL -----------------------
//
// go to recordName and recordHIGHSCORE screen
// USER writes name on a form and is added to a list of highScores
// After userName is written and SUBMITTED a list of NAMES and HIGHSCORES are displayed
// It displays in animation running vertically to the bottom of the page .
// The goes to the HOMEPAGE to start again.





//
//
//
//
//
//
//
//
