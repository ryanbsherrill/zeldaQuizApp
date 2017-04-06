// STATE OBJECT
var state = {
	questionNumber: 0,
	correctAnswers: 0,
	incorrectAnswers: 0,
};

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


// STATE MOD FUNCTIONS

// increment question #
function getQuestion (questionsArray) {
	var question = questionsArray[state.questionNumber];
	state.questionNumber ++;
	return question;
}

// increment correct answer

// increment incorrect answer


// DOM MOD FUNCTIONS

// function to change content of question
// * function will run when next button is clicked

// function to change colors depending on right/wrong answer


// function to fill-out final score

// EXTRA CRED

// function to cover up hearts as incorrect questions happen
// * z-index
// * white block

// randomize questions function


// EVENT LISTENERS

// listen for start-game button => hide title page
$(document).ready(function() {
	$('.start-button').on('click', function(e) {
		e.preventDefault();
		$('.title-page').addClass('hidden');
		$('.scoreAndHearts').removeClass('hidden');
		$('.question-section').removeClass('hidden');
	});
});

// listen for answers => correct answer gets one action 
// incorrect gets a different one

// when user submits a question
