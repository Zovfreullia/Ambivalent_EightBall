$(document).ready(function() {

  // start writing your magic 8 ball logic here!

    $('#eight-ball').submit(function(e){
    	var answers = ["Maybe", "Eh...", "Hmmm...", "Wow", "Da Fuck?!"];
    	var eightBall =  answers[Math.floor(Math.random() * answers.length)];
    	$('div#answer').text(eightBall).fadeIn(5000);
    	e.preventDefault();
	});

});