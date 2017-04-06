// state object
// score
// # of questions in
// var state = {
// 	questionNumber: 0,
// 	correctAnswers: 0,
// };

// // questions
// var stockQuestions = [
// 	{
// 		q: "Where was Link born?",
// 		a: ["Hyrule Castle", "Kokiri Forest", "A Fairy Fountain", "Unknown"],
// 		c: 3,
// 	},
// 	{
// 		q: "In 'A Link to the Past,' Link lived with his",
// 		a: ["Uncle", "Mother", "friends in the forest", "Unknown"],
// 		c: 0,
// 	},
// 	{
// 		q: "The original Triforce was made of",
// 		a: ["Gold", "Unknown", "Computer Chips", "Diamond"],
// 		c: 2,
// 	},
// 	{
// 		q: "The most powerful sword in the series is",
// 		a: ["Kokiri Forest", "A Fairy Fountain", "Unknown", "Master Sword",],
// 		c: 3,
// 	},
// 	{
// 		q: "The only side-scrolling Zelda game is",
// 		a: ["Breath of the Wild", "The Adventure of Link", "Minish Cap", "Unknown"],
// 		c: 1,
// 	},
// ];

// function getQuestion (questionsArray) {
// 	var gotQuestion = questionsArray[state.questionNumber];
// 	state.questionNumber ++;
// 	return gotQuestion;
// }

// classes
// render functions
// DOM mod functions
// function to display new question to the DOM
// final score screen

// pseudocode every function --> helps with staying on course & not getting lost

// listener for start game button -- hide title page
$(document).ready(function() {
	$('.start-button').on('click', function(e) {
		e.preventDefault();
		$('.title-page').addClass('hidden');
		$('.scoreAndHearts').removeClass('hidden');
		$('.question-section').removeClass('hidden');
	});
});

// listen for click of answer buttons
// if wrong answer -- make that button red & highlight the right answer in yellow
// then create next question button
// if right answer -- highlight that answer in green and create next question button

// when the question # = the length of questions array --
// unhide the final synopsis w/ final score and restart button







