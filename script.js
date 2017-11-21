$(document).ready(function() {

  $('#eight-ball').submit(function(e){
    var answers = ["Maybe", "Eh...", "Hm...", "Wow", "Fuck?!"];
    var eightBall =  answers[Math.floor(Math.random() * answers.length)];
    $('div#answer').text(eightBall).fadeIn(5000);
    e.preventDefault();
  });

});
