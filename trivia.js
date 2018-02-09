

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
    ptValue: 1 },

    {question:"What is the actual value passed through to the function when the function is called?",
    options:["parameter","argument","local variable","statement"],
    a: 1,
    ptValue: 2},
    
    {question:"How do you access the property make from the object car?",
    options:["make.car", "make of car:", "properties.make", "car.make()"],
    a:3,
    ptValue: 2},

    {question: "Each element in an HTML document is represented by what in the DOM?",
    options:["tag", "model", "object", "node"],
    a:3,
    ptValue:2},

    {question: "What are actions taken by a user that can trigger updates in the DOM?",
    options:["command", "argument", "event", "script"],
    a:2,
    ptValue:2},

    {question: "What event occurs whenan element loses focus?",
    options:["blur", "resize", "load", "focus"],
    a:0,
    ptValue:3},

    {question: "What term is used in event handling to refer to a specific object?",
    options:["click", "this", "node", "focus"],
    a:0,
    ptValue:3},
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

var players = ['Player 1' , 'Player 2'];
var currentPlayer;

var game = {
    player1: {
        played: false,
        name: "Philippe",
        score: 0,
        $scoreBoard: $('#pointsP1')
    },
    player2: {
        played: false,
        name: "Brittany",
        score: 0,
        $scoreBoard: $('#pointsP2')
    },
    currentQuestion: null,
    reset: function(){
        game.currentPlayer = game.player1
        game.player1.score = 0
        game.player2.score = 0
        game.player1.$scoreBoard.text(0)
        game.player2.$scoreBoard.text(0)

    }
}

game.currentPlayer = game.player1


// randomizer for choosing next question
function randomInt(n){
    return Math.floor(Math.random() * n)
}

function startClock() {
    console.log('You have clicked the start button') 
   runClock()
   populate(nextQuestion())
}
function runClock (){
    countdown = setInterval(function(){
        timer--
        // console.log(timer)
        if (timer === -1) {
            stopTimer()
        }
        $seconds.text(timer)
    }, 1000) 
}

function stopTimer(){
    clearInterval(countdown)
    //reset clock
    timer = 20;
    endRound()
}

function endRound(){
    game.currentPlayer.played = true
    if (game.player1.played && game.player2.played ){
        // announce winner
        alert('game over')
        checkWinner()
        game.reset()
    } else {
        switchPlayer()
    }
}
function checkWinner(){
    if (game.player1.score > game.player2.score){
        alert('Player 1 wins!')
    } else if(game.player1.score === game.player2.score){
        alert('It is a tie')
    }else {
        alert('Player 2 wins!')
    }
}
//switch players after 20 seconds
function switchPlayer() {
    if (game.currentPlayer === game.player1){
        game.currentPlayer = game.player2
    } else {
        game.currentPlayer = game.player1
    }
}

// change question-select random object from questionsList array
function nextQuestion(){ 
    var randomNumber = randomInt(questionsList.length)
    game.currentQuestion = questionsList[randomNumber]
    // var theQuestion = questionsList[randomNumber];

    return game.currentQuestion;
}
// make button responsive
var answerBtns = $('.answer-btn')
answerBtns.on('click', checkAnswer)

answerBtns.each(function( index ){
    answerBtns.eq(index).val(index)
})

var $pointsP1 = $('#pointsP1');
    $pointsP1.text(0);

var $pointsP2 = $('#pointsP2');
    $pointsP2.text(0);

var score = 0;    

function addPoints(points){
    game.currentPlayer.score = game.currentPlayer.score + points
    game.currentPlayer.$scoreBoard.text(game.currentPlayer.score)
}
// link button to answers
// if box clicked = correct answer add points to correct player
function checkAnswer(){
    var questionValue = game.currentQuestion.ptValue
    
    if ($(this).val() === game.currentQuestion.a.toString()){
        console.log('You are correct')
    // input point value to score board
        addPoints(questionValue)
        // $pointsP1.text(score)
        console.log('point added')
    } else {
        console.log('over it')
    }
    console.log('go to next question')
    console.log(game.currentQuestion)
    populate(nextQuestion())
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






