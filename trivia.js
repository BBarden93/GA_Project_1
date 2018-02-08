

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
// variables for time function
var $startBtn = $('#startButton')
var $seconds = $('#seconds')
var time = $seconds.text()
var timer = Number(time) 
var countdown;
// variables for population using question list
var $questionBox = $('#questionBox')
var $question = $('.question')
var $answerBox0 = $('#answerBox0')
var $answerBox1 = $('#answerBox1')
var $answerBox2 = $('#answerBox2')
var $answerBox3 = $('#answerBox3')

// randomizer for choosing next question
function randomInt(n){
    return Math.floor(Math.random() * n)
}

function startClock() {
    console.log('You have clicked the start button') 
   runClock() 
   populate(questionsList[nextQuestion()])
}
function runClock (){
    countdown = setInterval(function(){
        timer--
        // console.log(timer)
        stopTimer()
        $seconds.text(timer)
    }, 1000) 
}
function stopTimer(){
    if (timer === -1) {
    clearInterval(countdown)
    //store points and reset clock
    
    timer = 5;
    }
}

// change question-select random object from questionsList array
function nextQuestion(){ 
    var randomNumber = randomInt(questionsList.length)
    // var theQuestion = questionsList[randomNumber];

    return randomNumber;
}
// make button responsive
var answerBtns = $('.answer-btn')
answerBtns.on('click', checkAnswer)

answerBtns.each(function( index ){
    answerBtns.eq(index).val(index)
})

function checkAnswer(){
    // console.log(questionsList[nextQuestion()].a)
    // console.log($(this).val())
     if ($(this).val() === questionsList[nextQuestion()].a.toString()){
        console.log('You are correct')
    } else {
        console.log('over it')
    }

    console.log('go to next question')
    var nQ = questionsList[nextQuestion()]
    console.log(nQ)
    populate(nQ)
}

// access question list- question goes to questions box 
// options go to spans
function populate(x){
    console.log(x.question)
    $question.text(x.question)

    $answerBox0.text(x.options[0])
    $answerBox1.text(x.options[1])
    $answerBox2.text(x.options[2])
    $answerBox3.text(x.options[3])
}

$('#startButton').on('click', startClock);

// link button to answers
// if box clicked = correct answer add points to correct player

// input point value to score board
var $pointsP1 = $('#pointsP1');
 $pointsP1.text(0);

var $pointsP2 = $('#pointsP2');
 $pointsP2.text(0);

var score = 0;

function addPoints(){
    $pointsP1.text(score + questionsList[randomNumber].ptValue)
}

//switch players after 25 seconds

/*
var game = {
    players: [{name:'Player 1'}, {name:'Player 2'}]
    questions: questionsList,
    currentQuestion: null,
    currentPlayer: null,
}
*/
