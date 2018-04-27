"use strict";


//Déclaration des variables

var i;

var regexMail=/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]{2,}\.[a-zA-Z]{2,4}$/;

var regexName=/^[a-zA-Zàâäéèêëîïôöûüùœ\'\s-]{2,}$/;

var regexCP=/^[0-9]{5}$/;

//Déclaration des fonctions


function focusFields(typeField, selectorMessage)
{
	let tabFields=document.querySelectorAll(typeField);
	let nbFields=tabFields.length;
	for (let i=0; i<nbFields; i++)
	{
		tabFields[i].addEventListener("focus", function()
		{
			let idField=this.getAttribute("id");
			this.style.border="2px solid #5CB85C";
			document.querySelector("#"+idField+" +"+selectorMessage).innerText="";
		});
		tabFields[i].addEventListener("blur", function()
		{
			let idField=this.getAttribute("id");
			this.style.border="1px solid #ccc";
			document.querySelector("#"+idField+" +"+selectorMessage).innerText="";
		});
	}
}
function checkEmail(idField)
{
	let target=document.querySelector(idField);
	target.addEventListener("blur", function()
	{
		if (!regexMail.test(target.value))
		{
			this.style.border="2px solid red";
		}
		else
		{
			this.style.border="1px solid #ccc";
		}
	});
}



/*-----------------------------------------------------
-------------------------------------------------------
-------------------------------------------------------*/

//Activation des fonctions
document.addEventListener("DOMContentLoaded", function()
{
	focusFields("input", "span");
	focusFields("select", "span");
	focusFields("textarea", "span");
});