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
	{
		q: "'Link's Awakening' was inspired by",
		a: ["Akira", "Jurassic Park", "Mario Brothers", "Twin Peaks"],
		c: 4,
	},
	{
		q: "Princess Zelda is named after",
		a: ["Zelda Fitzgerald", "The Creator's Dog", "Zelda Kahan", "Unknown"],
		c: 0,
	},
	{
		q: "Link is",
		a: ["Right-Handed", "Trick Question", "Left-Handed", "Ambidextrous"],
		c: 1,
	},
	{
		q: "The World Record for Beating 'The Legend of Zelda is'",
		a: ["14 Minutes", "6 Hours", "28 minutes", "12 Hours"],
		c: 2,
	},
	{
		q: "Link's character design is loosely based on",
		a: ["Unknown", "Davey Crockett", "Peter Pan", "Blasphemy. Link is an original"],
		c: 2,
	},
];

var state = {
	questionNumber: 0,
	correctAnswers: 0,
	incorrectAnswers: 0,
	quizLength: stockQuestions.length,
};

function getQuestion (questionsArray) {
	var question = questionsArray[state.questionNumber];
	state.questionNumber ++;
	return question;
}

function correctAnswer () {
	state.correctAnswers ++;
}

function incorrectAnswer () {
	state.incorrectAnswers ++;
}

function makeNewQuestion(getQuestion) {
	var question = getQuestion.q;
	var answers = getQuestion.a;
	var correct = getQuestion.c;
	var newQuestion = "";

	$('.question-text').text(question);
	$('.question-number').text("Question "+state.questionNumber);
	$('.current-score').text("Current Score: " + state.correctAnswers + "/" + (state.questionNumber - 1));
	
	for (var i = 0; i < answers.length; i++) {
		if (i === correct) {
			newQuestion += '<div class="correct js-btn btn btn-lg">'+answers[i]+'</div>';
		} else {
			newQuestion += '<div class="js-btn btn btn-lg">'+answers[i]+'</div>';
		}
	}
	return newQuestion;
}

function heartDelete () {
	$('.heart-container').children().eq(0).delay(2000).queue(function () {
		$(this).remove();
	});
}

function hitPointReduce () {
	$('.heart-container').children().eq(0).addClass('animated hinge');
	heartDelete();
}

function hitPointIncrease () {
	$('.heart-container').children().last().append('<span class="glyphicon glyphicon-heart"></span>');
}

function randomQuestion () {

}

function playerStatus () {
	if (state.correctAnswers <= 6) {
		return "n00b Adventurer";
	}
	else if (state.correctAnswers <= 8) {
		return "Hylian Warrior";
	} else {
		return "Legendary Hero!";
	}
}

$(document).ready(function() {
	$('.answers').append(makeNewQuestion(getQuestion(stockQuestions)));
	$('.title-page').slideDown('fast');
	$('.start-button').on('click', function(e) {
		e.preventDefault();
		
		$('.title-page').addClass('hidden');
		$('.scoreAndHearts').removeClass('hidden');
		$('.question-section').removeClass('hidden');
	});
	
	$('.js-btn').on('click', function (e) {
	e.preventDefault();

	if ($(this).hasClass('correct')) {
		correctAnswer();
		$(this).addClass('green');
		$('.btn, .question-text').fadeOut(800).delay(800);
		$('.next-question').fadeIn('fast');
	} else {
		incorrectAnswer();
		hitPointReduce();
		$(this).addClass('red');
		$('.correct').addClass('yellow');
		$('.btn, .question-text').fadeOut(900).delay(800);
		$('.next-question').fadeIn('fast');
	}
	});
	$('.next-question').on('click', function(e) {
		e.preventDefault();
		$(this).fadeOut(0);
		$('.answers').append(makeNewQuestion(getQuestion(stockQuestions)));
		$('.question-text').fadeIn('slow');
		$('.js-btn').on('click', function (e) {
		e.preventDefault();
			
			if ($(this).hasClass('correct')) {
				correctAnswer();
				$(this).addClass('green');
				$('.btn, .question-text').fadeOut(800).delay(800);
				$('.next-question').fadeIn('fast');
			} else {
				incorrectAnswer();
				hitPointReduce();
				$(this).addClass('red');
				$('.correct').addClass('yellow');
				$('.btn, .question-text').fadeOut(900).delay(800);
				$('.next-question').fadeIn('fast');
			}
			if (state.incorrectAnswers === 3) {
				$('.question-section, .answers, .btn, .scoreAndHearts').fadeOut(1000);
				$('.final-score').children('h3').text(("YOU LOST ALL YOUR HEARTS"));
				$('.final-score').children('h1').text(("Try Again?"));
				$('.final-score, .restart-button').fadeIn(6000);
			}
			else if (state.questionNumber === state.quizLength) {
				$('.question-section, .answers, .btn, .scoreAndHearts').fadeOut(1000);
				$('.final-score').children('h3').text(("FINAL SCORE: " + state.correctAnswers + "/" + (state.questionNumber)));
				$('.final-score').children('h1').text((playerStatus()));
				$('.final-score, .restart-button').fadeIn(5000);
			}
		});
	});
	$('.restart-button').on('click', function() {
		$('.container').slideUp('fast', function () {
			location.reload();
		});
	});
});
