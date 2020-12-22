// 1. Make a fetch command to the backend to retrieve the json object that
// cotains an array of the Questions.
// using an array from apiSrc
//  url = apiSrc
//

let resultsContainer = document.getElementById('results');
const quesButton = document.getElementById("show-ques");
const submitButton = document.getElementById('submit-button');
const baseUrl = "http://localhost:3000/api/v1/questions";
let availableOptions = []




// const orgIncorrect = question.incorrect_answer.replace(/]|"|"|/g,"").substring(1).split(',')
// const correctAnswer = question.correct_answer;
// const riddle = document.getElementById('riddle');
// const choices = Array.from(document.getElementsByClassName('choice-text'));
// let quesArray = [
//   new Question(question.question, orgIncorrect, correctAnswer);
//   const currentQuestion = {};
//   const score = 0;
//   const questionCounter = 0;
//   const availableQuestions = [];
//
//
// fetch('url')
// .then(function (resp){
//   return resp.json()
// })
// .then(function(arrayofObjects){console.log(arrayofObjects)})
// gameButton.addEventListener("click")
let questionCounter = 1;

quesButton.addEventListener("click",function(e){
  console.log("Test")
  getQuestions(questionCounter++);
})


//
// fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
// .then(res => res.json())
//   .then(questions => {
// //
//
    // const quesContainer = document.querySelector("#question-container")
//     console.log(questions)
//     questions.results.forEach(function(question) {
//
//           // console.log(question.question)
//           // iterating throughout the array of objects by using forEach which takes in a callback function and the question as the single objects.)
//           const newQuesElement = document.createElement('p')
//           // setting a new element = to <p>
//           newQuesElement.innerText = question.question
//           // setting the inner text on the new Element to an item's name from the array
//           quesContainer.appendChild(newQuesElement)
//           // adding the new element to the existing <div>
//         })
//
//       })
//     })

// this function is geting the readable json format that we can identify and use.

// fetch('http://localhost:3000/api/v1/questions')
// // this is the url source we are using to fetch
//
// .then(res => res.json())
// // response json becomes eligble for use to help code
// .then(questions => {
//   questions.forEach(question =>{console.log(question)}  )
// })
// })


function getQuestions(id){
  // console.log("hello")
  fetch(`http://localhost:3000/api/v1/questions/${id}`)
  .then(res => res.json())
  .then(question =>{
    console.log(question);
    // questions.forEach(question => {renderCurrentQuestion(question)} )
    renderCurrentQuestion(question);

  })
}
// getQuestions()

function renderCurrentQuestion(question){
// console.log(question)
  // const question = getElementById('question')
  // console.log(choices)
  const newQuesElement = document.createElement("p");
  const quesContainer = document.getElementById('question-container');
  const realQuestion = {
    question:question.question
  };
  newQuesElement.innerText = realQuestion.question;
  quesContainer.appendChild(newQuesElement);
  // change


  const incorrectOptions = question.incorrect_answer.replace(/]|"|"|/g,"").substring(1).split(',');
  // console.log(incorrectOptions)
  let correctAnswer = question.correct_anwser
  console.log(correctAnswer)

  let answerSpace = Math.floor(Math.random() * 3) + 1;
  console.log(answerSpace)

  let newSpace = answerSpace + 1;
  console.log(newSpace)

  // function insert(arr, index, newItem)
  // { return [...arr.slice(0, index+1), newItem, ...arr.slice(index+1, arr.length)];} 
  // console.log(insert)

  // insert(incorrectOptions,answerSpace,correctAnswer)
  //   console.log(insert);
  // // {return[...incorrectOptions.slice(answerSpace,answerSpace++),correctAnswer,...incorrectOptions.slice(answerSpace++,availableOptions.length)]}
  // console.log(insert);

  //   function insert(incorrectOptions,answerSpace,correctAnswer){ return(
  // [...incorrectOptions.slice(0,newSpace),correctAnswer,...incorrectOptions.slice(newSpace,incorrectOptions.length)])
  //  ;}
  //
  // insert()
  // console.log(insert)


  // [...test.slice(0),"never",...test.slice(test.length)]
  
   const optionsArray = [correctAnswer,...incorrectOptions,]


   // adding options to choice-text
    const optionA = document.getElementById("a")
    // gets the answer selection
    optionA.innerText = optionsArray[0]
    // sets the answer selection
    const optionB = document.getElementById("b")
    optionB.innerText = optionsArray[1]
    const optionC = document.getElementById("c")
    optionC.innerText = optionsArray[2]
    const optionD = document.getElementById("d")
    optionD.innerText = optionsArray[3]
};



const choiceArray = Array.from(document.getElementsByClassName("choice-container"));
console.log(choiceArray)
//
choiceArray.forEach((choice) => {
  choice.addEventListener("click",function(e){
    console.log(e.target.innerText)
    if(e.target.innerText == correctAnswer){
      console.log("sup")
    }
    else{
      console.log("wrong")
    }
  });
});




//     .then(res => res.json())
//       .then(questions => {
//         // console.log(questions[0].correct_anwser
//         let initQuestion = 0
//         //
//         // // .catch(err => alert(err))
//         const quesContainer = document.querySelector("#question-container")
//         // // create instances of the same class
//         // // an instance of the
//         // // append question at [0] to the newQuesElement ?
//         //
//         // console.log(questions[initQuestion])
//         //
//         //
//         // const realQuestion = {
//         //
//         questions.map( question => {
//           // individual objects
//           const realQuestion = {
//
//             question:question.question
//           };
//           console.log(realQuestion.question)
//           // individual question
//           console.log(realQuestion)
//
//           const newQuesElement = document.createElement('p')
//           // how do I get the realQuestion added to the newQuesElement
//           // if i cannot then that means i have to do something else.
//           //
//           // realQuestion = {" "}
//           // is not equal to each other
//           // newQuesElement = (' ')
//           // question.incorrect_answer = string
//             // choiceArray
//
            // orgIncorrect.split(",")
            // question.incorrect_answer.replace(/]|"|"|/g,"").substring(1).split(',')
//
//            console.log(orgIncorrect)
//            // orgIncorrect[0]
//           const answerChoices = [... orgIncorrect];
//             // debugger
//           // an array of incorrect answers
          // realQuestion.answer = Math.floor(Math.random() * 3) + 1;
//           // return a random integer between 0 & 3 I think
//           answerChoices.splice( -1,0,question.correct_anwser);
//           // we add the correct answer choice to the array of incorrect answers
//
//           newQuesElement.innerText = realQuestion.question;
//           // console.log(newQuesElement)
//           // how do I get one question at a time ?
//           // instead of all of them?
//           // can i apply a wait function/slow
//           // maybe have a function to getQuestions => renderQuestion ; to show individual question => then renderAnswer to show answers corresponding to question ??
//
//           answerChoices.forEach((choice, index) => {
//             realQuestion["choice" + (index +1)] = choice;
//           });
//
//           // return newQuesElement
//           console.log(newQuesElement)
//           quesContainer.appendChild(newQuesElement)
//         })
//       })
//
// })
