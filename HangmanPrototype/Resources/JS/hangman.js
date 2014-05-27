var images = ["Resources/hang/hang0.gif","Resources/hang/hang1.gif", "Resources/hang/hang2.gif", "Resources/hang/hang3.gif", "Resources/hang/hang4.gif", "Resources/hang/hang5.gif", "Resources/hang/hang6.gif", "Resources/hang/hang7.gif", "Resources/hang/hang8.gif", "Resources/hang/hang9.gif", "Resources/hang/hang10.gif"];
var maxWrong = images.length;
var animals = ["cat", "dog", "lion"];
var colors = ["red", "green", "blue"];
$(document).ready(function(){
	$('#category').find('option[value="select"]').prop('selected',true);
	$( ".category" ).prop( "disabled", false );
$(function(){
  $("#display").hide();
  $(".option").click(function(){
  	$( ".option" ).prop( "disabled", true );
  	$( ".category" ).prop( "disabled", true ); 
    $("#display").show(1000);
  });
});
$(function(){
  $("#reload").click(function(){
  	$( ".category" ).prop( "disabled", false ); 
  	$( ".option" ).prop( "disabled", false );
  });
});
$(function(){
 	$(".letters").click(function(){
    $(this).hide(400);
  	});
	});
});
function DisplaySecretWord(){
	this.word = "";
	this.secretWord = "";
};
getWord = new DisplaySecretWord(); //create an object from DisplaySecretWort class
DisplaySecretWord.prototype.selectWord = function(){
	var element = document.getElementById("category");
			if (element != null || element != undefined ){
			var category = element.options[element.selectedIndex].value;
			if( category == "select")
			{
				alert("Please select category to start the game!");
			}
			else if (category == "animals")
			{
				game.gameWord = this.word = animals[Math.floor(Math.random()*animals.length)];
			}
			else
			{
				game.gameWord = this.word = colors[Math.floor(Math.random()*colors.length)];
			}
			}
			this.getSecretWord();
};
DisplaySecretWord.prototype.getSecretWord = function(){
	for(i = 0; i < this.word.length; i++){
		game.gameSecret = this.secretWord += "_";
	}
	this.dispayWord(this.secretWord);
};
DisplaySecretWord.prototype.dispayWord = function(word){
	this.word = word;
	var display = document.getElementById("secret");
		if (display != null || display != undefined ){
		display.innerHTML = word;
}
};
function DisplayBoard(){

};
DisplayBoard.prototype.displayPic = function(number){
	this.number = number;
	if (number.length < maxWrong)
		{
			var border = images[number.length];
			var p = document.getElementById("pic");
			if (p != null || p != undefined ){
			p.innerHTML = '<img class = "pictures" src ="' + border + '"/>';
			}
		}
};
hang = new DisplayBoard();  // create an object from DisplayBoard class
 function Game(){
 	this.rightGuess = "";
 	this.wrongGuess = "";
 	this.gameWord = "";
 	this.gameSecret = "";
 };
 game = new Game(); // create an object from Game class
 Game.prototype.isLetterInWord = function(letter){
 		this.letter = letter;
 		var isRightGuess = false;
		for(i = 0; i < this.gameWord.length; i++)
		{
			if(letter == this.gameWord.substring(i, i + 1))
	       	{
				this.rightGuess += letter;
				this.gameSecret = this.gameSecret.substring(0, i) + letter + this.gameSecret.substring(i + 1, this.gameSecret.length + 1);
				getWord .dispayWord(this.gameSecret);
				var el = document.getElementById("right");
				if (el != null || el != undefined ){
				el.innerHTML = this.rightGuess;
			}
			isRightGuess = true;
			this.win();
			}
		}
		if(!isRightGuess)
		{
			this.wrongGuess += letter;
			var e = document.getElementById("wrong");
			if (e != null || e != undefined ){
			e.innerHTML = this.wrongGuess;
		}
			hang.displayPic(this.wrongGuess);
			this.lose();
		}
};
Game.prototype.win = function(){
	if(this.gameSecret == this.gameWord){
		alert("Good job!!! You win! The word was " + this.gameWord);
	}	
};
Game.prototype.lose = function(){
	if( this.wrongGuess.length == maxWrong){
		alert("Sorry but you lose!!! The word was " + this.gameWord + " .Click 'New Game' to play again!");
	}
};
function exitGame(){
		var r=confirm("Do you really  want to quit the game?");
		if (r==true)
  		{
  			alert("Ok :) See you next time!");
  			location = "http://www.youtube.com";
  		}
};