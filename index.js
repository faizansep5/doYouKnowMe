var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's your name? ");
var score = 0;
console.log("Welcome "+ userName + ", Do you know Faizan? " )
//function
function game(question, answer){
var userAnswer = readlineSync.question(question);
if(userAnswer.toUpperCase() === answer.toUpperCase()){
  console.log("YAY! "+ "You were right!")
  score = score + 1;
} else{
  console.log("OOPS! "+ "You were wrong!")
}
  console.log("Your current score is "+ score)
  console.log("-------------------")
}

var questions = [questionOne = {
  question: "What's his nickname? ",
  answer: "sonu"
},
questionTwo = {
  question: "What's his age? ",
  answer: "20"
},
questionThree = {
  question: "What's his favorite color? ",
  answer: "black"
},
questionFour = {
  question: "What's his favorite food? ",
  answer: "biryani"
},
questionFive = {
  question: "Which city he lives? ",
  answer: "jhansi"
},
];
for(let i = 0; i<questions.length; i++){
  var currentQuestion = questions[i];
  //function calling
game(currentQuestion.question, currentQuestion.answer);
} 
console.log("YOUR FINAL SCORE IS: "+ score)
var highScore = [{
  name:"lucky",
  score:5
},
{
  name:"Alia",
  score:4
}
];

console.log("Check out the High Scores, if you should there, Please ping me!, I'll UPDATE it! ")
for(let i= 0; i<highScore.length; i++){
  console.log(highScore[i].name + ":" + highScore[i].score);
}

