
const quesButton = document.getElementById("show-ques");
const baseUrl = "http://localhost:3000/api/v1/questions";
let availableOptions = [];

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
    document.getElementById("question-text").innerText = question.question;

    const incorrectOptions = question.incorrect_answer.replace(/]|"|"|/g,"").substring(1).split(',');
    // console.log(incorrectOptions)
    let correctAnswer = question.correct_anwser;

    let answerSpace = Math.floor(Math.random() * 3) + 1;

    let newSpace = answerSpace + 1;

    const optionsArray = [correctAnswer, ...incorrectOptions];
    const optionA = document.getElementById("a");
    // gets the answer selection
    optionA.innerText = optionsArray[0];
    // sets the answer selection
    const optionB = document.getElementById("b");
    optionB.innerText = optionsArray[1];
    const optionC = document.getElementById("c");
    optionC.innerText = optionsArray[2];
    const optionD = document.getElementById("d");
    optionD.innerText = optionsArray[3];

    const choiceArray = Array.from(document.getElementsByCassName("choice-container"));

  	choiceArray.forEach((choice) => {
		 choice.addEventListener("click",function(e){
       console.log(e.target)
		    if(e.target.innerText == correctAnswer){
                console.log("sup");
                correctCount++;
                document.getElementById("score-output").innerText = `Here's your new score player ${correctCount/questionCounter}`;
        }
        else{
            console.log("wrong");
            document.getElementById("score-output").innerText = `Bye hater ${correctCount/questionCounter}`;

        }
 		   });
     });
}
