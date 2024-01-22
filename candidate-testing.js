const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

// Mental Note: Add case sensitive warning 
//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
]
let correctAnswers = ["Sally Ride",
"true", 
"40",
"Trajectory",
"3"
]
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter Name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // candidateAnswer = input.question(question)
  for (let i = 0; i < questions.length; i++ ) {
    candidateAnswers.push(input.question(questions[i]))
  }
  // console.log(candidateAnswers);
}
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // if(candidateAnswer === correctAnswer){
  //   console.log("Correct!")
  // } else {
  //   console.log("Incorrect.")
  // }
  // console.log(candidateAnswers);
console.log(`
You answered: ${candidateAnswers[0]} . The correct answer is ${correctAnswers[0]}
You answered: ${candidateAnswers[1]} . The correct answer is ${correctAnswers[1]}
You answered: ${candidateAnswers[2]} . The correct answer is ${correctAnswers[2]}
You answered: ${candidateAnswers[3]} . The correct answer is ${correctAnswers[3]}
You answered: ${candidateAnswers[4]} . The correct answer is ${correctAnswers[4]}
`)

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello,", candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers);
}
runProgram()
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};