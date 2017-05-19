$(document).ready(function(){
	
	function crystalValueGenerate(){
		var crystalValArray = [];
		for (i = 0; i <= 3; i++){
			crystalValArray.push(Math.floor(Math.random() * (12-1)) + 1);
		}
		return crystalValArray;
	}
	
	function resetValues(){
		crystalValArray = crystalValueGenerate();
		guessNumber = Math.floor(Math.random() * (120-19)) + 19;
		totalScore = 0;
		$("#totalScore").html(totalScore);
		$("#guessNumber").html(guessNumber);
	}
	
	function addTotal(crystalValue){
		totalScore = totalScore + crystalValue;
		$("#totalScore").html(totalScore);
		if (totalScore > guessNumber){
			//LOSING
			console.log("LOST");
			losses = losses + 1;
			$("#losses").html("Losses: " + losses);
			resetValues();
		} else if (totalScore == guessNumber){
			console.log("WIN");
			//WINNING
			wins = wins + 1;
			$("#wins").html("Wins: " + String(wins));
			resetValues();
		}
	}
	
	var crystalValArray = crystalValueGenerate();
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var guessNumber = Math.floor(Math.random() * (120-19)) + 19;
	
	$("#guessNumber").html(guessNumber);
	
	$("#crystal1").on("click", function() {
		addTotal(crystalValArray[0]);
	});
	
	$("#crystal2").on("click", function() {
		addTotal(crystalValArray[1]);
	});
	
	$("#crystal3").on("click", function() {
		addTotal(crystalValArray[2]);
	});
	
	$("#crystal4").on("click", function() {
		addTotal(crystalValArray[3]);
	});
})

