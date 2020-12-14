class Questions{
  debugger
  constructor(){
    this.questions = [];
    this.adapter = new QuesAdapter();
    this.bindEventListeners();
    this.fetchAndLoadQuestions
  }

    fetchAndLoadQuestions(){
      this.adapter.getQuestions()
        .then(questions => {
          console.log(questions)
           questions.results.forEach(function(question)
           {console.log(question.question)})
           //

              // or

          questions.map( question => {
            // individual objects
            const realQuestion = {

              question:question.question
            };

        })
    })

}
}
