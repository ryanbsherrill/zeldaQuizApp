// state object
// score
// # of questions in
var state = {
	questionNumber: 0,
	correctAnswers: 0,
};

// questions
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

function getQuestion (questionsArray) {
	var gotQuestion = questionsArray[state.questionNumber];
	state.questionNumber ++;
	return gotQuestion;
}

function makeNewQuestion(gotQuestion) {
	var question = gotQuestion["q"];
	var answers = gotQuestion["a"];
	var correct = gotQuestion["c"];
	var newQuestion = '<p>' + question + '</p>';
	for (var i = 0; i < answers.length; i++) {
		newQuestion += '<li><button class="questionButton" val="'+ [i] +'">' + answers[i] + '</button></li>' +
					   '<li class="hidden" val="'+correct+'"><li>'
	}
	return newQuestion;
}

// DOM mod functions
// function to display new question to the DOM


// render functions

// event listeners
$(document).ready(function () {
	$('.start-game').click(function (e) {
		e.preventDefault();
		$('.question-display').html(makeNewQuestion(getQuestion(stockQuestions)));
		$('.questionButton').on('click', function () {
			
			if ($(this).attr('val') !== $('.hidden').attr('val')) {
				alert("WRONG!!!");
			}
			else {
				alert("RIGHT!!!");
				state.correctAnswers ++;
				console.log(state);
				$('.start-game').removeClass().addClass('next-question').html('NEXT QUESTION');
			}
			$('.next-question').on('click', function () {
				$('.question-display').empty();
				$('.question-display').html(makeNewQuestion(getQuestion(stockQuestions)));
			});
		});
	});
});
// classes
// .question-display\
// .start-game



