

$(document).ready(function() {
	var crystalA = 0;
	var crystalB = 0;
	var crystalC = 0;
	var crystalD = 0;
	var guessnNumber = 0;
	var score = $("#guessnNumber");

   
        $("#guessnNumber").on("click", function() {
        var random = Math.floor(Math.random() * 121) + 1;
        $("#guessnNumber").html(random);

});