// QUESTIONS ARRAY
var stockQuestions = [
	{
		q: "Where was Link born?",
		a: ["Hyrule Castle", "Kokiri Forest", "A Fairy Fountain", "Unknown"],
		c: 3,
	},
	{
		q: "In 'A Link to the Past,' Link lived with his",
		a: ["Uncle", "Mother", "friends in the forest", "Unknown"],
		c: 0,
	},
	{
		q: "The original Triforce was made of",
		a: ["Gold", "Unknown", "Computer Chips", "Diamond"],
		c: 2,
	},
	{
		q: "The most powerful sword in the series is",
		a: ["Kokiri Forest", "A Fairy Fountain", "Unknown", "Master Sword",],
		c: 3,
	},
	{
		q: "The only side-scrolling Zelda game is",
		a: ["Breath of the Wild", "The Adventure of Link", "Minish Cap", "Unknown"],
		c: 1,
	},
];

// STATE OBJECT
var state = {
	questionNumber: 0,
	correctAnswers: 0,
	incorrectAnswers: 0,
	quizLength: stockQuestions.length,
};


// STATE MOD FUNCTIONS

// pull question from array & increment question number in state obj
// WORKING
function getQuestion (questionsArray) {
	var question = questionsArray[state.questionNumber];
	state.questionNumber ++;
	return question;
};

// increment correct answer
// WORKING
function correctAnswer () {
	state.correctAnswers ++;
};

// increment incorrect answer
// WORKING
function incorrectAnswer () {
	state.incorrectAnswers ++;
};


// DOM MOD FUNCTIONS

// new question
// WORKING
function makeNewQuestion(getQuestion) {

	// get question stuff
	var question = getQuestion["q"];
	var answers = getQuestion["a"];
	var correct = getQuestion["c"];
	var newQuestion = "";

	// set text
	$('.question-text').text(question);
	$('.question-number').text("Question "+state.questionNumber);
	$('.current-score').text("Current Score: " + state.correctAnswers + "/" + (state.questionNumber - 1));
	
	// create HTML
	for (var i = 0; i < answers.length; i++) {
		if (i === correct) {
			newQuestion += '<div class="correct js-btn btn btn-lg">'+answers[i]+'</div>';
		}
		else {
			newQuestion += '<div class="js-btn btn btn-lg">'+answers[i]+'</div>';
		}
	}
	return newQuestion;
};

// EXTRAS

// function to cover up hearts as incorre
function heartEffect () {
	// * z-index
	// * white block
};

// randomize questions function
function randomQuestion () {

};


// EVENT LISTENERS

// listen for start-game button => hide title page
// WORKING
$(document).ready(function() {

	// make a new question
	$('.answers').append(makeNewQuestion(getQuestion(stockQuestions)));

	// fade in
	$('.title-page').slideDown('fast');


	// listen for start button click
	$('.start-button').on('click', function(e) {
		e.preventDefault();

		// hide title
		$('.title-page').addClass('hidden');
		
		// add score and question to page
		$('.scoreAndHearts').removeClass('hidden');
		$('.question-section').removeClass('hidden');
	});

	// listen for click on answer buttons
	$('.js-btn').on('click', function (e) {
	e.preventDefault();

	// correct answer
	if ($(this).hasClass('correct')) {
		$(this).addClass('green');
		$('.btn, .question-text').fadeOut(800).delay(800);
		$('.next-question').fadeIn('fast');

		// increment state
		correctAnswer();
	}
	// incorrect answer
	else {
		$(this).addClass('red');
		$('.correct').addClass('yellow');
		$('.btn, .question-text').fadeOut(900).delay(800);
		$('.next-question').fadeIn('fast');

		// increment state
		incorrectAnswer();
	}
	});
	// listen for next question
	// WORKING
	$('.next-question').on('click', function(e) {
		e.preventDefault();
		$(this).fadeOut(0);

		// make a new question
		$('.answers').append(makeNewQuestion(getQuestion(stockQuestions)));
		$('.question-text').fadeIn('slow');

		// listen for click on answer buttons
		$('.js-btn').on('click', function (e) {
		e.preventDefault();

			//  correct answer
			if ($(this).hasClass('correct')) {
				$(this).addClass('green');
				$('.btn, .question-text').fadeOut(800).delay(800);
				$('.next-question').fadeIn('fast');

				// increment state
				correctAnswer();
				console.log(state);
			}
			else {
				$(this).addClass('red');
				$('.correct').addClass('yellow');
				$('.btn, .question-text').fadeOut(900).delay(800);
				$('.next-question').fadeIn('fast');
				incorrectAnswer();
				console.log(state);
			}
			if (state.questionNumber === state.quizLength) {
				$('.question-section, .answers, .btn, .scoreAndHearts').fadeOut(0);
				$('.final-score').children('h3').text(("FINAL SCORE: " + state.correctAnswers + "/" + (state.questionNumber)));;
				$('.final-score, .restart-button').fadeIn('fast');
			}
		});
	});
	$('.restart-button').on('click', function() {
		$('.container').slideUp('fast', function () {
			location.reload();
		});
	});
});
