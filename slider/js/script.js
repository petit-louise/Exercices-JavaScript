"use strict";


//Déclaration des variables

var imgs=document.querySelectorAll("#vitrines img");/*tableau qui regroupe ttes les imgs*/

var imgWidth=imgs[0].offsetWidth;/*récupère la largeur des imgs, ne marche que si les imgs ont toutes la même largeur*/
/*on peut remplacer offsetWidth par naturalWidth, qui conserve tout*/
var nbImg=imgs.length;/*détermine le nombre d'imgs*/

var imgSlider=document.querySelector(".imgSlider");

var imgLimite=imgWidth*nbImg;/*pour connaître la limite à ne pas dépasser*/

var sliding=0;

var idInterval;


//Déclaration des fonctions

function slider()
{
	if (sliding>-imgLimite)//imgLimite en négatif, car sinon img décalée de +500 alors qu'on veut -500
	{
		sliding-=imgWidth;//concaténation négative
		imgSlider.style.left=sliding+"px";
	}
	if (sliding===-imgLimite)
	{
		sliding=0;
		imgSlider.style.left="0";
	}
}

function showSlider()
{
	idInterval=window.setInterval(slider, 3000);
}

function stopSlider()
{
 	clearInterval(idInterval);
}

function replaySlider()
{
	showSlider();
}


//Activation des fonctions

document.addEventListener("DOMContentLoaded", function()
{
	showSlider();
	imgSlider.addEventListener("mouseover", stopSlider);
	imgSlider.addEventListener("mouseleave", replaySlider);
	btnMarche.addEventListener("click", replaySlider);
	btnStop.addEventListener("click", stopSlider);
});

