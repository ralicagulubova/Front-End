var animals = ["котка","куче","лъв", "щъркел"];

var colors = ["лилаво", "виолетов", "оранжев"];

var images = ["Resources/hang/hang1.gif", "Resources/hang/hang2.gif", "Resources/hang/hang3.gif", "Resources/hang/hang4.gif","Resources/hang/hang5.gif","Resources/hang/hang6.gif", "Resources/hang/hang7.gif","Resources/hang/hang8.gif","Resources/hang/hang9.gif", "Resources/hang/hang10.gif"];

var maxWrong = images.length;
var rightGuess = "";
var wrongGuess = "";
var word = "";
var secretWord = "";

$(function(){
	$('#category').find('option[value="select"]').prop('selected',true);

	});

function getWord()
{
	var element = document.getElementById("category");
	if (element != null || element == !ndefined ){
	var category = element.options[element.selectedIndex].value;
	if( category == "select")
	{
		alert("Please select category to start the game!")
	}
	else if (category == "animals")
	{
		word = animals[Math.floor(Math.random()*animals.length)];
	}
	else
	{
		word = colors[Math.floor(Math.random()*colors.length)];
	}
	getSecretWord();
}
}

$(function(){
  $("#display").hide();
  $(".option").click(function(){
    $("#display").show();
  });
});

function getSecretWord() {

	for(i = 0; i < word.length; i++){
		secretWord += "_";
		
	}

	displayWord(secretWord);
}

function displayWord(word)
{
	var display = document.getElementById("secret");
	if (display != null || display != undefined ){
	display.innerHTML = word;
}
}



function displayBoard()
{
	if (wrongGuess.length < maxWrong)
	{
		var border = images[ wrongGuess.length ];
		var p = document.getElementById("pic");
		if (p != null || p != undefined ){
		p.innerHTML = '<img class = "pictures" src ="' + border + '"/>';
	}
	}

}

$(function(){
 	$(".letters").click(function(){
    $(this).hide();
  	});
	});


function isLetterInWord(letter)
{
	var isRightGuess = false;


	for(i = 0; i< word.length; i++)
	{
		if(letter == word.substring(i, i + 1))
		{
			rightGuess += letter;
			secretWord = secretWord.substring(0, i) + letter + secretWord.substring(i + 1, secretWord.length + 1);
			displayWord(secretWord);
			var el = document.getElementById("right");
			if (el != null || el != undefined ){
			el.innerHTML =rightGuess;
		}
			isRightGuess = true;
			win();
		}
		
		
	}
	if(!isRightGuess)
		{
			wrongGuess += letter;
			var e = document.getElementById("wrong");
			if (e != null || e != undefined ){
			e.innerHTML =wrongGuess;
		}
			displayBoard();
			lose();
		}
			
}


function win()
{
	if(secretWord == word){
		alert("Браво!!! Спечели играта!! Думата беше: " + word);
	}
}
function lose()
{
	if( wrongGuess.length == maxWrong){
		alert("Вече си обесен!Думата беше: " + word + " .Ако искаш да играеш пак натисни бутона 'Нова Игра'.");
	}
}

function exitGame()
{
var r=confirm("Сигурен ли си?");
if (r==true)
  {
  alert("Ok :) До скоро!!");
  location = "http://www.youtube.com";
  }
}

