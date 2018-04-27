"use strict";

//Déclaration des variables




//Déclaration des fonctions

function wordCounter(targetElement, targetFrame, maxWord) 
{
	let frames=document.querySelectorAll(targetFrame);
	let targetField=document.querySelector(targetElement);
	targetField.addEventListener("keyup", function()
	{
		let comment=targetField.value;
		let nbWords=comment.split(" "); //on récupère un tableau de mots
		let nbCharacters=comment.length; //on compte les caractères
		frames[0].innerText=nbWords.length; //on compte les mots
		frames[2].innerText=nbCharacters;

		if (comment=="")
		{
			frames[0].innerText=0;
		}
		if (frames[0].innerText>maxWord)
		{
			targetField.setAttribute("maxlength", nbCharacters);
		}
	});
	frames[1].innerText=maxWord;
}

//Activation des fonctions
document.addEventListener("DOMContentLoaded", function()
{
	wordCounter("#comment", ".frame", 5);
});