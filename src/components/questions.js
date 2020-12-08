class Questions{
  constructor(){
    this.questions = [];
    this.adapter = new QuesAdapter();
    this.bindEventlisteners();
    this.fetchAndLoadQuestions
  }

    fetchAndLoadQuestions(){
      this.adapter.getQuestions()
        .then(questions => {
          console.log(questions)
        })
    }

}
