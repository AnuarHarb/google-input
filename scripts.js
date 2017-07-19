'use strict';

var searchList = ["algo","otra cosa","otra mas"];


function agregarOption()
{
	var busca = document.getElementById("busqueda").value;
	searchList.push(busca);  
	console.log(searchList);
}

