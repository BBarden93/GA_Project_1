

var questionsList = [
    {question: "Which line of code is correct?",
    options: ["var winner = 'me'", "var winner::me", "var: winner = me", "variable winner is me"],
    a: 0,
    ptValue: 1 },

    {question: "What does HTML stand for?",
    options: ["Hyperloop Transportation Musk Line", "Hyper Transfer Markup Language", "Holy Text Mark Language", "Hyper Text Markup Language"],
    a: 3,
    ptValue: 1 },

    {question: "A sketch that detail the feaures and functionality of a site is a:",
    options: ["Annotation", "Design", "Wireframe", "Domain"],
    a: 2,
    ptValue: 1 },

    {question: "ls, pwd, rm, and mkdir are used in what text-based interface?" ,
    options: ["argument line", "command line", "directory", "terminal"],
    a: 1,
    ptValue: 1 },

    {question: "Git is an open source program for tracking changes in text files.",
    options:["true", "false", "boolean", "Wouldn't you like to know"],
    a: 0,
    ptValue: 1 }
]

var $startBtn = $('#startButton')
var $seconds = $('#seconds')
var time = $seconds.text()
var timer = Number(time) 
var countdown;

function startClock() {
    console.log('You have clicked the start button') 
   
    runClock() 
}
function runClock (){
    
    countdown = setInterval(function(){
        timer--
        console.log(timer)
        stopTimer()
        $seconds.text(timer)
    }, 1000) 
}

function stopTimer() {
    if (timer === 0) {
    clearInterval(countdown)
    }
}
$('#startButton').on('click', startClock);

/*
function randomInt(n){
    return Math.floor(Math.random() * n)
}
var game = {
    questions: questionsList,
    currentQuestion: null,
    currentPlayer: null,
    
}

$questionBox = $('#questionBox')

function generateRandomQuestion (){
    $questionBox.text(questionsList[randomInt(questionsList.length)])
}
*/

