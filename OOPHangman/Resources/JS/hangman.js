
var images = ["Resources/hang/hang0.gif","Resources/hang/hang1.gif", "Resources/hang/hang2.gif", "Resources/hang/hang3.gif", "Resources/hang/hang4.gif", "Resources/hang/hang5.gif", "Resources/hang/hang6.gif", "Resources/hang/hang7.gif", "Resources/hang/hang8.gif", "Resources/hang/hang9.gif", "Resources/hang/hang10.gif"];
var maxWrong = images.length;
var animals = ["cat", "dog", "lion"];
var colors = ["red", "green", "blue"];

$(document).ready(function(){
	$('#category').find('option[value="select"]').prop('selected',true);

	});
$(function(){
  $("#display").hide();
  $(".option").click(function(){
    $("#display").show();
  });
});
$(function(){
 	$(".letters").click(function(){
    $(this).hide();
  	});
	});

var DisplaySecretWord = {
	//Select word from different categories and display it whit "_" equal to word's letters
	
	word : "",
	secretWord : "",

	selectWord: function(){
		var element = document.getElementById("category");
			if (element != null || element != undefined ){
			var category = element.options[element.selectedIndex].value;
			if( category == "select")
			{
				alert("Please select category to start the game!")
			}
			else if (category == "animals")
			{
				Game.gameWord = this.word = animals[Math.floor(Math.random()*animals.length)];
			}
			else
			{
				Game.gameWord = this.word = colors[Math.floor(Math.random()*colors.length)];
			}
			}
			this.getSecretWord();
			},
	getSecretWord: function(){ 
		for(i = 0; i < this.word.length; i++){
		Game.gameSecret = this.secretWord += "_";
	}
	this.dispayWord(this.secretWord);
	},
	dispayWord: function(word){
		var display = document.getElementById("secret");
		if (display != null || display != undefined ){
		display.innerHTML = word;
		}
	}
};



var DisplayBoard = {
	//Display pictures of men equal to wrong guesses
	displayPic : function(number){
		if (number.length < maxWrong)
		{
			var border = images[number.length];
			var p = document.getElementById("pic");
			if (p != null || p != undefined ){
			p.innerHTML = '<img class = "pictures" src ="' + border + '"/>';
			}
		}
	}
	
};

var Game = {
	// All game
	rightGuess : "",
	wrongGuess : "",
	gameWord : "",
	gameSecret : "",

	isLetterInWord : function(letter){
		var isRightGuess = false;
		//console.log( this.gameWord);

		for(i = 0; i < this.gameWord.length; i++)
		{
			//console.log( this.gameWord);
			if(letter == this.gameWord.substring(i, i + 1))
	       	{
				this.rightGuess += letter;
				this.gameSecret = this.gameSecret.substring(0, i) + letter + this.gameSecret.substring(i + 1, this.gameSecret.length + 1);
				DisplaySecretWord.dispayWord(this.gameSecret);
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
			DisplayBoard.displayPic(this.wrongGuess);
			this.lose();
		}
	},
	win : function(){
		if(this.gameSecret == this.gameWord){
		alert("Good job!!! You win! The word was " + this.gameWord);
	}
	},
	lose : function(){
		if( this.wrongGuess.length == maxWrong){
		alert("Sorry but you lose!!! The word was " + this.gameWord + " .Click 'New Game' to play again!");
	}
	}
	
};






function exitGame(){
		var r=confirm("Do you really  want to quit the game?");
		if (r==true)
  		{
  			alert("Ok :) See you next time!");
  			location = "http://www.youtube.com";
  		}
	}





