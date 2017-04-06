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


event listeners
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
			$('.next-question').on('click', 'li', function () {
				$('.question-display').empty();
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
				});
			});
		});
	});
});