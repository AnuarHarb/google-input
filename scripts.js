'use strict';
var searchList = [];

function agregarOption()
{
	var busca = document.getElementById("busqueda").value;
	searchList.push(busca);  
	console.log(searchList);
}


function paintArray(){
    //var div = document.getElementById('dropdown');
    var ul = document.getElementById("dropdown");
    if(searchList.length=='0'){
        console.log('No hay sugerencias');
    } else {
        for(i of searchList){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(i));
            ul.appendChild(li);
        }
    }
    //return list;
}

function clearPaint(){
    var ul = document.getElementById("dropdown");
    ul.innerHTML='';
}
